import React, { useState } from 'react'
import {
    ScrollView, View,
} from 'react-native'
import styles from './styles';
const PushNotification = require('react-native-push-notification')
import EventDetail from '../../utilities/infastructure/apis/EventDetail'
import {
    isArrayHasData
} from '../../utilities/infastructure/validator/isThereData'
import NotificationProps,

{
    notificationData,
    notificationDataProps,
    NewNotificationProps
} from './index.interface'
import firebase, { notifications } from 'react-native-firebase'
import TextComp from '../../components/Text'
import Header from '../../components/HeaderComp'
import registeredStyles from "../../utilities/registeredStyles";
import colors from '../../utilities/colors';
import ViewItem from '../../components/ViewItem';
import BottomTab from '../../components/BottomTab'
import MainContext from '../../utilities/Context/context'
import {
    EventDetailItem
} from '../../utilities/LogicScreens/EventDetail/interfaces/index.interface'
import {
    saveToStorage,
    getFromStorage
} from "../../utilities/infastructure/validator/localStorage";
import dashStyles from '../ProfileWithEvents/styles'
import useFetchSingleEventDetailRequest from '../../utilities/LogicScreens/EventDetail/hooks/useFetchSingleEventDetailRequest'
import useNotificationRequest from '../../utilities/LogicScreens/Notification/useNotificationRequest'
const DjNight = require('../../assests/eventfulAssests/images/DjNight.png')
const {
    getSingleEventDetails
} = EventDetail

const {
    memo,
    useCallback,
    useContext,
    useMemo,
    Fragment,
    useEffect
} = React
const {
    flexStyle,
    horizontalCenteredFlex,
    verticalCenteredFlex,
    rowStyle
} = registeredStyles

