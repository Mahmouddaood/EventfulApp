import { useCallback } from 'react'
import useInput from '../../infastructure/Hooks/useInput'
import Contact from '../../infastructure/apis/Contact'
import { validateEmail, validatePhone } from '../../infastructure/validator'
import { isObjHasData } from '../../infastructure/validator/isThereData'

const { contactUs } = Contact
// type SuccessFn = (response: any) => void

const useContactRequest = () => {

    const [userData, setUserData] = useInput<any>({
        email: "",
        name: "",
        msg: "",
        mobile: ""
    })
    const [disabled, setDisabled] = useInput(false)
    const [toastMsg, setMsg] = useInput("")
    const [formError, setError] = useInput<any>({})
    const { email, msg, name, mobile } = userData

    const handleContact = useCallback(async () => {
        const isEmailValidated = validateEmail(email)
        const isPhoneValidated = validatePhone(mobile)
        let form = new FormData()
        let errors: any = {}
        Object.keys(userData).forEach((value: string) => {
            if (Object.keys(userData[value]).length) {
                form.append(value, userData[value])
            } else {
                errors = { ...errors, [value]: `${value} required` }
            }
        })
        setError(errors)
        console.log("formEr", errors)
        console.log("form", form)

        if (!isEmailValidated) {
            setDisabled(false)
            setMsg("Please enter valid email")
        }
        if (!isPhoneValidated) {
            setDisabled(false)
            setMsg("Please enter valid mobile")
        }

        const response = await contactUs(
            name,
            msg,
            email,
            mobile
        )
        console.log("Response =>", response)
        if (response.status === 200) {
            setDisabled(false)
            setMsg(" Message delivered")
            setTimeout(() => {
                setMsg("")
            }, 3000);
        } else {
            console.log("please fill fields")
            setDisabled(false)
        }
    }, [
        // setDisabled,
        // setMsg,
        // name,
        // msg,
        email,
        mobile,
        formError,
        setError,
        userData
    ])
    console.log("foo", formError)

    return {
        toastMsg,
        setDisabled,
        disabled,
        setMsg,
        formError,
        userData,
        setUserData,
        handleContact
    }


}
export default useContactRequest