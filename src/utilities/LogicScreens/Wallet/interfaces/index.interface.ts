import { RequestProps } from '../../../generalInterface'
import { ImageURISource } from 'react-native';


export default interface WalletDataProps extends RequestProps<WalletUser[]> {
    viewType: string,
    changeViewType: (type: string) => void
}



export interface WalletUser {
    id: string,
    name: string,
    image: string | ImageURISource | any,
    cost: string
}

export interface BankProps {
    id: number,
    name_ar: string,
    name_en: string
}

export interface RegistPaidData {
    title: string,
    count: number,
    total: number,
    export_link: string
}

export interface BankDetailProps {
    bank_id: "",
    primary_account: "",
    account_number1: "",
    iban1: "",
    account_number2: " ",
    iban2: ""
}