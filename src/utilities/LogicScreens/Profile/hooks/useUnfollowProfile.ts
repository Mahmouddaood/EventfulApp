import useInput from '../../../infastructure/Hooks/useInput'
import Profile from '../../../infastructure/apis/Profile'
const { unFollowForProfile } = Profile

const useUnfollowProfile = () => {

    const [disabled, setDisabled] = useInput<boolean>(false)
    const [toastMsg, setMsg] = useInput<string>("")
    const [follwerModal, setModalVis] = useInput<string>("")



    const handleUnfollow = async (follwer: number | string, token: string, isRtl?: boolean, type?: string) => {
        const response = await unFollowForProfile(
            follwer,
            token
        )
        console.log("followresponse", response)
        if (response.success === "true") {
            setDisabled(false)
            setMsg(type ? (isRtl ? "تمت عدم المتابعه" : "unfollwing done") : (isRtl ? "تمت المتابعه" : "following"))
            setTimeout(() => {
                setMsg("")
            }, 3000);
        } else if (response.success === "fasle") {
            setDisabled(false)
            setMsg("unAuthroized")
            // } else {
            //     console.log("no response")
            //     setDisabled(false)
            //     setMsg("Please enter valid email and password")
        }
    }


    return {
        toastMsg,
        setDisabled,
        disabled,
        setMsg,
        handleUnfollow,
        follwerModal,
        setModalVis


    }


}
export default useUnfollowProfile