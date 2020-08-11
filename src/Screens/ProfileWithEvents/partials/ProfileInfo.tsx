import React, { Fragment, useState } from 'react'
import {
    View,
    TouchableOpacity,
    Modal,
    ScrollView
} from 'react-native'
import Swiper from 'react-native-swiper'
import SocialSection from './SocialSection'
import styles from '../styles'
import TextComp from '../../../components/Text'
import ViewItem from '../../../components/ViewItem'
import registeredStyles from '../../../utilities/registeredStyles'
import FollowSection from './FollowSection'
import BasicSection from './BasicSection'
import MainContext from '../../../utilities/Context/context'
import useGetProfileRequest from '../../../utilities/LogicScreens/Profile/hooks/useGetProfileRequest'
import useUnfollowProfile from '../../../utilities/LogicScreens/Profile/hooks/useUnfollowProfile'
import { NavigationProps } from '../../../utilities/generalInterface'
import Button from '../../../components/Button'
import { isArrayHasData } from '../../../utilities/infastructure/validator/isThereData'
import {
    FollowerInterface,
} from '../../../utilities/LogicScreens/Profile/interfaces/index.interface'
import colors from '../../../utilities/colors'
import { State } from 'react-native-image-zoom-viewer/built/image-viewer.type'
import AlarmIcon from '../../../components/AlarmIcon'
import Avatar from '../../../components/Avatar'
const ProfImag = require('../../../assests/eventfulAssests/images/ProfileImg.png')

const {
    selfCentered,
    shadow,
    verticalCenteredFlex,
    horizontalCenteredFlex
} = registeredStyles
const {
    memo,
    useMemo,
    useContext
} = React

interface ProfileInfoProps extends NavigationProps {
    isRtl?: boolean,


}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ isRtl, navigation }): JSX.Element => {

    const { state, setContext } = useContext(MainContext)
    const { id, token, isGuest, lang, profileEdited } = useMemo(() => state, [state])
    const { navigate, getParam } = useMemo(() => navigation, [navigation])
    const profileId = getParam("profileItemId")
    const [bioModal, setBioModal] = useState(false)
    const {
        data,
        loading,
        setData
    } = useGetProfileRequest(profileId ? profileId : id)
    const {
        name,
        photo_url,
        social_links,
        followings_count,
        followers_count,
        bio_en,
        bio_ar,
        followers,
        followings
    } = useMemo(() => data || {}, [data, profileId])

    // const {
    //     facebook,
    //     twitter,
    //     instagram,
    //     whatsapp
    // } = useMemo(() => social_links || {}, [social_links])
    const {
        handleUnfollow,
        follwerModal,
        setModalVis,
        toastMsg,
        setMsg
    } = useUnfollowProfile()
    console.log("data=> ", profileId, data)
    const arrMap = (
        follwerModal === "follower" && isArrayHasData(followers)
    ) ? followers : (
        follwerModal === "following" && isArrayHasData(followers)
    ) && followings


    return (
        <View style={[styles.profileStyle, shadow, selfCentered]}>
            <BasicSection
                isRtl={isRtl}
                isGuest={isGuest}
                navigation={navigation}
                name={name}
                image={photo_url}
                bio={isRtl ? bio_ar : bio_en}
                setBioModal={setBioModal}
                bioModal={bioModal}
            />


            <SocialSection socialLinks={social_links} loading={loading} />

            <TouchableOpacity onPress={() => handleUnfollow(id, token, isRtl)} style={[
                styles.followStyle,
                selfCentered,
                horizontalCenteredFlex,
                verticalCenteredFlex
            ]}>
                <TextComp children={toastMsg !== "" ? toastMsg : isRtl ? "متابعه" : "Follow"} />
            </TouchableOpacity>
            {/* <TextComp children={toastMsg} color={"green"} center /> */}
            {follwerModal.length > 0 && <Modal transparent >
                {/* <ScrollView > */}
                <View style={[styles.followModalStyle, selfCentered]}>
                    <View style={[
                        horizontalCenteredFlex,
                        verticalCenteredFlex,
                        selfCentered,
                        styles.headStyle
                    ]
                    }>

                        <TextComp children={
                            follwerModal === "follower" ?
                                lang.Followers :
                                lang.Followings}
                            fontSize={18}
                            center

                        />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            //  arrMap
                            arrMap.map((
                                follower: FollowerInterface,
                                idx: number) =>
                                <ViewItem
                                    onPressItem={() => {
                                        navigation.navigate("ProfileEvents", {
                                            profileItemId: follower.id
                                        })
                                        console.log("ss", follower.id, followings.find((following: FollowerInterface) => following.id === follower.id))
                                        setModalVis("")
                                        setMsg((
                                            follwerModal === "following" && followings.find((following: FollowerInterface) => following.id === follower.id
                                            )
                                        ) ? "Following" : "Follow")
                                        setContext({
                                            ...state,
                                            profileEdited: !profileEdited
                                        })
                                    }

                                    }
                                    itemStyle={styles.itemStyle}
                                    isRtl={isRtl}
                                    key={follower.id}
                                    name={follower.name === " " ? follower?.company_name : follower.name}
                                    image={{ uri: follower.photo_url }}
                                    nameStyle={{
                                        fontSize: follower.name.length > 15 ? 15 : 14
                                    }}
                                    descStyle={{
                                        fontSize: follower.email.length > 27 ? 11 : 14,
                                    }}
                                    detailStyle={isRtl ? styles.rtlDetailStyle : styles.detailStyle}
                                    description={follower.email}
                                    // leftView={
                                    //     <View style={[styles.leftStyle, horizontalCenteredFlex, verticalCenteredFlex]}>
                                    //         <TextComp children={lang.LastLogin} color={colors.main} fontSize={16} textStyle={{
                                    //             marginTop: 10
                                    //         }} />
                                    //         <View style={{
                                    //             backgroundColor: colors.mainBlueSky, marginTop: 4, borderRadius: 5,
                                    //         }}>
                                    //             <TextComp center children={follower.last_login} fontSize={12} color={colors.white} />
                                    //         </View>
                                    //     </View>

                                    // }
                                    avatarStyle={styles.avatarStyle}
                                />


                            )}

                    </ScrollView>
                    <Button
                        onPress={() => setModalVis("")}
                        containerStyle={{
                            width: 80,
                            height: 30,
                            backgroundColor: colors.purple,
                            justifyContent: "center",
                            alignItems: "center",
                            alignSelf: "center",
                            marginTop: 10
                        }}
                        title={"Close"} />
                </View>
                {/* </ScrollView> */}
            </Modal>
            }
            <FollowSection
                setModal={setModalVis}
                followerTitle={lang.Followers}
                followingTitle={lang.Followings}
                followers={followers_count}
                following={followings_count}
            />
        </View>
    );
}




export default memo(ProfileInfo)

{/* <View style={[rowStyle, selfCentered, styles.infoStyle, horizontalCenteredFlex]}>
    <View style={[styles.infoItemStyle, shadow]}>
        <TextComp children='#Design' center textStyle={styles.infoTxtStyle} />
    </View>
    <View style={[styles.infoItemStyle, shadow]}>
        <TextComp children='#Voice Over' center textStyle={styles.infoTxtStyle} />
    </View>
    <View style={[styles.infoItemStyle, shadow]}>
        <TextComp children='#Singing' center textStyle={styles.infoTxtStyle} />
    </View>
</View> */}