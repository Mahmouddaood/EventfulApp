import firebase, { notifications } from 'react-native-firebase'
import useInput from '../../../infastructure/Hooks/useInput'
import Login from '../../../infastructure/apis/Auth/Login'
import { validateEmail, validatePasswordLength } from '../../../infastructure/validator'

const { signIn, login } = Login
type SuccessFn = (response: any) => void

const useLoginRequest = (successFn: SuccessFn) => {

    const [userData, setUserData] = useInput({
        email: "",
        password: ""
    })
    const [disabled, setDisabled] = useInput(false)
    const [toastMsg, setMsg] = useInput("")
    const [modalFlag, setModal] = useInput(false)
    const { email, password } = userData

    const handleLogin = async () => {
        const isEmailValidated = validateEmail(email)
        const isPasswordValidated = validatePasswordLength(password)
        if (!isEmailValidated || !isPasswordValidated) {
            setDisabled(false)
            setMsg("Please enter valid email and password")
        }
        const enabled = await firebase.messaging().hasPermission();

        if (enabled) {
            // console.log("enabled", enabled)
            const fcbToken = await firebase.messaging().getToken()
            const response = await login(email, password, fcbToken)
            console.log("loginResponse =>", response)
            if (response.success === "true") {
                setDisabled(false)
                setMsg("")
                return successFn(response)
            } else if (response.success === "fasle") {
                setDisabled(false)
                setMsg("Please enter valid email and password")
            } else {
                console.log("no response")
                setDisabled(false)
                setMsg("Please enter valid email and password")
            }

            // user has permissions
            console.log("fcbToken", fcbToken, "enabled", enabled)
            // firebase.notifications().onNotification((notification: any) => console.log("notificationDD =>", notification))
        } else {
            try {
                await firebase.messaging().requestPermission();
                // User has authorised
            } catch (error) {
                console.log("firerbase err", error)
                // User has rejected permissions
            }
        }

    }


    return {
        toastMsg,
        setDisabled,
        disabled,
        setMsg,
        userData,
        setUserData,
        handleLogin,
        setModal,
        modalFlag
    }


}
export default useLoginRequest