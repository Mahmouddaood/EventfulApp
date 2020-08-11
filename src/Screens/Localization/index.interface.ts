import { NavigationProps } from '../../utilities/generalInterface'

export default interface LocProps extends NavigationProps { }

export const langs = [
    {
        title: "English",
        stateLang: "en",
        key: "1"
    },
    {
        title: "Arabic",
        stateLang: "ar",
        key: "2"
    },

]

export interface LangProps {
    title: string,
    stateLang: string,
    key: string
}