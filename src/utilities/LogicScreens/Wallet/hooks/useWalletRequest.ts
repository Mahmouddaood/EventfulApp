import {
    useCallback,
    useEffect,
    useState
} from 'react'
import Wallet from '../../../infastructure/apis/Wallet'
import useInput from '../../../infastructure/Hooks/useInput'
import {
    BankProps,
    BankDetailProps,
    RegistPaidData
} from '../interfaces/index.interface'
import usePrevious from '../../../infastructure/Hooks/usePrevious'

const {
    fetchBankDetail,
    fetchBankList,
    fetchRegisterationPaid,
    addBankAccount
} = Wallet

const useWalletRequest = (token: string): any => {
    const [viewType, setViewType] = useInput<string>("paid")
    const [radioVal, changeRadio] = useInput<string>("")
    const [bankData, setBankData] = useInput<BankProps[]>([])
    const [bankLoading, setBankLoading] = useInput<boolean>(false)
    const [registPaidLoading, setRegistPaidLoading] = useInput<boolean>(false)
    const [registerationData, setRegisterationData] = useInput<RegistPaidData[]>([])
    const [bankDetailLoading, setBankDetailLoading] = useInput<boolean>(false)
    const [disabled, setDisabled] = useInput(false)
    const [toastMsg, setMsg] = useInput("")
    const [formError, setError] = useInput<any>({})
    const [searchValue, setSearch] = useState("")
    const [bankId, setBankId] = useState<any>()
    const [account, setPrimaryAccount] = useState<any>()
    const [userData, setUserData] = useInput<BankDetailProps | any>({
        // bank_id: "",
        // primary_account: "",
        account_number1: "",
        iban1: "",
        account_number2: "",
        iban2: ""
    })
    console.log("لbaccnkk", bankId, account)


    const changeViewType = useCallback((type: string) => {
        setViewType(type)
    }, [setViewType])
    const prevViewType = usePrevious(viewType)
    const viewChanged = prevViewType !== viewType
    const prevRadio = usePrevious(radioVal)
    const radioChanged = prevRadio !== radioVal
    // const { data, loading }: WalletDataProps | any = useRequest(fetchWalletData)

    const {
        bank_id,
        primary_account,
        account_number1,
        account_number2,
        iban1,
        iban2
    } = userData

    const handleAddAccount = useCallback(async () => {
        console.log("user", userData, "bankId =>", bankId, "primay=>", account)
        let errors: any = {}
        Object.keys(userData).forEach((value: string) => {
            if (userData[value] === "") {
                errors = { ...errors, [value]: `${value} required` }
            }
        })
        setError(errors)

        const response = await addBankAccount(
            bankId,
            account,
            account_number1,
            iban1,
            account_number2,
            iban2,
            token
        )

        console.log("bankResponse", response)
        if (response.success === "true") {
            setDisabled(false)
            setMsg("Done")
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
    console.log("ss", registerationData)

    const fetchData = useCallback(async () => {
        console.log("view", viewType)
        // if (viewType === "paid") {
        setRegistPaidLoading(true)
        setRegisterationData(await fetchRegisterationPaid(token))
        setRegistPaidLoading(false)
        // } else if (viewType === "add") {
        console.log("Ahooo")
        setBankLoading(true)
        setUserData(await fetchBankDetail(token))
        setBankData(await fetchBankList())
        setBankLoading(false)
        setBankDetailLoading(false)

    }, [
        setBankLoading,
        token,
        setBankData,
        setBankDetailLoading,
        setUserData,
        viewType,
        setRegisterationData,
        setRegistPaidLoading
    ])
    // console.log("detares", userData)
    // console.log("banblk", bankData)

    const searchForData = useCallback(async () => {
        console.log("ahooooo ,", searchValue)
        const allData = await fetchRegisterationPaid(token)
        if (searchValue !== "") {
            setRegisterationData(allData.filter((item: RegistPaidData) => item.title === searchValue))
        } else {
            setRegisterationData(allData)
        }

    }
        , [registerationData, searchValue])

    useEffect(() => {
        fetchData()
    }, [fetchData,
        viewChanged,
        viewType

    ])

    return {
        bankData,
        bankLoading,
        bankDetailLoading,
        viewType,
        changeViewType,
        toastMsg,
        setDisabled,
        disabled,
        setMsg,
        userData,
        setUserData,
        handleAddAccount,
        formError,
        radioVal,
        changeRadio,
        radioChanged,
        registerationData,
        registPaidLoading,
        searchValue,
        setSearch,
        searchForData,
        setBankId,
        setPrimaryAccount
    }

}

export default useWalletRequest