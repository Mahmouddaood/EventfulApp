import baseFetch from '../../base'


class Contact {

    async contactUs(
        name: string,
        msg: string,
        email: string,
        mobile: string
    ) {
        try {
            const response = await baseFetch.post("/contact_us", {
                name,
                msg,
                email,
                mobile
            })
            console.log("cotac", response)
            return response.data
        } catch (error) {
            return error
        }

    }

}

export default new Contact()