import { createContext } from 'react'
import { ContextProps, RegionProps, StateProps } from './index.interface'
import EngLang from './lang.json'

export const initialState: StateProps = {
    langType: "en",
    lang: EngLang,
    first_name: "",
    api_token: "",
    active: "",
    city_name: "",
    email: "",
    mobile: "",
    id: "",
    name: "",
    token: "",
    isGuest: false,
    isRtl: false,
    bottomTab: "",
    photo_url: "",
    notifications: [],
    company_name: "",
    profileEdited: false,
    eventDeleted: false,
    locationOpened: false,
    region: {
        latitudeDelta: undefined,
        longitudeDelta: undefined
    },
    // deviceLocation: {
    lat: undefined,
    lng: undefined,
    notified: false,
    firstNotification: undefined
    // }
}

export default createContext<ContextProps>({
    state: initialState,
    setContext: (state: StateProps) => state
})