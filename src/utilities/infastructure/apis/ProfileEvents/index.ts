import baseFetch from '../../base'

class ProfileEvents {

    async fetchProfileData(userLogin: string) {
        try {
            const response = await baseFetch.get("/ProfileEvents?user=" + userLogin)
            return response
        } catch (error) {
            return error
        }
    }

}


export default new ProfileEvents()
