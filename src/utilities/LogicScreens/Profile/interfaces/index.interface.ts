import { RequestProps } from '../../../generalInterface'
import { ImageURISource } from 'react-native';


export default interface UserProfileProps extends RequestProps<UserProfile> { }

export interface UserFollowersProps extends RequestProps<FollowItem[]> { }


export interface EditingDataProps {
    interests: InterestProps[];
    email: string;
    mobile: any;
    social_links: SocialProps;
    first_name: string;
    last_name: string;
    city_id: string | number;
    country_id: string | number;
    region_id: string | number;
    logo?: string | any;
    city?: string,
    country: string,
    region: string
}

export interface UserProfile {
    id: string | number,
    name: string,
    interests: InterestProps[],
    photo_url: string | ImageURISource | any,
    email: string,
    mobile: string | number | any,
    city: string,
    social_links: SocialProps,
    first_name: string,
    last_name: string,
    country: string,
    region: string,
    city_id: number | string,
    country_id: number | string,
    region_id: number | string,
    logo: string,
    followers_count: string,
    following_count: string,
    bio_en: string,
    bio_ar: string,
    followers: FollowerInterface[],
    followings: FollowerInterface[]
}

export interface FollowerInterface {
    email: string,
    id: number,
    name: string,
    photo_url: string,
    company_name: string,
    last_login: string
}

export interface InterestProps {
    id: string | number | any,
    category_id: string | number | any,
    title_ar: string,
    title_en: string,
    sort: number
}

export interface SocialProps {
    facebook: string | any,
    twitter: string | any,
    instagram: string | any,
    website: string | any,
    whatsapp: string,
    youtube: string
    tiktok: string,

}

export interface PivotProps {
    followable_id: number,
    user_id: number,
    relation: string
}

export interface FollowItem {
    id: number,
    email: string
    address: string,
    photo_url: string
    name: string,
    pivot: PivotProps
}

export interface CData {
    id: number,
    name: string,
    active: number
}

export interface RegionData extends CData {
    country_id: number | string
}

export interface UserEvent {
    id: number,
    photo_url: string | ImageURISource | any,
    img_url: string | ImageURISource | any,
    img: string,
    name: String,
    address: string,
    event_type?: string,
    event_subscription: string,
    payment_type: string,
    city_id: number,
    event_date: string
    event_date_to: string,
    event_from: string,
    event_to: string,
    description: string,
    subscription_cost: number,
    attendees_no: number,
    attendees_no_reserved?: number
    category_ids: string[]
    youtube_url: string,
    open: any,
    formatted_date: string,
    formatted_time: string,
    formatted_date_time: string
}

export interface UserEventProps extends RequestProps<UserEvent[]> { }