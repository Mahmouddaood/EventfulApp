import { ImageURISource, ViewStyle } from "react-native"
import { NavigationProps } from "../../utilities/generalInterface"
import BottomUnionIcon from '../../components/BottomUnionIcon'
import BottomWalletIcon from '../../components/BottomWalletIcon'
import BottomNotifyIcon from '../../components/BottomNotifyIcon'
import BottomHomeIcon from '../../components/BottomHomeIcon'
import HomeMapIcon from "../../components/HomeMapIcon"
import BottomProfileIcon from "../BottomProfileIcon"



// const LocImg = require('../../assests/eventfulAssests/images/LocImg.png')
// const AlarmImg = require('../../assests/eventfulAssests/images/alarm.png')
// const AwwsomeWalletImg = require('../../assests/eventfulAssests/images/awesome-wallet.png')
// const CalendarImg = require('../../assests/eventfulAssests/images/calendar.png')
// const GroupImg = require('../../assests/eventfulAssests/images/Group.png')
// const ProfileIcon = require('../../assests/eventfulAssests/images/box.png')


export default interface BottomTabProps extends NavigationProps {
    bottomViewStyle?: ViewStyle | (ViewStyle | any)[],
    selectedTab?: string
}

export interface imageArrProps {
    route: string,
    image: string | ImageURISource | any
}

export const imageArr: imageArrProps[] = [
    {
        route: "ProfileEvents",
        image: BottomUnionIcon
    },

    {
        route: "Notification",
        image: BottomNotifyIcon
    },
    {
        route: "Profile",
        image: BottomHomeIcon
    },
    {
        route: "Wallet",
        image: BottomWalletIcon
    },
    {
        route: "EventMap",
        image: HomeMapIcon
    },



    // {
    //     route: "Settings",
    //     image: BottomGroupIcon
    // }
]