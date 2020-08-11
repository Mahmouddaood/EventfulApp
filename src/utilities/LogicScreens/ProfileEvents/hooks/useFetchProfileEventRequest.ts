import useRequest from '../../../infastructure/Hooks/useRequest'
import ProfileEvents from '../../../infastructure/apis/ProfileEvents'
import ProfileEventProps from '../interfaces/index.interface'
const {
    fetchProfileData
} = ProfileEvents

const useFetchProfileEventRequest = () => {
    const {
        loading,
        data
    } = useRequest(fetchProfileData)
    return {
        data,
        loading
    }

}

export default useFetchProfileEventRequest