const Notification: React.FC<NotificationProps> = ({ navigation, notificationData }): JSX.Element => {


    const {
        data,
        loading
    } = useNotificationRequest()
    const {
        eventName,
        eventDescription,
        image,
        key,
        date
    } = notificationData[0] || data
    const { state, setContext } = useContext(MainContext)
    const { lang, langType, notifications, token, firstNotification } = useMemo(() => state, [state])
    const isRtl = useMemo(() => langType === "ar", [langType])
    const [upcomingNotifications, updateState] = useState<any>([])

    const notificationItemRenderer = useCallback((item: EventDetailItem | any) => <ViewItem
        isRtl={isRtl}
        itemStyle={{ width: "95%" }}
        key={item.id}
        onPressItem={() => navigation.navigate("EventDetail", {
            data: item
        })}
        name={item.name}
        image={{ uri: item.photo_url }}
        description={item.description && (item.description.length > 50 ?
            item.description.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 50)
            : item.description.replace(/<\/?[^>]+(>|$)/g, ""))}
        nameStyle={{
            textAlign: isRtl ? "right" : "left",
            fontSize: item.name && (item?.name.length > 18 ? 13 : 18)
        }}
        descStyle={{
            textAlign: isRtl ? "right" : "left",
            fontSize: item.description ? (item?.description.length > 35 ? 8 : 16) : 14
        }}
        detailStyle={{ margin: 0, marginHorizontal: 8 }}
        leftView={
            <View style={[
                rowStyle,
                horizontalCenteredFlex,
                verticalCenteredFlex,
                styles.leftContentStyle
            ]}>
                <View style={[styles.leftStyle, horizontalCenteredFlex, verticalCenteredFlex, { minWidth: 50 }]}>
                    <TextComp center children={item.formatted_date} fontSize={10} />
                </View>
                <View style={[styles.leftStyle, { backgroundColor: colors.mainBlueSky }, horizontalCenteredFlex, verticalCenteredFlex]}>
                    <TextComp center children={item.event_subscription} fontSize={11} />
                </View>
            </View>
        }
        avatarStyle={{
            width: 57,
            height: 57,
            borderRadius: 15
        }}
    />
        , [
            isRtl,
            notifications
        ])

    // const [notifications, setNotifications] = useState<any>([])
    const receiveNotification = useCallback(async () => {

        const notifications: any = await getFromStorage("notifications")
        let userNot = await JSON.parse(notifications)
        console.log("storage =>", userNot)
        if (userNot) {
            updateState(userNot)
        }
        // if (firstNotification) {
        //     updateState([firstNotification])

        // }

        // PushNotification.configure({
        //     // smallIcon: "notification_icon",
        //     // largeIcon: "notification_icon",
        //     onNotification: async (notification: any) => {
        //         console.log("noiniinin", notification)
        //         const eventAdded = await getSingleEventDetails(
        //             notification.event_id,
        //             token,
        //             isRtl ? "en" : "ar"
        //         )
        //         const notifications: any = await getFromStorage("notifications")
        //         let userNot = await JSON.parse(notifications)
        //         console.log("usr =>", userNot)

        //         if (!userNot) {
        //             console.log("no")
        //             await saveToStorage("notifications", JSON.stringify([eventAdded.data]))
        //             updateState([eventAdded.data])
        //         } else {
        //             console.log("yes", userNot.find((item: any) => item.id === eventAdded.data.id))
        //             if (!userNot.find((item: any) => item.id === eventAdded.data.id)) {
        //                 userNot = [...userNot, eventAdded.data]
        //                 await saveToStorage("notifications", JSON.stringify(userNot))
        //                 updateState(userNot)
        //             } else {
        //                 updateState(userNot)
        //             }
        //         }
        //     }
        // })

        //         // const notificationState = !notifications.find((item: any) => item.id === eventAdded.data.id) ? [
        //         //     ...notifications, eventAdded.data
        //         // ] : notifications
        //         // console.log("notiState =>", notifications.find((item: any) => item.id === eventAdded.data.id))
        //         // // await getFromStorage("notifications")
        //         // //     .then(() => {
        //         // setContext({
        //         //     ...state,
        //         //     notifications: notificationState
        //         // })


        //     },
        //     smallIcon: "eventful",
        //     largeIcon: "eventful"

        // })
        // let item = navigation.getParam("notification")
    }, [
        // setContext,
        // state,
        navigation,
        token,
        isRtl,
        // notifications,
        updateState,
        // upcomingNotifications

    ])

    useEffect(() => {
        receiveNotification()
    }, [
        receiveNotification
    ])
    console.log(
        "notifications", upcomingNotifications
    )
    return <Fragment>
        <ScrollView
            style={flexStyle}
            scrollEnabled
            shouldRasterizeIOS
        >
            <Header
                navigation={navigation}
                screenTitle={lang.Notification}
            />
            {/* {navigation.getParam("notification") &&
                <Fragment>
                    <TextComp
                        children={lang.New}
                        // 'New'
                        fontSize={16}
                        textStyle={isRtl ?
                            [
                                styles.txtStyle,
                                styles.rightTxtStyle
                            ] :
                            [
                                styles.txtStyle,
                                styles.leftTxtStyle
                            ]}
                        color={colors.placeholder}
                    />
                    <ViewItem
                        isRtl={isRtl}
                        key={key}
                        name={navigation.getParam("notification").notificationItem.title}
                        image={{ uri: navigation.getParam("notification").notificationImage.uri } || DjNight}
                        description={navigation.getParam("notification").notificationDesc}
                        value={date}
                        avatarStyle={{
                            width: 57,
                            height: 57,
                            borderRadius: 20
                        }}
                    />
                </Fragment>

            } */}

            <TextComp
                children={lang.New}
                // 'Other Notification'
                fontSize={15}
                textStyle={isRtl ?
                    [
                        styles.txtStyle,
                        styles.rightTxtStyle
                    ] :
                    [
                        styles.txtStyle,
                        styles.leftTxtStyle
                    ]}
                color={colors.placeholder}
            />

            <ScrollView scrollEnabled style={[styles.notificationViewStyle, flexStyle]}>
                {
                    isArrayHasData(upcomingNotifications) && upcomingNotifications.map(notificationItemRenderer)}

                {/* isArrayHasData(upcomingNotifications) && upcomingNotifications.map(notificationItemRenderer)} */}
            </ScrollView>
        </ScrollView>
        <BottomTab selectedTab={"Notification"} navigation={navigation} />
    </Fragment>

}

Notification.defaultProps = {
    notificationData: notificationData
}

export default memo(Notification)