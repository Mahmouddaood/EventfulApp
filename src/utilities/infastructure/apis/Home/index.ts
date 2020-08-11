import baseFetch from "../../base";
import { SearchValProps } from "../../../LogicScreens/Home/interfaces/index.interface";


class Home {
    async fetchEventById(event_id: string | number | any) {
        try {
            const response = await baseFetch.get("/singleEvent?event_id=?" + event_id)
            return response.data
        } catch (error) {
            return error
        }
    }

    async fetchAllEvents(searchParam: string | any) {
        try {
            const ordered = searchParam !== "name_en" ? ":desc" : ":asc"
            const url = `events/home?order=${searchParam}${ordered}`
            // console.log("url =>", url)
            const response = await baseFetch.get(url)
            // console.log("homeRes =>", response)
            return response
        } catch (error) {
            return error
        }
    }

    async searchForEvents(searchValues: SearchValProps) {
        try {
            // const ordered = searchParam !== "name_en" ? ":desc" : ":asc"
            const categoryFound = searchValues.category !== undefined
            const cityFound = searchValues.city !== undefined
            const dayFound = searchValues.event_when !== undefined
            const cityUrl = cityFound ? `city=${(searchValues.city === "كل المدن"
                || searchValues.city === "allcities") ? `` : searchValues.city}` : ``
            const catUrl = categoryFound ? `${cityFound ? `&` : `?`}category=${(searchValues.category === "كل التطبيقات"
                || searchValues.category === "allcategories") ? `` : searchValues.category}` : ``
            const dayUrl = dayFound ? `${(categoryFound || cityFound) ? `&` : `?`}event_when=${(searchValues.event_when === "أي وقت"
                || searchValues.event_when === "anyTime") ? `` : searchValues.event_when}` : ``
            const categoryUrl = catUrl.length > 0 ? `${catUrl}` : catUrl
            const cityU = cityUrl.length > 0 ? `?${cityUrl}` : cityUrl
            const dayU = dayUrl.length > 0 ? `${dayUrl}` : dayUrl

            // console.log(searchValues, catUrl, cityU, dayFound)
            const url = `events/search${cityU}${categoryUrl}${dayU}`

            // console.log("url =>", url)
            const response = await baseFetch.get(url)
            // console.log("homeRes =>", response)
            return response
        } catch (error) {
            return error
        }
    }

    async fetchRecommendedEvents() {
        try {

            const response = await baseFetch.get("/events/important")
            // console.log("recommendedRes =>", response)
            return response
        } catch (error) {
            return error
        }
    }

    // async fetchCertainEvents(status: string) {
    //     try {
    //         const response = await baseFetch.get("/events/home" + status)
    //         return response.data
    //     } catch (error) {
    //         return error
    //     }
    // }


}

export default new Home()