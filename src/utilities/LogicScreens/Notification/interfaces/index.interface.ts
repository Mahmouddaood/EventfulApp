import { RequestProps } from '../../../generalInterface'
import { ImageURISource } from 'react-native';


export default interface NotificationDataProps extends RequestProps<NotificationEvents[]> { }



export interface NotificationEvents {
    event_id: string,
    event_name: string,
    event_description: string,
    event_time: string,
    image: string | ImageURISource | any,
}