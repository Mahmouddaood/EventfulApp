import baseFetch from '../../base'
import axios from 'axios'


class EditEvent {


    async editEvent(
        form: any,
        token: string
    ) {
        try {
            console.log("foolkk", form)
            const response = await axios.post("https://eventful.sa/api/v2/event/update", form,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                        // 'Content-Type': 'multipart/form-data',
                        Accept: "application/json"
                    }
                })
            console.log("resp =>", response)
            return response
        } catch (error) {
            console.log("error of CreateEventRes", error.response)
            return error
        }
    }


}


export default new EditEvent()



 // eventName,
                // eventImage,
                // hostedBy,
                // eventDescription,
                // eventDate,
                // eventTime,
                // eventLocation,
                // seatCount,
                // entranceFees,
                // ticketCost,
                // eventCategory,
                // attendanceReminderTime,
                // userLogined