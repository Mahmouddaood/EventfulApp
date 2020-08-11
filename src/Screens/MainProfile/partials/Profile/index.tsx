import React from 'react'
import {
    View,
    ScrollView,
    Linking,
    TouchableOpacity,
    Modal
} from 'react-native'
import ProfileSectionProps from './index.interface'
import styles from './styles'
import RenderTextView from './partials/RenderTextView'
import TextComp from '../../../../components/Text'
import ViewItem from '../../../../components/ViewItem'
import registeredStyles from '../../../../utilities/registeredStyles'
import Icon from '../../../../components/Icon'
import AlarmIcon from '../../../../components/AlarmIcon'
import InstagramIcon from '../../../../components/InstagramIcon'
import WhatsIcon from '../../../../components/WhatsIcon'
import FacebookIcon from '../../../../components/FacebookIcon'
import ForwardIcon from '../../../../components/ForwardIcon'
import LockIcon from '../../../../components/LockIcon'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import NoDataPlaceHolder from '../../../../components/NoDataPlaceHolder'
import Avatar from '../../../../components/Avatar'
import colors from '../../../../utilities/colors'
import MainContext from '../../../../utilities/Context/context'
import ChevronIcon from '../../../../components/ChevronIcon'
import useGetProfileRequest from '../../../../utilities/LogicScreens/Profile/hooks/useGetProfileRequest'
import { InterestProps } from '../../../../utilities/LogicScreens/Profile/interfaces/index.interface'
import RenderModal from './partials/RenderModal'
import useChangePassRequest from '../../../../utilities/LogicScreens/Profile/hooks/useChangePassRequest'
import WebsiteIcon from '../../../../components/WebsiteIcon'
import SmsIcon from '../../../../components/SmsIcon'
const CloseImg = require('../../../../assests/eventfulAssests/images/close.png')
const {
    flexStyle,
    spaceBetweenItems,
    rowStyle,
    selfCentered,
    horizontalCenteredFlex,
    verticalCenteredFlex,
    shadow,
    fullWidth,
    rtlRowStyle
} = registeredStyles
const {
    useMemo,
    memo,
    useCallback,
    useContext,
    useState
} = React


