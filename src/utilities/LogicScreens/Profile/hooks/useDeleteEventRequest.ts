import useInput from '../../../infastructure/Hooks/useInput'
import Profile from '../../../infastructure/apis/Profile'
import useGetUserEventsRequest from './useGetUserEventsRequest'
const { deleteEvent } = Profile

const useDeleteEventRequest = (token: string) => {

    const [toastMsg, setMsg] = useInput<string>("")

    // const {
    //     fetchData
    // } = useGetUserEventsRequest(token)
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


    return {
        toastMsg,
        handleEventDelete
    }


}
export default useDeleteEventRequest