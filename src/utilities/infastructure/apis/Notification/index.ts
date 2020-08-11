import baseFetch from '../../base'

class Notification {

    async fetchNotifcationData() {
        try {
            const response = await baseFetch.get("/Notifications")
            return response.data
        } catch (error) {
            return error
        }
    }

}

export default new Notification()