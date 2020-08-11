import { useCallback } from 'react'
import useRequest from '../../../infastructure/Hooks/useRequest'
import Home from '../../../infastructure/apis/Home'
const { fetchEventById } = Home

export const useRecentlyRequest = (event_id: number | string | any) => {
    const fetchSingleEventById = useCallback(() =>
        fetchEventById(event_id)
        , [event_id])
    const { data, loading } = useRequest(fetchSingleEventById)
    return {
        loading,
        data
    }
}