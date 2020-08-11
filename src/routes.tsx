import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import SignUp from './Screens/Auth/SignUpScreen'
import Login from './Screens/Auth/LoginScreen'
import Register from './Screens/Auth/RegisterScreen'
import Localization from './Screens/Localization'
import Settings from './Screens/Settings'
import Contact from './Screens/Contact'
import About from "./Screens/About&Terms/About";
import Profile from './Screens/Profile'
import ProfileEvents from './Screens/ProfileWithEvents'
import Wallet from './Screens/Wallet'
import Notification from './Screens/Notification'
import EventInfo from './Screens/EventInfo'
import MainProfile from './Screens/MainProfile'
import EditProfile from './Screens/EditProfile'
import EventDetail from './Screens/EventDetail'
import CreateEvent from './Screens/CreateEvent'
import CalendarScreen from './Screens/CalendarScreen';
import Terms from "./Screens/About&Terms/Terms";
import WalletPaid from './Screens/Wallet_Paid';
import Payment from './Screens/Payment';
import Map from './Screens/CreateEvent/partials/MapView'
import ForgotPassword from './Screens/ForgotPassword'
import Vertification from './Screens/ForgotPassword/partials/VertificationView'
import NewPassView from './Screens/ForgotPassword/partials/NewPassView'
import EventMap from './Screens/EventMap'



const AppStack = createStackNavigator(
    {
        SignUp: {
            screen: SignUp
        },
        Localization: {
            screen: Localization
        },
        Login: {
            screen: Login
        },
        Register: {
            screen: Register
        },
        Settings: {
            screen: Settings
        },
        Contact: {
            screen: Contact
        },
        About: {
            screen: About
        },
        Profile: {
            screen: Profile
        },
        ProfileEvents: {
            screen: ProfileEvents
        },
        Wallet: {
            screen: WalletPaid
        },
        Notification: {
            screen: Notification
        },
        EventInfo: {
            screen: EventInfo
        },
        MainProfile: {
            screen: MainProfile
        },

        EditProfile: {
            screen: EditProfile
        },
        EventDetail: {
            screen: EventDetail
        },
        CreateEvent: {
            screen: CreateEvent
        },
        Calendar: {
            screen: CalendarScreen,
        },
        Terms: {
            screen: Terms
        },
        Payment: {
            screen: Payment
        },
        Map: {
            screen: Map
        },
        ForgotPassword: {
            screen: ForgotPassword
        },
        Vertification: {
            screen: Vertification
        },
        SetNewPass: {
            screen: NewPassView
        },
        EventMap: {
            screen: EventMap
        },
        // DrawerNavigator
    },
    {
        headerMode: "none",
        initialRouteName: "Localization"
    }
)


const DrawerNavigator = createDrawerNavigator({

    AppStack,
    Notification: {
        screen: Notification
    }
},
    {
        contentComponent: (props: any) => <Settings props={props} navigation={props.navigation} />
    }

)
// type TintColor = {
//     tintColor: any
// }

// const { state, setContext } = useContext(MainContext)
// const { langType, lang } = useMemo(() => state, [state])
// const isRtl = useMemo(() => langType === "ar", [langType])




// const AuthStack = createStackNavigator(
//     {
//         SignUp: {
//             screen: SignUp
//         },
//         Localization: {
//             screen: Localization
//         },
//         Profile: {
//             screen: Profile
//         },
//         Login: {
//             screen: Login
//         },
//         Register: {
//             screen: Register
//         }
//     },
//     {
//         headerMode: "none",
//         initialRouteName: "Localization"
//     }
// )


// const bottomAppStack = createBottomTabNavigator(
//     {
//         // Profile: {
//         //     screen: Profile,
//         // },
//         // MainProfile: {
//         //     screen: MainProfile,
//         // },
//         // Calendar: {
//         //     screen: CalendarScreen,
//         // },
//         Wallet: {
//             screen: Wallet
//         },
//         Notification: {
//             screen: Notification
//         }
//     },
//     {
//         tabBarComponent: (props) => {
//             const { navigation } = props
//             return <BottomTab navigation={navigation} />
//         }
//     }
// )

export default createAppContainer(
    createSwitchNavigator(
        {
            // App: AppStack,
            DrawerNavigator
        },
        {
            initialRouteName: 'DrawerNavigator'
        }
    )
);