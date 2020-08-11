import baseFetch from '../../base'

class EventDetail {
    async getSingleEventDetails(event_id: number, token: string, lang: string) {
        try {
            const response = await baseFetch.get(`/event/${event_id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    lang
                }
            })
            console.log("res =>", response.data)
            return response.data
        } catch (error) {
            return error
        }
    }

    async joinEvent(
        token: string,
        event_id: number,
        // name: string,
        // mobile: number | string,
        // email: string
    ) {
        console.log(
            token
        )
        try {
            const response = await baseFetch.post('/event/register',
                {
                    event_id,
                }
                //     name,
                //     mobile,
                //     email
                // }
                , {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token
                    }
                })
            console.log("joinRes", response)
            return response
        } catch (error) {
            console.log("joinReserr", error.response)
            return error
        }
    }

    async createReview(
        token: string,
        comment: string,
        rate: string | any,
        event_id: string | number
    ) {
        console.log(
            token,
            comment,
            rate,
            event_id
        )
        try {
            console.log("evcomrate =>", event_id, comment, rate)
            const response = await baseFetch.post('/event/rate', {
                event_id,
                comment,
                rate
            }, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Accept': 'application/json'
                }
            })
            console.log("es", response)
            return response
        } catch (error) {
            console.log("error", error.response)
            return error
        }
    }
}

export default new EventDetail()