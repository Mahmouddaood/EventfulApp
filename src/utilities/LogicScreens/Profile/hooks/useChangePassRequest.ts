import Profile from '../../../infastructure/apis/Profile'
import { useCallback } from 'react'
import useInput from '../../../infastructure/Hooks/useInput'
import { isPasswordsMatch } from '../../../infastructure/validator/index'
const { changePass } = Profile

interface userPassProps {
    current_password: string,
    new_password: string,
    confirm_password: string,
}

const useChangePassRequest = (token: string) => {

    const [toastMsg, setMsg] = useInput<string>("")
    const [userData, setUserData] = useInput<userPassProps>({
        current_password: "",
        new_password: "",
        confirm_password: ""
    })
    const [modalVisible, setVisible] = useInput<boolean>(false)
    const {
        current_password,
        confirm_password,
        new_password
    } = userData

    const handleChangePass = useCallback(async () => {

        if (!isPasswordsMatch(new_password, confirm_password)) {
            // setDisabled(false)
            setMsg("passwords not matched")
        }
        const response = await changePass(
            current_password,
            new_password,
            confirm_password,
            token
        )
        // setVisible(!modalVisible)
        setMsg(response.data.message)
        setTimeout(() => {
            setMsg("")
        }, 3000);
    }, [
        modalVisible,
        new_password,
        confirm_password,
        current_password,
        setVisible,
        setMsg
    ])

    return {
        setMsg,
        toastMsg,
        userData,
        setUserData,
        handleChangePass,
        modalVisible,
        setVisible,

    }

}

export default useChangePassRequest
