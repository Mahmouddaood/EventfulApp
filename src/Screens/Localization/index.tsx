import React, { useMemo } from 'react'
import {
    View,
    TouchableOpacity,
    Animated,
    Easing,

} from 'react-native'
import firebase from 'react-native-firebase'
const PushNotification = require('react-native-push-notification')
import LocProps, { langs, LangProps } from './index.interface'
import styles from './styles'
import TextComp from '../../components/Text'
import registeredStyles from "../../utilities/registeredStyles";
import Header from '../../components/HeaderComp'
import ArrowIcon from "../../components/ArrowIcon";
import colors from '../../utilities/colors';
import Icon from '../../components/Icon';
import TrueIcon from '../../components/Check_icon';
import context from '../../utilities/Context/context'
import ArbLang from '../../utilities/Context/arbLang.json'
import EngLang from '../../utilities/Context/lang.json'
import usePrevious from '../../utilities/infastructure/Hooks/usePrevious'
import { saveToStorage, getFromStorage } from '../../utilities/infastructure/validator/localStorage'
import EventDetail from '../../utilities/infastructure/apis/EventDetail'
import notify from '../Notification/partials/notify'
const {
    getSingleEventDetails
} = EventDetail

const {
    memo,
    useState,
    useEffect,
    useCallback,
    useContext
} = React
const {
    flexStyle,
    rowStyle,
    verticalCenteredFlex,
} = registeredStyles

const Localization: React.FC<LocProps> = ({ navigation }): JSX.Element => {

    const { state, setContext } = useContext(context)
    const { token, langType: type } = useMemo(() => state, [state])
    const isRtl = useMemo(() => type === "ar", [type])
    const [springValue] = useState(new Animated.Value(0.8))
    const [langType, setLang] = useState<string>("en")
    const prevLang = usePrevious(langType)
    const isLangChanged = prevLang !== langType
    const { navigate } = navigation

    const changeLang = useCallback((lang: string) => async () => {
        setLang(lang)
        setContext({
            ...state,
            lang: lang === "ar" ? ArbLang : EngLang,
            langType: lang
        })
        const userData: any = await getFromStorage("currentUser")
        const currentUser = await JSON.parse(userData)
        console.log("currentUserData =>", currentUser)
        if (Boolean(userData)) {
            setContext({
                ...state,
                ...currentUser,
                lang: lang === "ar" ? ArbLang : EngLang, langType: lang,
                isGuest: false
            })
            return navigate("Profile")
        } else {
            navigate("SignUp")
        }
    }, [
        setLang,
        // langType,
        navigate,
        // context,
        state,
        setContext
    ])
    console.log("state => ", state)
    console.log("langType =>", langType)
    const langRenderer = useCallback((item: LangProps): JSX.Element =>
        <TouchableOpacity key={item.key} onPress={changeLang(item.stateLang)}>
            <Animated.View key={item.key} style={[rowStyle, verticalCenteredFlex, styles.langButStyle,
                langType === item.stateLang && styles.animatedLangButStyle, { transform: [{ scale: springValue }] }]}>
                <TextComp children={item.title}
                    fontSize={14}
                    center
                />
                {langType === item.stateLang && <Icon children={<TrueIcon onPress={changeLang(item.stateLang)} />} />}
            </Animated.View>
        </TouchableOpacity>
        , [
            langType,
            changeLang,
            springValue
        ])

    useEffect(() => {
        if (isLangChanged) {
            Animated.timing(springValue, {
                toValue: 2,
                duration: 1000,
                easing: Easing.linear
            })
        }
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)

            // (required) Called when a remote or local notification is opened or received
            onNotification: async (notification: any) => {
                console.log("NOTIFICATION:", notification);
                // const eventAdded = await getSingleEventDetails(
                //     notification.event_id,
                //     token,
                //     isRtl ? "en" : "ar"
                // )
                // // setContext({
                // //     ...state,
                // //     firstNotification: eventAdded.data
                // // })

                // const notifications: any = await getFromStorage("notifications")
                // let userNot = await JSON.parse(notifications)
                // if (!userNot) {
                //     console.log("no")
                //     await saveToStorage("notifications", JSON.stringify([eventAdded.data]))
                // } else {
                //     if (!userNot.find((item: any) => item.id === eventAdded.data.id)) {
                //         userNot = [...userNot, eventAdded.data]
                //         await saveToStorage("notifications", JSON.stringify(userNot))
                //     }
                // }
                console.log("loccc")
                notify(
                    notification.event_id,
                    isRtl,
                    token,
                    navigation
                )

            },
            smallIcon: "eventful",
            largeIcon: "eventful"


        })

        // firebase.notifications().onNotificationOpened((notificationOpen: any) => {
        //     const action = notificationOpen.action;
        //     const notification: any = notificationOpen.notification;
        //     console.log("notificationNOOO", notification)
        // })


    }, [
        springValue,
        isLangChanged,
        navigate,
        navigation
    ])

    return <View style={flexStyle}>
        <Header
            navigation={navigation}
            screenTitle='Language'
        // leftIcon={
        //     <ArrowIcon
        //         width={25}
        //         height={25}
        //     />
        // }
        />
        <View style={styles.headTitStyle}>
            <TextComp children='Choose the Language of Application' color={colors.placeholder} fontSize={16} />
        </View>
        {
            langs.map(langRenderer)
        }

    </View>

}

export default memo(Localization)