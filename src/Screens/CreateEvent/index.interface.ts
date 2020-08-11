import { NavigationProps } from '../../utilities/generalInterface'
import CreateEventState from '../../utilities/LogicScreens/CreateEvent/interfaces/index.interface'

export default interface CreateEventProps extends NavigationProps { }


export const counts: string[] = [
    "25",
    "50",
    "100",
    "150"
]

export const timeArr: string[] = [
    "10 am",
    "2 pm",
    "6 pm",
    "10 pm"
]

export const hobbies: string[] = [
    "Sport",
    "Tennis",
    "Reading",
    "Music"
]

export const timeBeforeEvent: string[] = [
    "12 hours before the event",
    "2 days before the event",
    "24 hours before the event",
]

export const radioData: string[] = [
    "free",
    "paid",
    "online"
]

export interface InputCreateViewProps extends NavigationProps {
    eventData?: CreateEventState,
    eventApi?: (form: FormData, token: string) => void
}
