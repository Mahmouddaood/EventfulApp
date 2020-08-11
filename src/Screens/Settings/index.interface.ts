import { NavigationProps } from '../../utilities/generalInterface'

export default interface SettingsProps extends NavigationProps {
    value?: boolean | string | any,
    props: any
}

export interface ArrProps {
    route: string,
    name: string
}

export const ArrData = (isRtl: boolean, isGuest: boolean) => [
    {
        route: "Localization",
        name: isRtl ? "اللغه" : "Language"
    },
    {
        route: "About",
        name: isRtl ? "حول الابليكشن" : "About Application"
    },
    {
        route: "Terms",
        name: isRtl ? "التصاريح والشروط" : "Terms And Conditions"
    },
    {
        route: "Contact",
        name: isRtl ? "خدمه العملاء" : "customers service"
    },
    {
        route: "Wallet",
        name: isRtl ? "المحفظة" : "Wallet"
    },
    {
        route: "MainProfile",
        name: isRtl ? "بروفايلك" : "Profile Activiies"
    },
    {
        route: "Login",
        name: isGuest ? (isRtl ? "تسجيل دخول" : "Login") : (isRtl ? "تسجيل خروج" : "Logout")
    }
]