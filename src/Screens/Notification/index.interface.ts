import { ImageURISource } from 'react-native'
import { NavigationProps } from '../../utilities/generalInterface'
const EventImg = require('../../assests/eventfulAssests/images/follower5.png')
// const IronImg = require('../../assests/eventfulAssests/images/ironImg.png')



export default interface NotificationProps extends NavigationProps {
    notificationData: notificationDataProps[]
}

export interface EventDataProps {
    key?: string | number,
    image?: string | ImageURISource | any,
    eventName?: string | any,
    eventDescription?: string,
    onPressContact?: () => void,
    isRtl?: boolean,
    loading?: boolean,
    onPressShare?: (() => void) | any,
    onPressDetail?: () => void,
    desc?: boolean,
    youtube?: string,
    eventInfo?: boolean

}

export interface notificationDataProps extends EventDataProps {
    date?: string
}

export interface NewNotificationProps {
    notificationItem: any,
    notificationImage: any,
    notificationDesc: string
}
export const notificationData: notificationDataProps[] = [
    {
        key: "1",
        image: EventImg,
        eventName: "New Join in",
        eventDescription: "photography event",
        date: "12 Des"
    },
    {
        key: "2",
        image: EventImg,
        eventName: "Event Name",
        eventDescription: "Text for Notification",
        date: "12 Des"
    },
    {
        key: "3",
        image: EventImg,
        eventName: "Event reminder",
        eventDescription: "Art event",
        date: "12 Des"
    },
    {
        key: "4",
        image: EventImg,
        eventName: "Event reminder",
        eventDescription: "Art event",
        date: "12 Des"
    },
    {
        key: "5",
        image: EventImg,
        eventName: "Event reminder",
        eventDescription: "Art event",
        date: "12 Des"
    }
]