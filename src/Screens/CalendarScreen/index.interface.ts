import { NavigationProps } from '../../utilities/generalInterface'


export default interface CalendarScreenProps extends NavigationProps {
    dashData?: dashDataProps[]

}



export interface dashDataProps {
    day: number,
    month: string,
    status: number,
    eventName: string,
    time: string,
    place: string,
    duration: string,

}
export const dashData: dashDataProps[] = [
    {
        day: 18,
        month: "October",
        status: 1,
        eventName: "Video games event",
        time: "2:00 PM",
        place: "Khobar Studiom",
        duration: "2 hrs"
    },
    {
        day: 13,
        month: "November",
        status: 2,
        eventName: "Video games event",
        time: "2:00 PM",
        place: "Khobar Studiom",
        duration: "2 hrs"
    },
    {
        day: 12,
        month: "December",
        status: 3,
        eventName: "Video games event",
        time: "2:00 PM",
        place: "Khobar Studiom",
        duration: "2 hrs"
    },
    {
        day: 25,
        month: "April",
        status: 4,
        eventName: "Video games event",
        time: "2:00 PM",
        place: "Khobar Studiom",
        duration: "2 hrs"
    }

]