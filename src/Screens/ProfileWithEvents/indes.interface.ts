import { NavigationProps } from '../../utilities/generalInterface'


export default interface ProfileEventProps extends NavigationProps { }




export interface ButtonListProps {
    key: string,
    title: string
}

export const ButtonList = (isRtl: boolean): ButtonListProps[] => [
    {
        key: "1",
        title: isRtl ? "مناسباتي" : "myevent"
    },
    {
        key: "2",
        title: isRtl ? "الفعاليات القادمة" : "Upcoming"
    },
    {
        key: "3",
        title: isRtl ? "الفعاليات السابقة" : 'Past'
    },
    {
        key: "4",
        title: isRtl ? "الفعاليات المشتركة" : 'Joined'
    },

    // {
    //     key: "4",
    //     title: 'Joined'
    // },
    // {
    //     key: "5",
    //     title: 'Joined'
    // }
]

export interface ImageListProps {
    key: string,
    image: string | any
}

