import React, { useEffect } from 'react'
import {
    ScrollView,
    View
} from 'react-native'
import styles from './styles';
import MainProfileProps from './index.interface'
import ProfileSection from './partials/Profile'
import FollowSection from './partials/Follow'
import EventSection from './partials/Events'
import Header from '../../components/HeaderComp'
import ArrowIcon from '../../components/ArrowIcon'
import TapView from '../../components/TapView';
import EventListSvg from '../../components/EventListSvg'
import BottomTab from '../../components/BottomTab'
import { tapData } from '../../components/TapView/index.interface';
import registeredStyles from "../../utilities/registeredStyles";
import MainContext from '../../utilities/Context/context'
import useGetProfileRequest from '../../utilities/LogicScreens/Profile/hooks/useGetProfileRequest'
import colors from '../../utilities/colors';
import Icon from '../../components/Icon'
import Avatar from '../../components/Avatar'
import BottomGroupIcon from '../../components/BottomGroupIcon';
import BackIcon from '../../components/BackIcon'
import MoreGroupIcon from '../../components/MoreGroupIcon';
import notify from '../Notification/partials/notify'
const PushNotification = require('react-native-push-notification')

const {
    memo,
    useMemo,
    useContext,
    Fragment
} = React
const {
    flexStyle
} = registeredStyles

const MainProfile: React.FC<MainProfileProps> = ({ navigation }): JSX.Element => {

    const { state: { langType, id, lang, photo_url, token } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const { navigate } = useMemo(() => navigation, [navigation])
    const {
        viewType,
        changeViewType
    } = useGetProfileRequest(id)


    useEffect(() => {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)

            // (required) Called when a remote or local notification is opened or received
            onNotification: (notification: any) => {
                console.log("mainProf")
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
    }, [navigation])

    return <Fragment>
        <ScrollView
            style={flexStyle}
            scrollEnabled
            shouldRasterizeIOS
        >
            <Header
                navigation={navigation}
                pressDrawer={true}
                // leftIcon={<BottomGroupIcon
                //     onPress={navigation.openDrawer}
                //     width={20}
                //     iconStyle={styles.menuIconStyle}
                //     height={23}
                //     color={colors.white}

                // />}
                leftView={
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: 60,
                        top: 30,
                        height: 30,
                    }}>

                        <Icon children={<BackIcon
                            // width={25}
                            // height={25}
                            iconStyle={{ top: 10 }}
                        />}
                            onPress={() => navigation.goBack()} />
                        <Icon children={<MoreGroupIcon
                            width={22}
                            height={20}
                            onPress={navigation.openDrawer}
                            iconStyle={{ top: 4 }}
                        />} onPress={navigation.openDrawer} />


                    </View>


                }
                // leftContainerStyle={{
                //     backgroundColor: "#000",
                //     height: 55,
                //     width: 70,
                //     top: 50
                // }}
                screenTitle={lang.Profile}
                headerStyle={styles.headerStyle}
                tabView={<TapView
                    taps={tapData}
                    isRtl={isRtl}
                    handlePress={changeViewType}
                    selected={viewType}
                    tabStyle={{
                        top: 50
                    }}
                />}
                titleStyle={styles.titleStyle}
            />
            {viewType === "Profile" && <ProfileSection navigation={navigation} />}
            {viewType === "Events" && <EventSection navigation={navigation} />}
            {viewType === "Follow" && <FollowSection navigation={navigation} />}
        </ScrollView>
        <BottomTab
            selectedTab={"MainProfile"}
            navigation={navigation}
            bottomViewStyle={styles.bottomViewStyle}
        />
    </Fragment>
}

export default memo(MainProfile)
