import { RequestProps } from '../../../generalInterface'
import { ImageURISource } from 'react-native';

export default interface EventDataProps extends RequestProps<EventfulDataProps[]> { }

export interface EventItem {
    id: number,
    name: string,
    photo_url: string | ImageURISource | any,
    formatted_date: string,
    address: string,
    event_subscription: string,
    description: string,
    city_id: number

}


export interface EventfulDataProps {
    id: number,
    name_en: string,
    name_ar: string,
    events: EventItem[],
}


export interface SearchStateProps {
    searchData: EventItem[] | any,
    searchDone: boolean,
    searchValue: string,
    modalSearch: boolean,
    searchValues: SearchValProps | any,
    searchNames: SearchNameProps | any
}
export interface SearchValProps {
    category: number | any,
    city: number | any,
    event_when: string
}
export interface SearchNameProps {
    category: string,
    city: string,
    time: string
}

export interface RecommendedItemProps extends RequestProps<EventItem[]> { }

