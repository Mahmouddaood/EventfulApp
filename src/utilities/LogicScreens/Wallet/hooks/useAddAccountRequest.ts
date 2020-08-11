import { useCallback } from 'react'
import useInput from '../../../infastructure/Hooks/useInput'
import Wallet from '../../../infastructure/apis/Wallet'
import { BankDetailProps } from '../interfaces/index.interface'


const {
    addBankAccount,
} = Wallet
type SuccessFn = (response: any) => void

const useAddAccountRequest = (token: string, bankDetailData: BankDetailProps) => {
    const [radioVal, changeRadio] = useInput<string>("account1")

    const [userData, setUserData] = useInput<BankDetailProps | any>({
        bank_id: "",
        primary_account: bankDetailData?.primary_account,
        account_number1: bankDetailData?.account_number1,
        iban1: bankDetailData?.iban1,
        account_number2: bankDetailData?.account_number2,
        iban2: bankDetailData?.iban2
    })
    const [disabled, setDisabled] = useInput(false)
    const [toastMsg, setMsg] = useInput("")
    const [formError, setError] = useInput<any>({})

    const {
        bank_id,
        primary_account,
        account_number1,
        account_number2,
        iban1,
        iban2
    } = userData

    const handleAddAccount = useCallback(async () => {
        console.log("user", userData)
        let errors: any = {}
        Object.keys(userData).forEach((value: string) => {
            if (userData[value] === "") {
                errors = { ...errors, [value]: `${value} required` }
            }
        })
        setError(errors)

        const response = await addBankAccount(
            bank_id,
            primary_account,
            account_number1,
            iban1,
            account_number2,
            iban2,
            token
        )

        console.log("bankResponse", response)
        if (response.data.success === "true") {
            setDisabled(false)
            setMsg("")
            // } else if (regResponse.data.success === "fasle") {
            //     setDisabled(false)
            //     setMsg("Please enter ivalid inputs")
        } else {
            console.log("no response")
            setDisabled(false)
            // setMsg(regResponse.data.message.email || regResponse.data.message.mobile)
            //// //
            // return successFn(regResponse)

        }

    }, [
        setDisabled,
        setMsg,
        bank_id,
        primary_account,
        account_number1,
        iban1,
        account_number2,
        iban2,
        token,
        setError,
        userData

    ])
    console.log("ss", formError)

    return {
        toastMsg,
        setDisabled,
        disabled,
        setMsg,
        userData,
        setUserData,
        handleAddAccount,
        formError,
        radioVal,
        changeRadio
    }


}
export default useAddAccountRequest