import baseFetch from '../../base'
import axios from 'axios'

class CreateEvent {

    // eventImage: string | ImageURISource | ImageSourcePropType | any,
    // eventName: string,
    // hostedBy: string,
    // eventDescription: string,
    // eventDate: string,
    // eventTime: string,
    // eventLocation: string,
    // seatCount: number,
    // entranceFees: string,
    // ticketCost: number,
    // eventCategory: string,
    // attendanceReminderTime: string,
    // userLogined: string
    async registerEvent(
        form: FormData | any,
        token: string,
    ) {
        try {
            console.log("foolkk", form)
            const response = await axios.post("http://eventful.sa/api/v2/event/create", form,
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


    async getCategories() {
        try {
            const response = await baseFetch.get("/categories")
            // console.log("resCat =>", response.data)
            return response.data
        } catch (error) {
            return error
        }
    }

}


export default new CreateEvent()


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