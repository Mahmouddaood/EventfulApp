import EventDetail from '../../../infastructure/apis/EventDetail'
import { useCallback } from 'react'
import useInput from '../../../infastructure/Hooks/useInput'
import { isObjHasData } from '../../../infastructure/validator/isThereData'
const { createReview } = EventDetail

const useAddReviewRequest = (token: string, event_id: string | number) => {

    const [toastMsg, setMsg] = useInput<string>("")
    const [comment, setComment] = useInput<string>("")
    const [rate, setRate] = useInput<string>("")
    const [modalVisible, setVisible] = useInput<boolean>(false)
    const [formError, setError] = useInput<any>({})


    const handleAddReview = useCallback(async () => {
        const response = await createReview(
            token,
            comment,
            rate,
            event_id
        )
        if (comment === "") {
            return setError({
                comment: "enter you comment"
            })
        } else if (rate === "") {
            return setError({
                rate: "enter you rate"
            })
        }
        // console.log("rs", response.data.message)
        // if (response.data.status === 200) {
        //     setMsg(response.message)
        // }else{
        setError({})
        setVisible(!modalVisible)
        return setMsg(response.data.message)

    }, [
        comment,
        event_id,
        rate,
        setMsg,
        token,
        setError,
        setVisible,
        modalVisible
    ])

    return {
        setMsg,
        toastMsg,
        comment,
        setComment,
        setRate,
        rate,
        handleAddReview,
        modalVisible,
        setVisible,
        formError,
        setError
    }
}

export default useAddReviewRequest
