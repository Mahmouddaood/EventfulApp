import { useCallback } from 'react'
import Profile from '../../../infastructure/apis/Profile'
import useRequest from '../../../infastructure/Hooks/useRequest'
import { UserFollowersProps } from '../interfaces/index.interface'

const { getUserFollowers } = Profile

const useGetUserFollowerRequest = (userLogin: number | string): UserFollowersProps => {
    const fetchUserFollowers = useCallback(() =>
        getUserFollowers(userLogin)
        , [

            userLogin
        ])
    const { data, loading }: UserFollowersProps = useRequest(fetchUserFollowers)
    return {
        data,
        loading
    }
}

export default useGetUserFollowerRequest