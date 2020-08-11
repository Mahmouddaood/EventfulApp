import baseFetch from "../../../base";
import SignUpInterface from './index.interface'
// import { ALTER_API_LINK } from "../../../config";
// import axios from "axios";


class Register {

    async signUp(
        user_type: number,
        first_name: string,
        last_name: string,
        company_name: string,
        email: string,
        mobile: string,
        password: string,
        c_password: string,
    ) {

        console.log(
            "user_type", user_type,
        )
        try {
            const response = await baseFetch.post('/register', {
                user_type,
                first_name,
                last_name,
                company_name,
                email,
                mobile,
                password,
                c_password
            }, {
                headers: {
                    'Accept': 'application/json'
                }
            })

            console.log("respose of registe =>", response)
            return response
        } catch (error) {
            console.log("respose of error =>", error.response)

            return error
        }

    }

}

export default new Register()