const ProfileSection: React.FC<ProfileSectionProps> = ({ navigation: { navigate } }): JSX.Element => {

    const [modalFlag, setModal] = useState<boolean>(false)
    const { state: { lang, langType, id, token } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const {
        data,
        loading
    } = useGetProfileRequest(id)
    const {
        email,
        mobile,
        city,
        name,
        photo_url,
        interests,
        social_links,
        country,
        region,
        bio_en,
        bio_ar
    } = useMemo(() => data || {}, [data])
    const {
        facebook,
        twitter,
        instagram,
        whatsapp,
        website
    } = useMemo(() => social_links || {}, [social_links])
    const navigateEditProfile = useCallback(() => navigate("EditProfile", {
        profileData: data
    }), [
        navigate,
        data
    ])
    const interestedMap = useCallback((item: InterestProps, idx: number) =>
        (isRtl ? item.title_ar : item.title_en) && <View key={idx} style={[styles.infoItemStyle, shadow, verticalCenteredFlex]}>
            <TextComp children={isRtl ? item.title_ar : item.title_en} center textStyle={styles.infoTxtStyle} />
        </View>
        , [isRtl])

    const {
        modalVisible,
        setVisible,
    } = useChangePassRequest(token)

    return (
        <ScrollView
            style={[flexStyle, styles.scrollStyle]}
            scrollEnabled
            shouldRasterizeIOS
        >
            <ViewItem
                loading={loading}
                image={{
                    uri: photo_url
                }}
                isRtl={isRtl}
                detailStyle={{ width: "70%" }}
                description={isRtl ? bio_ar : bio_en}
                name={name}
                nameStyle={[styles.nameStyle, isRtl && styles.rtlNameStyle]}
                firstContentStyle={[styles.firstContentStyle, spaceBetweenItems]}
                itemStyle={styles.itemStyle}
                avatarStyle={styles.avatarStyle}
                descStyle={[styles.descStyle]}
            />
            <RenderTextView
                isRtl={isRtl}
                endLine
                firstTextStyle={styles.firstTextStyle}
                headStyle={styles.headVStyle}
                title={lang.PersonalData}
                value={lang.Edit}
                onPress={navigateEditProfile}
            />
            <View style={{ bottom: 8 }}>
                <RenderTextView
                    loading={loading}
                    isRtl={isRtl}
                    title={lang.YourName}
                    value={name}
                    endLine={false}
                    endTextStyle={[styles.endTextStyle, { fontSize: name && name?.length > 30 ? 12 : 14 }]}
                />
                <RenderTextView
                    loading={loading}
                    isRtl={isRtl}
                    title={lang.EmailAddress}
                    value={email}
                    endLine={false}
                    endTextStyle={[styles.endTextStyle, { fontSize: email && email?.length > 30 ? 12 : 14 }]}
                />
                <RenderTextView
                    loading={loading}

                    isRtl={isRtl}
                    title={lang.Phone}
                    // "phone number"
                    value={mobile}
                    endLine={false}
                    endTextStyle={styles.endTextStyle}
                />
                <RenderTextView
                    loading={loading}
                    isRtl={isRtl}
                    title={lang.city}
                    value={city}
                    endLine={false}
                    endTextStyle={styles.endTextStyle}
                />
                <RenderTextView
                    loading={loading}
                    isRtl={isRtl}
                    title={lang.Country}
                    value={country}
                    endLine={false}
                    endTextStyle={styles.endTextStyle}
                />
                <RenderTextView
                    loading={loading}
                    isRtl={isRtl}
                    title={lang.Region}
                    value={region}
                    endLine={false}
                    endTextStyle={styles.endTextStyle}
                />
                <View style={styles.anthorProfileStyle}>
                    <TextComp
                        children={lang.Interested}
                        fontSize={14}
                        color={colors.lightGrey}
                        textStyle={isRtl && [styles.interstStyle, { textAlign: "right" }]}
                    />
                    <NoDataPlaceHolder loading={loading}>
                        <View style={[isRtl ? rtlRowStyle : rowStyle, fullWidth, selfCentered, styles.infoStyle, horizontalCenteredFlex]}>
                            {interests && interests.map(interestedMap)}
                        </View>
                    </NoDataPlaceHolder>
                </View>
                <View style={[styles.anthorProfileStyle]}>
                    <TextComp
                        children={lang.SocMedia}
                        fontSize={14}
                        color={colors.lightGrey}
                        textStyle={isRtl && [styles.interstStyle, { textAlign: "right" }]}
                    />
                    <View style={[isRtl ? rtlRowStyle : rowStyle, styles.iconContainerStyle, spaceBetweenItems]}>
                        <ScrollView horizontal style={[flexStyle]}>
                            <NoDataPlaceHolder loading={loading}>
                                <Icon containerStyle={{ height: "100%", width: "100%", marginHorizontal: 6 }} children={<AlarmIcon onPress={() => Linking.openURL(twitter)} />} />
                            </NoDataPlaceHolder>
                            <NoDataPlaceHolder loading={loading}>
                                <Icon containerStyle={{ height: "100%", width: "100%", marginHorizontal: 6 }} children={<InstagramIcon onPress={() => Linking.openURL(instagram)} />} />
                            </NoDataPlaceHolder>
                            <NoDataPlaceHolder loading={loading}>
                                <Icon containerStyle={{ height: "100%", width: "100%", marginHorizontal: 6 }} children={<FacebookIcon
                                    // iconStyle={{}}
                                    onPress={() => Linking.openURL(facebook)} />} />
                            </NoDataPlaceHolder>
                            <NoDataPlaceHolder loading={loading}>
                                <Icon containerStyle={{ height: "100%", width: "100%", marginHorizontal: 6 }} children={<WhatsIcon onPress={() => Linking.openURL(whatsapp)} />} />
                            </NoDataPlaceHolder>

                            <NoDataPlaceHolder loading={loading}>
                                <Icon containerStyle={{ height: "100%", width: "100%", marginHorizontal: 6 }} children={<SmsIcon iconStyle={{
                                    top: 2,
                                }} onPress={() => Linking.openURL(whatsapp)} />} />
                            </NoDataPlaceHolder>
                            <NoDataPlaceHolder loading={loading}>
                                <Icon containerStyle={{ height: "100%", width: "100%", marginHorizontal: 6 }} children={<WebsiteIcon iconStyle={{
                                    top: 3
                                }} onPress={() => Linking.openURL(website)} />} />
                            </NoDataPlaceHolder>

                        </ScrollView>
                    </View>

                </View>

                <View style={[
                    styles.lastViewStyle,
                    rowStyle,
                    selfCentered,
                    isRtl && rtlRowStyle
                ]} >
                    <TouchableOpacity style={[
                        styles.iconTxtStyle,
                        rowStyle,
                        horizontalCenteredFlex,
                        isRtl && rtlRowStyle
                    ]}
                        onPress={() => setVisible(true)}
                    >
                        <Icon children={<LockIcon />} />
                        <TextComp children={lang.ChangePass}
                            color={colors.black} textStyle={styles.changePassStyle} />
                    </TouchableOpacity>
                    <Icon children={<ChevronIcon initialDirection={!isRtl ? "left" : "right"} width={30} height={13} />} onPress={() => setVisible(true)} />
                </View>
            </View>
            {modalVisible && <RenderModal
                headTitle={"Change Your Password"}
                token={token}
                modalFlag={modalVisible}
                setModal={setVisible}
            />
            }
        </ScrollView>
    );
}
export default memo(ProfileSection)