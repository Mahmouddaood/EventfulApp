import baseFetch from '../../base'
import Axios from 'axios'
class ProfileEvents {

    async fetchAboutData(url: string) {
        try {
            const response = await Axios.get(url)
            console.log("aboutRes =>", response.data.data)
            return response.data.data
        } catch (error) {
            return error
        }
    }

}


export default new ProfileEvents()
