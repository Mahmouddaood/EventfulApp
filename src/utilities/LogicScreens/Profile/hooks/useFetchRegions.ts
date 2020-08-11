import useRequest from '../../../infastructure/Hooks/useRequest'
import Profile from '../../../infastructure/apis/Profile'
import { useCallback } from 'react'
import { RegionData } from '../interfaces/index.interface'
import { RequestProps } from '../../../../utilities/generalInterface'
const { getRegions } = Profile

const useFetchRegions = (country_id: number | string): RequestProps<RegionData[]> => {
    const fetchRegions = useCallback(() => getRegions(country_id), [getRegions])
    const { data, loading }: RequestProps<RegionData[]> = useRequest(fetchRegions)

    return {
        data,
        loading
    }
}
export default useFetchRegions