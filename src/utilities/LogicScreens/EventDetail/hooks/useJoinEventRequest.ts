import EventDetail from '../../../infastructure/apis/EventDetail'
import { useCallback } from 'react'
import useInput from '../../../infastructure/Hooks/useInput'
import { isArrayHasData } from '../../../infastructure/validator/isThereData'
const { joinEvent } = EventDetail

const useJoinEventRequest = (token: string, navigate: any) => {

    const [toastMsg, setMsg] = useInput("")
    const [payment, setPayment] = useInput<string[]>([])

    const handleJoinEvent = useCallback((
        event_id: number,
        cost: string | number | any,
        attendenceNo: string | number | any,
        // mobile: number | string,
        // email: string
    ) => async () => {
        const response = await joinEvent(token, event_id)
        //     event_id,
        //     name,
        //     mobile,
        //     email
        // )

        console.log("response =>", response)
        setMsg(response.data.message)
        // setPayment(response.data.payment)
        // const payment = response.data.payment
        if (isArrayHasData(response.data.payment)) {
            setTimeout(() => {
                setMsg("")
                navigate("Payment", {
                    payment: response.data.payment,
                    eventId: event_id,
                    eventCost: cost,
                    attendenceNo
                })
            }, 3000)
        } else {
            setMsg(`${response.data.message}and You can pay offline`)
            setTimeout(() => {
                setMsg("")
            }, 3000);
        }


    }, [
        token,
        navigate,
        setMsg,
        setPayment
    ])

    return {
        setMsg,
        payment,
        setPayment,
        toastMsg,
        handleJoinEvent
    }
}

export default useJoinEventRequest
