import { ImageURISource, ImageSourcePropType } from 'react-native'
import { RequestProps } from '../../../generalInterface';

export default interface CreateEventState {
    img: string | ImageURISource | ImageSourcePropType | any,
    name: string,
    description: string,
    city_id: number | string,
    address: string,
    attendees_no: number | string | any,
    event_date_from: string,
    event_date_to: string,
    event_from_time: string,
    event_to_time: string,
    location: LocationProp | any,
    youtube_url: string,
    imgs: string[],
    subscription_cost: string,
    event_subscription: string,
    lng: number | string,
    lat: number | string
}

export interface LocationProp {
    lat: number,
    lng: number
}

export interface CategoryProps {
    id: number,
    name_en: string,
    name_ar: string,
    img?: string
    img_url?: string
    gender?: string
    active?: number,
    tags: TagsProps[]
}

export interface TagsProps {
    id: number,
    category_id: number,
    title_ar: string,
    title_en: string
}

export interface CategoryRequestProps extends RequestProps<CategoryProps[]> { }