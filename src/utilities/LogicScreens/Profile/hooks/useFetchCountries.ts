import useRequest from '../../../infastructure/Hooks/useRequest'
import Profile from '../../../infastructure/apis/Profile'
import { CData } from '../interfaces/index.interface'
import { RequestProps } from '../../../../utilities/generalInterface'
const { getCountries } = Profile

const useFetchCountries = (): RequestProps<CData[]> => {
    const { data, loading }: RequestProps<CData[]> = useRequest(getCountries)

    return {
        data,
        loading
    }
}
export default useFetchCountries