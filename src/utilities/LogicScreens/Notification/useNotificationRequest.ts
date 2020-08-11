import useRequest from '../../infastructure/Hooks/useRequest'
import Notification from '../../infastructure/apis/Notification'
import NotificationDataProps from './interfaces/index.interface'

const { fetchNotifcationData } = Notification

const useNotificationRequest = (): NotificationDataProps => {
    const { data, loading }: NotificationDataProps = useRequest(fetchNotifcationData)
    return {
        data,
        loading
    }
}

export default useNotificationRequest