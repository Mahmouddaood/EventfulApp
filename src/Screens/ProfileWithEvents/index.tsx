import React from 'react'
import {
    View,
    ScrollView,
    Modal,
    // Animated,
    // ImageBackground,
    // TouchableOpacity,
    // Easing
} from 'react-native'
const PushNotification = require('react-native-push-notification')
import CreateEventStyles from '../CreateEvent/styles'
import BottomTab from '../../components/BottomTab'
// import {
//     ButtonList,
//     ImageListProps,
//     imageList
// } from './indes.interface'
import styles from './styles'
import ProfileEventProps from "./indes.interface";
import ProfileInfo from './partials/ProfileInfo';
// import Avatar from '../../components/Avatar'
import BackImage from '../../components/BackImage'
import BackIcon from '../../components/BackIcon'
import Icon from '../../components/Icon'
import SettingIcon from '../../components/MenuIcon'
import ArrowIcon from '../../components/ArrowIcon'
import registeredStyles from '../../utilities/registeredStyles'
// import List from '../../components/List'
// import TextComp from '../../components/Text'
// import PlusView from '../MainProfile/partials/Events/partails/PlusView';
// import colors from '../../utilities/colors';
import MainContext from '../../utilities/Context/context'
// import useGetProfileRequest from '../../utilities/LogicScreens/Profile/hooks/useGetProfileRequest'
import EventInfoSection from '../MainProfile/partials/Events/partails/EventInfoSection';
import BottomGroupIcon from '../../components/BottomGroupIcon'
import LeftArrowIcon from '../../components/LeftArrowIcon'
import MoreGroupIcon from '../../components/MoreGroupIcon'
import colors from '../../utilities/colors'
import EventDetail from '../../utilities/infastructure/apis/EventDetail'
import { getFromStorage, saveToStorage } from '../../utilities/infastructure/validator/localStorage'
import notify from '../Notification/partials/notify'
import { moderateScale } from '../../utilities/Context/responsive'

const {
    getSingleEventDetails
} = EventDetail
// const LocImg = require("../../assests/eventfulAssests/images/LocImg.png")

const {
    flexStyle,
    rowStyle,
    selfCentered,
    shadow,
    verticalCenteredFlex,
    spaceBetweenItems,
    horizontalCenteredFlex,
    rtlRowStyle
} = registeredStyles
const {
    memo,
    useCallback,
    useMemo,
    useState,
    useContext,
    Fragment,
    useEffect
} = React

