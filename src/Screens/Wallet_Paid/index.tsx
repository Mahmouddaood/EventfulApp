import React from 'react'
import {
    ScrollView,
    View
} from 'react-native'
import styles from './styles';
import WalletPaidProps, { tapData } from './index.inteface'
import PaidEvent from './partials/PaidEvent'
import AddAccount from './partials/AddAccount'
import ArrowIcon from '../../components/ArrowIcon'
import BackIcon from '../../components/BackIcon'
import Header from '../../components/HeaderComp'
import BottomTab from '../../components/BottomTab';
import TapView from '../../components/TapView';
import registeredStyles from "../../utilities/registeredStyles";
import MainContext from '../../utilities/Context/context'
import useWalletRequest from '../../utilities/LogicScreens/Wallet/hooks/useWalletRequest'
import BottomGroupIcon from '../../components/BottomGroupIcon';
import Icon from '../../components/Icon'
import MoreGroupIcon from '../../components/MoreGroupIcon';
import notify from '../Notification/partials/notify';
const PushNotification = require('react-native-push-notification')

const {
    memo,
    useContext,
    Fragment,
    useMemo,
    useEffect
} = React
const {
    flexStyle,
    fullWidth,
    selfCentered,
    rowStyle,
    horizontalCenteredFlex,
    verticalCenteredFlex,
    spaceBetweenItems,
} = registeredStyles

const WalletPaid: React.FC<WalletPaidProps> = ({ navigation }): JSX.Element => {

    const { state } = useContext(MainContext)
    const { token, langType, lang } = useMemo(() => state, [state])
    const isRtl = useMemo(() => langType === "ar", [langType])
    const { navigate } = useMemo(() => navigation, [navigation])
    const {
        changeViewType,
        viewType
    } = useWalletRequest(token)
    useEffect(() => {
        PushNotification.configure({

            onNotification: async (notification: any) => {
                console.log("wallll")
                notify(
                    notification.event_id,
                    isRtl,
                    token,
                    navigation
                )
                // navigation.push("Notification")

            },
            smallIcon: "eventful",
            largeIcon: "eventful"
        })
    }, [navigation])
    return <Fragment>
        <ScrollView
            style={[flexStyle, { marginBottom: 50 }]}
            scrollEnabled
            shouldRasterizeIOS
        >

            <Header
                navigation={navigation}
                screenTitle={lang.Wallet}
                tabView={<TapView
                    isRtl={isRtl}
                    handlePress={changeViewType}
                    selected={viewType}
                    taps={tapData}
                    tabStyle={{ top: 50 }}
                    tabItemStyle={styles.tapHeaderStyle}
                />}
                headerStyle={styles.headerStyle}
                titleStyle={styles.titleStyle}
                leftView={
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: 60,
                        top: 30,
                        height: 30,
                        // backgroundColor: "#000"
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

            />
            {viewType === "paid" && <PaidEvent />}
            {viewType === "add" && <AddAccount />}


        </ScrollView >
        <BottomTab selectedTab={"Wallet"} navigation={navigation} />
    </Fragment>
}
export default memo(WalletPaid)