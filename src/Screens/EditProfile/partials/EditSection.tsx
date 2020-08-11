import React from 'react'
import {
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import { EditSectionProps } from '../index.interface'
import styles from '../styles';
import ButtonComp from '../../Auth/SignUpScreen/ButtonComp'
import TextComp from '../../../components/Text'
import Input from '../../../components/Input';
import Icon from '../../../components/Icon'
import Select from '../../../components/Select';
import WhatsIcon from '../../../components/WhatsIcon';
import FacebookIcon from '../../../components/FacebookIcon';
import InstagramIcon from '../../../components/InstagramIcon';
import AlarmIcon from '../../../components/AlarmIcon';
import PlusIcon from "../../../components/PlusIcon";
import ImageUploader from '../../../components/ImageUploader'
import colors from '../../../utilities/colors';
import registeredStyles from "../../../utilities/registeredStyles";
import MainContext from '../../../utilities/Context/context'
import useEditUserProfileRequest from '../../../utilities/LogicScreens/Profile/hooks/useEditUserProfileRequest'
import { IMAGE_BASE_URL } from '../../../utilities/infastructure/config'
import { CData, RegionData, InterestProps } from '../../../utilities/LogicScreens/Profile/interfaces/index.interface';
import WebsiteIcon from '../../../components/WebsiteIcon';
import YoutubeIcon from '../../../components/YoutubeIcon';
import NoDataPlaceHolder from '../../../components/NoDataPlaceHolder'
import uploadStyles from '../../../components/ImageUploader/styles'
import Avatar from '../../../components/Avatar'
const AddImg = require('../../../assests/eventfulAssests/images/AddImg.png')
const ProfShadow = require('../../../assests/eventfulAssests/images/ProfShadow.png')

const {
    memo,
    useMemo,
    useContext,
    Fragment,
    useCallback
} = React
const {
    flexStyle,
    selfCentered,
    fullWidth,
    rowStyle,
    verticalCenteredFlex,
    horizontalCenteredFlex,
    spaceBetweenItems,
    rtlRowStyle
} = registeredStyles
const inputTextStyle = { color: colors.black, fontSize: 14 }

const EditSection: React.FC<EditSectionProps> = ({
    dataParams,
}): JSX.Element => {

    const { state: { lang, langType, token } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const {
        // disabled,
        handleEditProfile,
        // toastMsg,
        userData,
        setUserData,
        changeImage,
        loading,
        countries,
        regions,
        cities,
        toastMsg,
        interestsArr
        // setMsg,
        // setDisabled
    } = useEditUserProfileRequest(dataParams, isRtl, token)
    const { social_links: {
        facebook,
        instagram,
        website,
        whatsapp,
        twitter,
        youtube,
        tiktok
    } } = userData
    const imageSource = typeof userData.logo === "string" ? IMAGE_BASE_URL + userData.logo : userData.logo.uri
    console.log("image", imageSource)
    // console.log("interestState =>", userData.interests)


    const handleInterestedSelect = useCallback((item: InterestProps | any) => {
        const foundedItem: InterestProps | any = userData.interests.find((i: InterestProps) => item.id === i.id)
        console.log("f", foundedItem)
        // const interestState: InterestProps[] | any = foundedItem ? userData.interests.map((i: InterestProps) => i.id) : [...userData.interests.map((i: InterestProps) => i.id), foundedItem?.id]
        const interestState: InterestProps[] | any = foundedItem == undefined ? [...userData.interests, item] : userData.interests
        console.log("interest", interestState)

        setUserData({
            ...userData,
            interests: interestState,
        })
        // console.log("interestState =>", userData.interests)
    }, [setUserData, userData])

    const onDeleteInterestItem = useCallback((item: InterestProps | any) => {
        let filteredList = userData.interests.filter((i: InterestProps) => item.id !== i.id)
        // const finList = filteredList.map((i: InterestProps) => item)
        console.log("use", filteredList)
        setUserData({
            ...userData,
            interests: filteredList
        })
    }, [
        setUserData,
        userData,

    ])
    console.log("userInt =>", userData.interests)


    const setLink = useCallback((socLink: string) => (e: any) => {
        setUserData({
            ...userData,
            social_links: {
                ...userData.social_links,
                [socLink]: e
            }
        })
    }, [setUserData, userData])
    console.log("uselogo =>", userData.logo)
    console.log("socialll", userData)
    const UploadView = useMemo(() =>
        <ImageUploader
            changeText={lang.Change}
            photo={typeof userData.logo === "string" ? IMAGE_BASE_URL + userData.logo : userData.logo.uri
                // IMAGE_BASE_URL + userData?.logo ||
                // userData.logo
            }
            onChange={changeImage}
            loading={loading}
        />, [
        userData,
        changeImage,
        loading
    ])
    return (
        <Fragment>
            <TouchableOpacity onPress={changeImage} style={flexStyle}>
                <NoDataPlaceHolder loading={loading}>
                    <Image source={{
                        uri: typeof userData.logo === "string" ? IMAGE_BASE_URL + userData.logo : userData.logo.uri,
                        // cache: "cacheOnly"
                    }}
                        style={[
                            uploadStyles.profImgStyle,
                            selfCentered,

                        ]} />
                    <Avatar source={ProfShadow}
                        imageStyle={[
                            selfCentered,
                            verticalCenteredFlex,
                            uploadStyles.profShadowStyle
                        ]}>
                        <TextComp children={lang.Change} center fontSize={14} onPress={changeImage} />
                    </Avatar>
                </NoDataPlaceHolder>
            </TouchableOpacity>
            <View style={[flexStyle, styles.editViewStyle]}>
                <TextComp
                    children={lang.UserData}
                    color={colors.black}
                    fontSize={20}
                    textStyle={styles.textStyle}
                />
                <Input
                    value={userData.first_name}
                    {...inputTextStyle}
                    inputStyle={fullWidth}
                    onChange={e => setUserData({
                        ...userData,
                        first_name: e
                    })}
                />
                <Input
                    value={userData?.last_name}
                    {...inputTextStyle}
                    inputStyle={fullWidth}
                    onChange={e => setUserData({
                        ...userData,
                        last_name: e
                    })}
                />
                <Input
                    value={userData?.email}
                    {...inputTextStyle}
                    inputStyle={fullWidth}
                    onChange={e => userData && setUserData({
                        ...userData,
                        email: e
                    })}
                />
                <Input
                    value={userData?.mobile}
                    {...inputTextStyle}
                    inputStyle={fullWidth}
                    onChange={e => userData && setUserData({
                        ...userData,
                        mobile: e
                    })}
                />
                <Select
                    isRtl={isRtl}
                    selectStyle={[
                        selfCentered,
                        fullWidth
                    ]}
                    items={countries}
                    selecteditems={userData.country}
                    onChangeSelected={(item: CData) => {
                        setUserData({
                            ...userData,
                            country_id: item.id,
                            country: item.name
                        })
                    }}
                />
                <Select
                    isRtl={isRtl}
                    selectStyle={[
                        selfCentered,
                        fullWidth
                    ]}
                    items={regions}
                    selecteditems={userData.region}
                    onChangeSelected={(item: RegionData) => {
                        setUserData({
                            ...userData,
                            region_id: item.id,
                            region: item.name
                        })
                    }}
                />

                <Select
                    isRtl={isRtl}
                    selectStyle={[
                        selfCentered,
                        fullWidth
                    ]}
                    items={cities}
                    selecteditems={userData.city}
                    onChangeSelected={(item: CData) => {
                        setUserData({
                            ...userData,
                            city_id: item.id,
                            city: item.name
                        })
                    }}
                />
                <Select
                    multiSelect={true}
                    isRtl={isRtl}
                    selectStyle={[
                        selfCentered,
                        fullWidth
                    ]}
                    items={
                        // userData?.interests ? userData?.interests : []
                        interestsArr
                    }
                    selecteditems={
                        userData?.interests
                    }
                    onChangeSelected={handleInterestedSelect}
                    onUpcomindDeleteItem={onDeleteInterestItem}
                />
            </View>
            <View style={[flexStyle, styles.editViewStyle]}>
                <TextComp children={lang.SocData}
                    // 'Social Data' 
                    color={colors.black}
                    fontSize={20}
                    textStyle={styles.textStyle} />
                {
                    [0, 1, 2, 3, 4, 5, 6].map((idx: number) =>
                        <View key={idx} style={[
                            rowStyle,
                            fullWidth,
                            horizontalCenteredFlex,
                            spaceBetweenItems,
                            isRtl && rtlRowStyle
                        ]}>
                            {idx === 6 ?
                                <TouchableOpacity
                                    style={{ paddingLeft: 5, width: 38, height: 28, borderRadius: 25 }}>
                                    <Avatar source={AddImg} imageStyle={{ width: 20, height: 20 }} />
                                </TouchableOpacity>
                                :
                                <Icon children={
                                    !idx ? <WhatsIcon />
                                        : idx === 1 ? <FacebookIcon />
                                            : idx === 2 ? <InstagramIcon />
                                                : idx === 3 ? <AlarmIcon />
                                                    : idx === 4 ? <WebsiteIcon color={colors.main} /> :
                                                        idx === 5 && <YoutubeIcon />

                                } containerStyle={{ width: "10%", marginBottom: 25 }} />
                            }
                            <Input
                                isRTL={isRtl}
                                placeholder={lang.AddLink}
                                // 'add link'
                                {...inputTextStyle}
                                value={
                                    !idx ? whatsapp
                                        : idx === 1 ? facebook
                                            : idx === 2 ? instagram
                                                : idx === 3 ? twitter
                                                    : idx === 4 ? website :
                                                        idx === 5 ? youtube :
                                                            idx === 6 && tiktok
                                }
                                inputStyle={{ minWidth: "90%" }}
                                onChange={setLink(
                                    !idx ? "whatsapp"
                                        : idx === 1 ? "facebook"
                                            : idx === 2 ? "instagram"
                                                : idx === 3 ? "twitter"
                                                    : idx === 4 ? "website" :
                                                        idx === 5 ? "youtube" :
                                                            idx === 6 ? "tiktok" : ""
                                )}
                            />
                        </View>
                    )
                }

                <TextComp
                    children={toastMsg}
                    color={"green"}
                    fontSize={18}
                    center
                />

                {/* <Avatar imageStyle={{ width: 25, height: 25 }} source={ContainerImg} >
                    <Avatar imageStyle={{ width: 8, height: 8 }} source={AddImg} /></Avatar> */}
            </View>
            <ButtonComp
                title={lang.Save}
                style={styles.saveButStyle}
                onPress={handleEditProfile}
            />
        </Fragment>

    )
}

export default memo(EditSection)

