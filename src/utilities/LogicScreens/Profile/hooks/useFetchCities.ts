import useRequest from '../../../infastructure/Hooks/useRequest'
import Profile from '../../../infastructure/apis/Profile'
import { useCallback } from 'react'
import { CData } from '../interfaces/index.interface'
import { RequestProps } from '../../../../utilities/generalInterface'
const { getCities } = Profile

const useFetchRegions = (region_id?: number | string): RequestProps<CData[]> => {
    const fetchCities = useCallback(() => getCities(region_id && region_id), [getCities])
    const { data, loading }: RequestProps<CData[]> = useRequest(fetchCities)

    return {
        data,
        loading
    }
}
export default useFetchRegions