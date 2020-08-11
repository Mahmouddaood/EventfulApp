import { ImageURISource } from 'react-native'
import { NavigationProps } from '../../utilities/generalInterface'
import { ButtonListProps } from '../ProfileWithEvents/indes.interface'
const Image1 = require('../../assests/eventfulAssests/images/follower5.png')



export default interface WalletProps extends NavigationProps {
    walletData: WalletDataProps[]
}


export const buttonList = (isRtl: boolean): ButtonListProps[] => [
    {
        key: "1",
        title: isRtl ? "مستلم" : "Received"
    },
    {
        key: "2",
        title: isRtl ? "مطلوب" : "Request"
    },
    {
        key: "3",
        title: isRtl ? "مجموع" : "Collect"
    },
    {
        key: "4",
        title: isRtl ? "مستلم" : "Received"
    }
]

export interface WalletDataProps {
    key?: string,
    image?: string | ImageURISource | any,
    name?: string,
    value?: string,
}

export const walletData: WalletDataProps[] = [
    {
        key: "1",
        image: Image1,
        name: "Zak Roy",
        value: "$50"
    },
    {
        key: "2",
        image: Image1,
        name: "whatever you",
        value: "$86"
    },
    {
        key: "3",
        image: Image1,
        name: "Zak Roy",
        value: "$30"
    },
    {
        key: "4",
        image: Image1,
        name: "whatever you",
        value: "$45"
    },
    {
        key: "5",
        image: Image1,
        name: "Zak Roy",
        value: "$60"
    }
]