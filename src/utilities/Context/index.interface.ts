import {
    EventDetailItem
} from '../../utilities/LogicScreens/EventDetail/interfaces/index.interface'
export type ContextProps = {
    state: StateProps,
    setContext: React.SetStateAction<StateProps> | any
}

export interface StateProps {
    langType: string,
    lang: any,
    first_name: string,
    company_name: string,
    api_token: string,
    active: string,
    city_name: string,
    email: string,
    mobile: string,
    id: string,
    token: string,
    name: string,
    isGuest: boolean,
    photo_url: string,
    bottomTab: string,
    notifications: EventDetailItem[] | any,
    profileEdited: boolean,
    eventDeleted: boolean,
    region: RegionProps,
    locationOpened: boolean,
    lat: number | any,
    lng: number | any,
    isRtl: boolean,
    notified: boolean,
    firstNotification: EventDetailItem | any
}


export interface RegionProps {
    latitudeDelta: number | any,
    longitudeDelta: number | any
}
export interface ChildrenProps {
    children: React.ReactNode[]
}
