import Profile from '../../../infastructure/apis/Profile'
import useRequest from '../../../infastructure/Hooks/useRequest'
import UserProfileProps from '../interfaces/index.interface'
import { useCallback, useMemo, useContext } from 'react'
import useInput from '../../../infastructure/Hooks/useInput'
import usePrevious from '../../../infastructure/Hooks/usePrevious'
import MainContext from '../../../Context/context'

const { getUserProfile } = Profile

const useGetProfileRequest = (userLogined: string | number | any): UserProfileProps | any => {

    const { state, setContext } = useContext(MainContext)
    const { profileEdited } = useMemo(() => state, [state])
    const prevProfileEdited = usePrevious(profileEdited)
    const profileDataChanged = profileEdited !== prevProfileEdited
    const [viewType, setViewType] = useInput<string>("Profile")

    const changeViewType = useCallback((type: string) => {
        setViewType(type)
    }, [setViewType])
    const prevViewType = usePrevious(viewType)
    const viewChanged = viewType !== prevViewType
    // console.log("ser", userLogined)
    const fetchUserProfile = useCallback(() => getUserProfile(userLogined), [userLogined])

    const { data, loading, setData }: UserProfileProps | any = useRequest(fetchUserProfile, profileDataChanged)

    // console.log("res =>", data)
    return {
        data,
        loading,
        changeViewType,
        viewType,
        setData
    }
}

export default useGetProfileRequest