import { useCallback, useContext } from 'react'
import useInput from '../../../infastructure/Hooks/useInput'
import Register from '../../../infastructure/apis/Auth/Register'
import {
    validateEmail,
    validatePasswordLength,
    isPasswordsMatch,
    validatePhone
} from '../../../infastructure/validator'
import { isObjHasData } from "../../../infastructure/validator/isThereData";
import MainContext from '../../../../utilities/Context/context'


const { signUp } = Register
type SuccessFn = (response: any) => void

const useRegisterRequest = (successFn: SuccessFn) => {

    const [radioVal, changeRadio] = useInput<string>("")
    const [userData, setUserData] = useInput<any>({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        company_name: "",
        password: "",
        c_password: "",
        user_type: 4,
        // radioVal: ""
    })
    const [disabled, setDisabled] = useInput(false)
    const [toastMsg, setMsg] = useInput("")
    const [formError, setError] = useInput<any>({})
    const { state, setContext } = useContext(MainContext)

    const {
        email,
        password,
        mobile,
        c_password,
        company_name,
        first_name,
        last_name,
        user_type
    } = userData

    const handleRegister = useCallback(async () => {
        console.log("user", userData)
        let errors: any = {}
        let form: FormData = new FormData()
        Object.keys(userData).forEach((value: string) => {
            if (userData[value] === "") {
                errors = { ...errors, [value]: `${value} required` }
            } else {
                if (value === "user_type") {
                    form.append(value, radioVal === "person" ? 4 : 6)
                }
                form.append(value, userData[value])
            }
        })
        setError(errors)

        if (!isObjHasData(email) && !validateEmail(email)) {
            setDisabled(false)
            setMsg("please enter valid email")
        }
        if (!isObjHasData(password) && !validatePasswordLength(password)) {
            setDisabled(false)
            setMsg("password length must be => 8")
        }
        if (!isObjHasData(c_password) && !isPasswordsMatch(password, c_password)) {
            setDisabled(false)
            setMsg("passwords not matched")
        }
        if (!isObjHasData(mobile) && !validatePhone(mobile)) {
            setDisabled(false)
            setMsg("phone not true")
        }
        // const form = new FormData()
        // Object.keys(userData).forEach((value: string, idx: number) =>
        //     form.append(value, userData[value])
        // )
        if ((radioVal === "person" || radioVal === "افراد") ? (first_name !== "" && last_name !== "") : company_name !== "") {
            const regResponse = await signUp(
                (radioVal === "person" || radioVal === "افراد") ? 4 : 6,
                first_name,
                last_name,
                company_name,
                email,
                mobile,
                password,
                c_password
            )

            console.log("registerResponse", regResponse)
            if (regResponse.data.success === "true") {
                setDisabled(false)
                setMsg("")
                setContext({
                    ...state,
                    first_name: (radioVal === "person" || radioVal === "افراد" && userData.first_name !== "") ? userData.first_name : userData.company_name,
                    isGuest: false
                })
                return successFn(regResponse)
                // } else if (regResponse.data.success === "fasle") {
                //     setDisabled(false)
                //     setMsg("Please enter ivalid inputs")
            } else {
                console.log("no response")
                setDisabled(false)
                setMsg(regResponse.data.message.email ||
                    regResponse.data.message.mobile ||
                    regResponse.data.message.c_password
                )
                //// //
                // return successFn(regResponse)

            }
        } else {
            setMsg("please enter  all fields")
        }

    }, [
        setDisabled,
        setMsg,
        successFn,
        email,
        password,
        company_name,
        first_name,
        last_name,
        setError,
        user_type,
        userData,
        mobile,
        c_password
    ])
    console.log("ss", formError)

    return {
        toastMsg,
        setDisabled,
        disabled,
        setMsg,
        userData,
        setUserData,
        handleRegister,
        formError,
        radioVal,
        changeRadio,
        setError
    }


}
export default useRegisterRequest