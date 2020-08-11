import {
    NavigationProps
} from '../../utilities/generalInterface'
import { TapDataProps } from '../../components/TapView/index.interface'

export default interface WalletPaidProps extends NavigationProps { }

export interface PaidEventProps {
    isRtl: boolean
}


export const tapData = (isRtl: boolean): TapDataProps[] => [
    {
        title: isRtl ? "الحساب البنكي" : "Record Bank",
        view: "paid"
    },
    {
        title: isRtl ? "اضافة حساب" : "Add Account",
        view: "add"
    }
]
