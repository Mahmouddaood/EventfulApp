import React from 'react'
import EventDetail from "../../../utilities/infastructure/apis/EventDetail"
import MainContext from '../../../utilities/Context/context'
import { getFromStorage, saveToStorage } from '../../../utilities/infastructure/validator/localStorage'

const {
    getSingleEventDetails
} = EventDetail

const {
    useContext,
    useMemo
} = React

export default async (eventId: any, isRtl: boolean, token: string, navigation: any, updateState?: (data: any) => void) => {

    // const { state, setContext } = useContext(MainContext)
    // const { langType, token, } = useMemo(() => state, [state])
    // const isRtl = useMemo(() => langType === "ar", [langType])
    const eventAdded = await getSingleEventDetails(
        eventId,
        token,
        isRtl ? "en" : "ar"
    )
    const notifications: any = await getFromStorage("notifications")
    let userNot = await JSON.parse(notifications)
    console.log("usr =>", userNot)
    console.log("upcoming =>", eventId, isRtl, token, eventAdded)

    if (!userNot) {
        console.log("no")
        await saveToStorage("notifications", JSON.stringify([eventAdded.data]))
        if (updateState) {
            updateState([eventAdded.data])
        }
    } else {
        console.log("yes", userNot.find((item: any) => item.id === eventAdded.data.id))
        if (!userNot.find((item: any) => item.id === eventAdded.data.id)) {
            userNot = [...userNot, eventAdded.data]
            await saveToStorage("notifications", JSON.stringify(userNot))
            if (updateState) {
                updateState(userNot)
            }
        } else {
            if (updateState) {
                updateState(userNot)
            }
        }
    }
    return navigation.push("Notification")
}