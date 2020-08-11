import { useCallback } from 'react'
import useInput from '../../infastructure/Hooks/useInput'
import EventInfo from '../../infastructure/apis/EventInfo'
import {
    QuestionState
} from './interfaces/index.interface'
const { addReaction } = EventInfo


const useAddEventReactionRequest = (userLogined: string | number | any) => {

    const [questions, setQuestions] = useInput<QuestionState | any>({
        question1: "",
        question2: "",
        comment: ""
    })
    const {
        question1,
        question2,
        comment
    } = questions
    const [toastMsg, setMsg] = useInput("")

    const handleAddReaction = useCallback((eventId: number) => async () => {
        console.log("liked =>", questions, eventId)

        // let form = new FormData()

        // Object.keys(questions).map((value: any) =>
        //     form.append(value, questions[value])
        // )
        // form.append("event_id", eventId)
        const response = await addReaction(
            // form,
            question1,
            question2,
            comment,
            eventId,
            userLogined
        )
        if (response.data.status) {
            setMsg("Thank you for your review"
                // response.data.message
            )
            setTimeout(() => {
                setMsg("")
            }, 3000);
        } else {
            setMsg("Error occured")
            setTimeout(() => {
                setMsg("")
            }, 3000);
        }
    }, [
        // comment,
        // liked,
        // recommended,
        setMsg,
        question1,
        question2,
        comment,
        userLogined
    ])

    return {

        questions,
        setQuestions,
        setMsg,
        toastMsg,
        handleAddReaction
    }

}

export default useAddEventReactionRequest