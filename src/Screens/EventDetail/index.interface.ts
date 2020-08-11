import { NavigationProps } from '../../utilities/generalInterface'
import { EventDataProps } from '../Notification/index.interface'
import { eventInfo } from '../EventInfo/index.interface'
import { EventDetailItem } from '../../utilities/LogicScreens/EventDetail/interfaces/index.interface'
// import { eventImages } from '../MainProfile/partials/Events/index.interface'
import { eventImageData } from '../MainProfile/partials/Events/index.interface'
import { ImageStyle, TextStyle, View, ViewStyle } from 'react-native'
import { ReviewItem } from '../../utilities/LogicScreens/EventDetail/interfaces/index.interface'
const follwerImg = require('../../assests/eventfulAssests/images/follower5.png')


export default interface EventInfoProps extends NavigationProps {
    eventDetailData: EventDetailDataProps,
}


export interface EventDetailDataProps extends EventDataProps {
    eventDetail: string,
    subEventDetail: string,
    followers: string,
    date: string,
    ticket: string,
    location: string,
    eventsImages?: eventImageData,
    reviews: ReviewsDataProps[]
}

export interface ReviewsDataProps {
    reviewerName: string,
    reviewerImage: string | any,
    count: string,
    comment: string
}

const reviews: ReviewsDataProps[] = [
    {
        reviewerName: "User Name",
        reviewerImage: follwerImg,
        count: "3.0",
        comment: " Excepteur sint occaecat cupidatat non proident," +
            "    sunt in culpa qui officia deserunt mollit anim id " +
            "    est eopksio laborum. "
    },
    {
        reviewerName: "User Name",
        reviewerImage: follwerImg,
        count: "3.0",
        comment: " Excepteur sint occaecat cupidatat non proident," +
            "    sunt in culpa qui officia deserunt mollit anim id " +
            "    est eopksio laborum. "
    }
]

export const eventDetailData: EventDetailDataProps = {
    ...eventInfo,
    eventDetail: '      here you will read whatever this group/even is talking   ' +
        '     about and you will be able to know all the details you' +
        'need, no matter what the genre is.',
    subEventDetail: 'here you will read whatever this group/even is talking  ' +
        '     about and you will be able to know all the details you',
    date: "Monday, 28 October 2019",
    ticket: "Free",
    location: "28th street, Saihat, Saudi Arabia",
    followers: "128",
    // eventsImages: eventImages,
    reviews: reviews
}

export interface IconTxtProps {
    icon?: React.ReactNode,
    isRtl?: boolean,
    loading?: boolean,
    image?: string | any
    firstText?: string | number,
    secondText?: string,
    imageStyle?: ImageStyle | any,
    firstStyle?: TextStyle,
    secondStyle?: TextStyle | any,
    itemStyle?: ViewStyle
}


export interface ModalProps {
    token: string,
    eventId: number | string,
    isRtl?: boolean,
    evenRates: ReviewItem[],
    rates: number,
    loading: boolean,
    reviewsLang: string,
    commentLang: string,
    addRevLang: string,
    navigate?: any,
    item: EventDetailItem
}