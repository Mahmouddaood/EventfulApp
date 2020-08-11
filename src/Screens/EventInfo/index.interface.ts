import { ViewStyle } from 'react-native'
import { NavigationProps } from '../../utilities/generalInterface'
import { EventDataProps } from '../Notification/index.interface'
import LaughingIcon from '../../components/LaughingIcon'
import EmotionIcon from '../../components/EmotionIcon'
import AngryIcon from '../../components/AngryIcon'
const Image1 = require('../../assests/eventfulAssests/images/follower5.png')

export default interface EventInfoProps extends NavigationProps {
    eventInfo: EventDataProps
}

export const eventInfo: EventDataProps = {
    key: "1",
    image: Image1,
    eventName: "Naser Hmmad",
    eventDescription: "CEO and founder of Evenful (the host)"
}


export interface textIconProps {

    items?: TxtIconData[] | any
}

export interface TxtIconData {
    title: string,
    icon: React.ReactNode
}

export const reactions: TxtIconData[] = [
    {
        title: "Yes Alot",
        icon: require("../../components/LaughingIcon")
    },
    {
        title: "Not Bad",
        icon: require("../../components/LaughingIcon")
    },
    {
        title: "Don't Like It",
        icon: require("../../components/LaughingIcon")
    }
]
export const recommendtions: TxtIconData[] = [
    {
        title: "Sure",
        icon: LaughingIcon
    },
    {
        title: "Maybe",
        icon: EmotionIcon
    },
    {
        title: "No",
        icon: AngryIcon
    }
]