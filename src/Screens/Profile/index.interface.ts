import { StyleProp, TextStyle, ViewStyle, ImageURISource } from 'react-native'
import { NavigationProps } from '../../utilities/generalInterface'
export default interface ProfileProps extends NavigationProps { }

export interface CommonInterface<T> {
    data: T[],
    onPress: (item: T | any) => void,
    headTitle?: string,
    DetailView: JSX.Element | any,
    commendStyle?: ViewStyle | (ViewStyle | any)[],
    headViewStyle?: ViewStyle | (ViewStyle | any)[] | any,
    seeAllStyle?: TextStyle | (TextStyle | any)[],
    contentStyle?: ViewStyle | (ViewStyle | any)[] | any,
    isRtl?: boolean,
    loading?: boolean,
    isAllVisible?: boolean

}

export interface FLatProps<T> {
    data: T[],
    renderItem: (item: T, idx: number) => JSX.Element,
    headTitle?: string,
    headTitleStyle?: StyleProp<TextStyle>,
    seeAllStyle?: StyleProp<TextStyle>,
    contentStyle?: ViewStyle | ViewStyle[],
    headViewStyle?: ViewStyle | ViewStyle[],
    isRtl?: boolean,
    isAllVisible?: boolean
}

export interface EventItem {
    id: number,
    name: string,
    photo_url: string | ImageURISource | any,
    formatted_date: string,
    address: string,
    event_subscription: string,
    city_id: number,
    lng: number,
    lat: number,
    formatted_date_time: string
}

export interface EventfulDataProps {
    id: number,
    name_en: string,
    name_ar?: string,
    events: EventItem[],
}

export interface ItemProps {
    item?: EventItem | any,
    onPress?: () => void,
    loading?: boolean,
    isRtl?: boolean,
    image?: any

}
export const timeArr = (isRtl: boolean) => [
    isRtl ? "امس" : "yeasterday",
    isRtl ? "اليوم" : "Today",
    isRtl ? "غدا" : "Tommorow",
    isRtl ? "وقت اخر" : "anthorTime"
]
export interface WantedModalProps {
    name: string,
    id: number | any,
    handleSelectItem: (id: number, name: string) => void,
    selected: boolean,
    isRtl?: boolean
}