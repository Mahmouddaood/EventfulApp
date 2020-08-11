import { useCallback } from "react";
import { Animated, Easing } from "react-native";
import EventDetail from '../../../infastructure/apis/EventDetail'
import useRequest from "../../../infastructure/Hooks/useRequest";
import EventDetailDataProps from "../interfaces/index.interface";
import useInput from "../../../infastructure/Hooks/useInput";
const { getSingleEventDetails } = EventDetail

const useFetchSingleEventDetailRequest = (event_id: number, token: string, lang: string): EventDetailDataProps => {
    const fetchSingleEventDetails = useCallback(() =>
        getSingleEventDetails(
            event_id,
            token,
            lang
        ), [
        event_id,
        lang
    ])
    const { data, loading }: EventDetailDataProps = useRequest(fetchSingleEventDetails)
    return {
        data,
        loading,

    }
}

export default useFetchSingleEventDetailRequest