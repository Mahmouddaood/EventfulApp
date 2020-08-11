import baseFetch from '../../base'
import { isObjHasData } from '../../../../utilities/infastructure/validator/isThereData'


class Profile {

    async getUserProfile(userLogined: string | number | any) {
        try {
            const response = await baseFetch.get("/user/" + userLogined)
            // console.log("response =>", response)
            return response.data
        } catch (error) {
            return error
        }
    }

    async getUserEvents(token: string, eventStatus?: string, lang?: string) {
        try {
            console.log("eventStat =>", eventStatus)
            const url = eventStatus === "myevent" ? "/my_events" :
                eventStatus !== "Joined" ?
                    "/events?type=" + eventStatus
                    : "/events"

            console.log("status =>", url)
            const response = await baseFetch.get(url, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    lang,
                    Accept: 'application/json'
                }
            })
            console.log("ress =>", response.data)

            return response.data
        } catch (error) {
            return error
        }
    }

    async getUserFollowers(userId: number | string) {
        try {
            const response = await baseFetch.get("/followers/" + userId)
            return response
        } catch (error) {
            return error
        }
    }

    async editUserProfile(form: any | any, apiToken: string) {
        try {
            console.log("editingData =>", form, "token", apiToken)
            const response = await baseFetch.post("/user/update",
                form,
                {
                    headers: {
                        Authorization: 'Bearer ' + apiToken,
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                        // 'Accept': 'application/x-www-form-urlencoded'
                    }
                }
            )
            return response
        } catch (error) {
            return error
        }
    }
    async unFollowForProfile(
        follwer: number | string,
        token: string,
    ) {
        try {

            const response = await baseFetch.post(`/follow/toggle/${follwer}`, {}, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json"
                }

            })

            return response.data
        } catch (error) {
            return error
        }
    }
    async deleteEvent(
        eventId: number,
        token: string,
    ) {
        try {
            console.log("vo =>", token, eventId)
            const response = await baseFetch.post("/event/delete", { event_id: eventId }, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json'

                }
            })
            console.log("vo =>", response)

            return response.data
        } catch (error) {
            console.log("fo =>", error.response)
            return error
        }
    }


    async getCountries() {
        try {
            const response = await baseFetch.get("/countries")
            // console.log("rescount", response.data.data)
            return response.data.data
        } catch (error) {
            return error
        }
    }
    async getRegions(country_id: number | string) {
        try {
            const response = await baseFetch.get("/regions/" + country_id)
            return response.data.data
        } catch (error) {
            return error
        }
    }
    async getCities(region_id?: number | string) {
        try {
            const cityUrl = region_id ? "/cities/" + region_id : "/cities"
            // console.log("city =>", cityUrl)
            const response = await baseFetch.get(cityUrl)
            // console.log("res", response.data)
            return region_id ? response.data.data : response.data
        } catch (error) {
            return error
        }
    }
    async changePass(
        current_password: string,
        new_password: string,
        confirm_password: string,
        token: string
    ) {
        try {
            console.log("pass =>", current_password, confirm_password, new_password)
            const response = await baseFetch.post("/user/change_password", {
                current_password,
                new_password,
                confirm_password,
            }, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json'
                }
            })
            console.log("res", response)
            return response
        } catch (error) {
            console.log("resee", error)

            return error
        }
    }

}

export default new Profile()