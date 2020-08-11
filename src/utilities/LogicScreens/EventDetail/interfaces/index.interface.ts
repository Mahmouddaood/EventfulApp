import { RequestProps } from "../../../generalInterface";
import { ImageURISource } from "react-native";

export default interface EventDetailDataProps extends RequestProps<EventDetailItem> { }


export interface EventDetailItem {
    // owner: string,
    // ownerImage: string | ImageURISource | any,
    // eventDescription: string,
    // fees: string,
    // attendanceCount: number,
    // location: string,
    // time: string,
    // photos: string | ImageURISource | any[],
    // reviews: ReviewItem[],
    id: number,
    event_subscription: string,
    img: string,
    description: string,
    attendees_no: number,
    address: string,
    img_url: string,
    images_urls: string[],
    owner_name: string,
    formatted_date_time: string,
    formatted_time: string,
    even_rates: ReviewItem[],
    owner_bio_ar: string,
    owner_bio_en: string,
    owner_logo: string,
    owner_mobile: string | number,
    rates: number,
    payment_type: string | string[],
    formatted_date: string,
    attendees_no_reserved: string | number,
    ticket_price: number | string,
    owner_id: number,
    photo_url?: string,
    name?: string,
    subscription_cost: string | number | any,
    youtube_url: string
}

export interface ReviewItem {
    reviewerName: string,
    reviewerImage: string | ImageURISource | any,
    reviewCount: number | string,
    ////
    id: number,
    event_id: number,
    user_id: number,
    rate: number,
    comment: string,
    created_at: string,
    updated_at: string,
    name: string,
    image: string,
}