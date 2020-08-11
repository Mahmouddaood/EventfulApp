import useRequest from '../../../infastructure/Hooks/useRequest'
import Home from '../../../infastructure/apis/Home'
import { RecommendedItemProps } from '../interfaces/index.interface'

const { fetchRecommendedEvents } = Home

const useRecommendedRequest = (): RecommendedItemProps => {
    const { data, loading }: RecommendedItemProps = useRequest(fetchRecommendedEvents)
    return {
        data,
        loading
    }
}

export default useRecommendedRequest