const ProfileEvents: React.FC<ProfileEventProps> = ({ navigation }): JSX.Element => {

    // const [selected, onSelect] = useState<string>("1")
    // const changeSelected = useCallback((idx: string) => () => onSelect(idx), [selected])
    // const [fadeAnimated] = useState(new Animated.Value(0))
    const { state: { lang, langType, id, token } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const { navigate, goBack } = useMemo(() => navigation, [navigation])
    const handleNavigate = useCallback(() => navigate("CreateEvent"), [navigate])
    const navigateSettings = useCallback(() => navigate("Settings"), [navigate])
    const navigateBack = useCallback(() => goBack(), [goBack])

    useEffect(() => {
        // const language = navigation.getParam("language")
        PushNotification.configure({
            // smallIcon: "notification_icon",
            // largeIcon: "notification_icon",
            onNotification: async (notification: any) => {
                console.log("prdevvv")
                notify(
                    notification.event_id,
                    isRtl,
                    token,
                    navigation
                )
                // navigation.push("Notification")


                // const notifications: any = await getFromStorage("notifications")
                // let userNot = await JSON.parse(notifications)
                // console.log("storage =>", userNot)
                // console.log("noiniinin", notification)
                // const eventAdded = await getSingleEventDetails(
                //     notification.event_id,
                //     token,
                //     isRtl ? "en" : "ar"
                // )
                // // const notifications: any = await getFromStorage("notifications")
                // // let userNot = await JSON.parse(notifications)
                // // console.log("usr =>", userNot)

                // if (!userNot) {
                //     console.log("no")
                //     await saveToStorage("notifications", JSON.stringify([eventAdded.data]))
                // } else {
                //     console.log("yes", userNot.find((item: any) => item.id === eventAdded.data.id))
                //     if (!userNot.find((item: any) => item.id === eventAdded.data.id)) {
                //         userNot = [...userNot, eventAdded.data]
                //         await saveToStorage("notifications", JSON.stringify(userNot))
                //     }
                // }
            },
            smallIcon: "eventful",
            largeIcon: "eventful"
        })

    }, [navigation])


    return (
        <Fragment>
            <ScrollView
                style={[flexStyle, styles.scrollStyle]}
                scrollEnabled
                shouldRasterizeIOS
            >
                <BackImage
                    loginImgStyle={styles.backImgStyle}
                    leftIcon={
                        <View style={{
                            flexDirection: "row",
                            width: "100%",
                            paddingHorizontal: "2%",
                            alignItems: "center",
                            height: "25%",
                            bottom: "5%",
                        }}>
                            <Icon children={
                                <LeftArrowIcon
                                    height={20}
                                    width={25}
                                    onPress={navigateBack}

                                />}
                                containerStyle={styles.arrowStyle}
                                onPress={navigateBack}

                            />
                            <Icon children={
                                <MoreGroupIcon
                                    height={20}
                                    width={20}
                                    onPress={navigation.openDrawer}
                                />}
                                containerStyle={[styles.arrowStyle]}
                                onPress={navigation.openDrawer}
                            />


                        </View>
                    }
                />
                {/* // anthorView={ 
            <View
                //         style={[
                //             styles.iconContentStyle,
                //             rowStyle,
                //             isRtl && rtlRowStyle,
                //             selfCentered
                //         ]}
                //     >
                //         <Icon children={<ArrowIcon width={30} height={30} />} onPress={() => { console.log("ddd") }} />
                //         {/* <Icon children={<SettingIcon onPress={navigateSettings} />} onPress={() => { console.log("ddd") }} /> */}

                {/* < ScrollView
                style={[flexStyle, styles.scrollStyle]}
                scrollEnabled
                shouldRasterizeIOS
            > */}
                <ProfileInfo isRtl={isRtl} navigation={navigation} />
                <EventInfoSection
                    containerStyle={styles.contentStyle}
                    navigation={navigation}
                    plus={false}
                />


            </ScrollView>
            <BottomTab selectedTab={"ProfilEvents"} navigation={navigation} />
            {/* <BottomTab selectedTab={"Notification"} navigation={navigation} /> */}
        </Fragment>
    );
}


export default memo(ProfileEvents)

// const imageFocus = useCallback(() => {
    //     Animated.timing(fadeAnimated, {
    //         toValue: 1,
    //         duration: 1000,
    //         easing: Easing.ease
    //     }).start()

    // }, [fadeAnimated])

    // const { state: { lang, langType, id } } = useContext(MainContext)
    // const isRtl = useMemo(() => langType === "ar", [langType])



    // const imageRender = useCallback(({ item }: { item: ImageListProps }) =>
    //     <TouchableOpacity onPress={imageFocus} >
    //         <ImageBackground key={item.key} source={item.image} style={styles.flatImgStyle} >
    //             <Animated.View style={[
    //                 styles.detailImgStyle,
    //                 shadow,
    //                 verticalCenteredFlex,
    //                 {
    //                     opacity: fadeAnimated,
    //                 }
    //             ]}>
    //                 < View >
    //                     <TextComp children={"Halloween Party "} fontSize={15} color={colors.purple} />
    //                     <View style={[
    //                         rowStyle,
    //                         spaceBetweenItems,
    //                         horizontalCenteredFlex,
    //                         styles.bottomSectionStyle
    //                     ]}>
    //                         <Avatar source={LocImg} imageStyle={styles.locStyle} />

    //                         <TextComp
    //                             fontSize={14}
    //                             color={colors.darkPlaceHolder}
    //                             children={"28th street, Saihat, Saudi Arabia"} />
    //                     </View>
    //                 </View>
    //             </Animated.View>
    //         </ImageBackground >
    //     </TouchableOpacity >
    //     , [fadeAnimated, imageFocus])