import { useCallback, useEffect, useContext, useState, useMemo } from 'react'
import { Animated, Easing } from 'react-native'
import Profile from '../../../infastructure/apis/Profile'
// import useRequest from '../../../infastructure/Hooks/useRequest'
import useInput from '../../../infastructure/Hooks/useInput'
import {
    UserEventProps, UserEvent
} from '../interfaces/index.interface'
import usePrevious from '../../../infastructure/Hooks/usePrevious'
import MainContext from '../../../Context/context'

const { getUserEvents, deleteEvent } = Profile

const useGetUserEventsRequest = (token: string, navigate: any, lang?: string,): UserEventProps | any => {
    const { state, setContext } = useContext(MainContext)
    const { eventDeleted } = useMemo(() => state, [state])
    // const [eventDeleted, setEventDeleted] = useState(false)
    const prevEventDeleted = usePrevious(eventDeleted)
    const eventDeletedChanged = eventDeleted !== prevEventDeleted
    const [data, setData] = useInput<any>([])
    const [viewType, setType] = useInput<string>("list")
    const [loading, setLoading] = useInput<boolean>(false)
    const [eventStatus, setStatus] = useInput<string>("")
    const prevStatus = usePrevious(eventStatus)
    const [fadeAnimated] = useInput(new Animated.Value(0))
    const [editFadeAnimated] = useInput(new Animated.Value(0))
    const [viewAnimated] = useInput(new Animated.Value(0))
    const [showKey, setKey] = useInput<string | number>("")
    const [fade, setFade] = useInput<boolean>(false)
    const [toastMsg, setMsg] = useInput<string>("")

    const [
        modalVisible,
        openDeleteModal
    ] = useInput<boolean>(false)
    const prevModal = usePrevious(modalVisible)
    const [animatedvisible, setAnimatedVisible] = useInput<boolean>(false)
    // const myEvents = eventStatus === "myevents"
    const modalChanged = prevModal !== modalVisible
    const statusChanged = prevStatus !== eventStatus
    const handleStatusChange = useCallback((item: string) => {
        setStatus(item)
    }, [setStatus])
    const imageFocus = useCallback((id: number, item: UserEvent) => () => {
        Animated.timing(fadeAnimated, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
        }).start()
        console.log("idkey", id)
        // setFade(!fade ? true : false)
        setKey(id)
        setAnimatedVisible(true)
        console.log("id", item)
        setTimeout(() => navigate("EventDetail", {
            data: item
        }), 3000)
    }
        , [
            setKey,
            setAnimatedVisible,
            // setFade,
            // fade,
            navigate,
            fadeAnimated
        ])
    const showEditView = useCallback((id: number) => () => {
        Animated.timing(editFadeAnimated, {
            toValue: 1,
            duration: 2000,
            easing: Easing.ease
        }).start()
        setKey(id)

    }, [
        editFadeAnimated,
        setKey
    ])
    const setViewType = useCallback((s: string) => {
        setType(s)
        Animated.timing(viewAnimated, {
            toValue: 10,
            duration: 1000,
            easing: Easing.ease
        }).start()
    }, [
        viewAnimated,
        setType
    ])


    const fetchData = useCallback(async () => {
        setLoading(true)
        setKey(0)
        if (typeof fetch === "function") {
            const { events: { data: res } } = await getUserEvents(token, eventStatus, lang)
            // console.log("res =>", res)
            setData(res)
            setLoading(false)
        } else {
            setData(undefined)
            setLoading(false)
        }
    }, [
        setLoading,
        setData,
        statusChanged,
        token,
        eventStatus,
        setKey,
        lang,
        setMsg,
        toastMsg,
        eventDeletedChanged
    ])


    const handleEventDelete = async (eventId: number) => {
        // const form = new FormData()
        // form.append("event_id", eventId)
        const response = await deleteEvent(
            eventId,
            token
        )

        console.log("Response =>", response)
        if (response.status === 200) {
            setMsg(response.sub_message)
            setContext({
                ...state,
                eventDeleted: !eventDeleted
            }
            )
            // await fetchData("myevent")
        } else if (response.success === "fasle") {
            setMsg("Error Occured")
            // } else {
            //     console.log("no response")
            //     setDisabled(false)
            //     setMsg("Please enter valid email and password")
        }
        console.log("ms", toastMsg)
    }

    useEffect(() => {
        fetchData()
    }, [fetchData, statusChanged, eventDeletedChanged])


    return {
        data,
        loading,
        eventStatus,
        setStatus,
        handleStatusChange,
        imageFocus,
        showKey,
        fadeAnimated,
        showEditView,
        editFadeAnimated,
        fetchData,
        setViewType,
        viewAnimated,
        viewType,
        openDeleteModal,
        modalVisible,
        fade,
        setFade,
        handleEventDelete,
        toastMsg,
        animatedvisible
    }
}

export default useGetUserEventsRequest

// const { data, loading }: UserEventProps = useRequest(getUserEvents(token, eventStatus), statusChanged)
    // console.log("sd =>", data)

// const fetchUserEvents = useCallback(() => {
    //     console.log("st", eventStatus)
    //     getUserEvents(token, eventStatus)
    // }, [
    //     token,
    //     eventStatus,
    //     statusChanged
    // ])