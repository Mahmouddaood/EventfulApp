import { useCallback } from 'react'
import useInput from '../../infastructure/Hooks/useInput'
import ForgotPassword from '../../infastructure/apis/ForgotPassword'
import { validateEmail, validatePhone } from '../../infastructure/validator'
import { isObjHasData } from '../../infastructure/validator/isThereData'

const { recoverPassword } = ForgotPassword
// type SuccessFn = (response: any) => void

const useForgotPasswordRequest = () => {

    const [email, setEmail] = useInput<string>("")
    const [toastMsg, setMsg] = useInput("")

    const handleRecover = useCallback(async () => {
        const isEmailValidated = validateEmail(email)
        let errors: any = {}


        if (!isEmailValidated) {
            setMsg("Please enter valid email")
        }

        const response = await recoverPassword(email)
        console.log("Response =>", response)
        setMsg(response.data.message)
        if (response.status === 200) {
            setMsg("password recovered")
            setTimeout(() => {
                setMsg("")
            }, 3000);

        } else {
            console.log("please fill fields")
        }
    }, [
        // setDisabled,
        // setMsg,
        // name,
        // msg,
        email,
        setMsg

    ])

    return {
        handleRecover,
        toastMsg,
        setEmail,
        email
    }


}
export default useForgotPasswordRequest