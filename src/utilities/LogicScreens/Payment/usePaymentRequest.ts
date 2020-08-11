import { useCallback } from 'react'
import useInput from '../../infastructure/Hooks/useInput'
import Payment from '../../infastructure/apis/Payment'
import { validateEmail, validatePhone } from '../../infastructure/validator'
import { Linking } from 'react-native'

const { requestPayment } = Payment
// type SuccessFn = (response: any) => void

const usePaymentRequest = (token: string, event_id: number, payment_type: any) => {

    const [payment, setPay] = useInput<string | string[]>(payment_type)
    // const [disabled, setDisabled] = useInput(false)
    const [toastMsg, setMsg] = useInput("")
    const [promoCode, setCode] = useInput("")

    const handlePayment = useCallback(async () => {

        const response = await requestPayment(
            token,
            event_id,
            payment,
            promoCode
        )
        if (payment === "online") {
            return Linking.openURL(response.data.payment_url)
        } else {
            setMsg("You Registered at that event successfully, You can pay whenever you want")
            setTimeout(() => {
                setMsg("")
            }, 3000);
        }
        console.log("Response =>", response)

    }, [
        requestPayment,
        event_id,
        payment
    ])


    return {
        payment,
        handlePayment,
        toastMsg,
        setPay,
        promoCode,
        setCode
    }


}
export default usePaymentRequest