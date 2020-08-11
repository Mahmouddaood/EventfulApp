import axios from 'axios'


class ForgotPassword {

    async recoverPassword(
        email: string
    ) {
        try {
            console.log("foolkk", email)
            const response = await axios.post("http://eventful.sa/api/v2/forgot/password", { email },
            )
            console.log("resp =>", response)
            return response
        } catch (error) {
            console.log("error of CreateEventRes", error.response)
            return error
        }
    }


}


export default new ForgotPassword()
