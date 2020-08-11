import { ALTER_API_LINK, API_LINK } from "../../../config";
import axios from "axios";
import baseFetch from '../../../base'

class Login {

    async signIn(
        email: string,
        password: string,
        android_token: string
    ) {
        try {
            const response = await axios.create({ baseURL: ALTER_API_LINK }).post('/login', {
                email,
                password,
                android_token
            })
            return response.data
        } catch (error) {
            return error
        }

    }

    async login(
        email: string,
        password: string,
        android_token: string
    ) {
        try {
            console.log("androidToken =>", android_token)
            const response = await baseFetch.post('/login',
                {
                    email,
                    password,
                    android_token
                })
            console.log("logRes =>", response)
            return response.data
        } catch (error) {
            console.log("logRes =>", JSON.parse(JSON.stringify(error)))
            return error
        }
    }

}

export default new Login()


