import { useCallback, useContext, useMemo, useEffect } from 'react';
import firebase from 'react-native-firebase'
const PushNotification = require('react-native-push-notification')
import ImagePicker from 'react-native-image-picker'
import ImageCropPicker from "react-native-image-crop-picker";
import useInput from '../../../infastructure/Hooks/useInput'
import CreateEventState, { CategoryProps, TagsProps } from '../../CreateEvent/interfaces/index.interface'
import {
    options,
    optionsAr
} from '../../Profile/constants'
import usePrevious from '../../../infastructure/Hooks/usePrevious';
import { isObjHasData, isArrayHasData } from '../../../infastructure/validator/isThereData';
import { UserEvent, CData } from '../../Profile/interfaces/index.interface';
import { IMAGE_BASE_URL } from '../../../infastructure/config';
import MainContext from '../../../Context/context'
import { saveToStorage } from '../../../infastructure/validator/localStorage';
import EventDetail from '../../../infastructure/apis/EventDetail'
import CreateEvent from '../../../infastructure/apis/CreateEvent'
const {
    getSingleEventDetails
} = EventDetail
const {
    getCategories
} = CreateEvent
const useEditEventRequest = (
    navigate: any,
    token: string,
    isRtl: boolean,
    eventApi?: ((form: FormData | any, token: string) => void) | Promise<(form: FormData | any, token: string) => void> | any,
    eventDetailData?: CreateEventState | UserEvent | any,

) => {
    const { state, setContext } = useContext(MainContext)
    const { eventDeleted } = useMemo(() => state, [state])
    const [color, setColor] = useInput("")
    const [isDatePickerVisible, setDateModal] = useInput<string>("")
    const [mode, setMode] = useInput<string | any>("datetime")
    const [tags, setTags] = useInput<TagsProps | any>([])
    const [eventInputs, setEventInput] = useInput<CreateEventState | any>({
        name: eventDetailData.name ? eventDetailData.name : "",
        img: eventDetailData.img ? eventDetailData.img : "",
        description: eventDetailData.description ? eventDetailData.description : "",
        address: eventDetailData.address ? eventDetailData.address : "",
        attendees_no: eventDetailData.attendees_no !== 0 ? eventDetailData.attendees_no : "",
        // category_ids: eventDetailData.category_ids ?
        //     eventDetailData.category_ids
        //     : [],
        city_id: eventDetailData.city_id ? eventDetailData.city_id : "",
        event_date_from: eventDetailData.event_date ? eventDetailData.event_date : "",
        event_date_to: eventDetailData.event_date_to ? eventDetailData.event_date_to : "",
        event_from_time: eventDetailData.event_from ? eventDetailData.event_from : "",
        event_to_time: eventDetailData.event_to ? eventDetailData.event_to : "",
        imgs: eventDetailData.imgs ? eventDetailData.imgs : [],
        lng: eventDetailData.lng,
        lat: eventDetailData.lat,
        // payment_type: eventDetailData.payment_type ? eventDetailData.payment_type : [],
        subscription_cost: eventDetailData.subscription_cost ? eventDetailData.subscription_cost : "",
        youtube_url: eventDetailData.youtube_url ? eventDetailData.youtube_url : "",
        event_subscription: eventDetailData.event_subscription ? eventDetailData.event_subscription : "",
        // event_id: eventDetailData.id ? eventDetailData.id : undefined
    })
    const [payment_type, setPay] = useInput<any>(eventDetailData.payment_type ? eventDetailData.payment_type : [])
    const [category_ids, setCategory] = useInput<any>(eventDetailData.category_ids ?
        eventDetailData.category_ids
        : [])
    const [mapped, setMap] = useInput<boolean>(false)
    const [disabled, setDisabled] = useInput<boolean>(false)
    const [loading, setLoading] = useInput<boolean>(false)
    const [toastMessage, setMsg] = useInput<string>("")
    const [formError, setError] = useInput<CreateEventState | any>({})
    const [categories, setCategories] = useInput<CategoryProps | any>([])
    const prevPayType = usePrevious(eventInputs.payment_type)
    const payChanged = prevPayType !== eventInputs.payment_type

    // const fetchCats = useCallback(async () => {
    //     const { data }: any = await getCategories()
    //     setCategories(data)
    // }, [setCategories, getCategories])
    // useEffect(() => {
    //     fetchCats()
    // }, [fetchCats])
    console.log("eventssss => ", categories)
    const handleChangeEvent = useCallback(async (events: CreateEventState | UserEvent | any) => {
        // const { data }: any = await getCategories()
        // setCategories(data)
        let errors: any = {}
        let form = new FormData()
        // if (isArrayHasData(events)) {
        Object.keys(events).forEach(async (value: any) => {
            if (events[value] !== "") {
                if (value !== "category_ids" || value !== "tags") {
                    if (value === "imgs") {
                        // events.imgs.map((image: any) => {
                        //     form.append(value,
                        //         {
                        //             uri: image.uri,
                        //             type: image.type,
                        //             name: image.name,
                        //         }
                        //     )
                        // }
                        // )
                        events.imgs.map((image: any) => form.append("imgs", {
                            uri: image.uri,
                            type: image.type,

                        }))

                    } else if (value === "img") {
                        let image: any
                        if (typeof events[value] === "string") {
                            console.log("hereeventImage")
                            form.append(value, { uri: `${IMAGE_BASE_URL}${events[value]}`, type: "image/jpeg", name: "img.jpg" })
                        } else {
                            console.log("hereeventImageObject")

                            form.append(value, events[value])
                        }
                    } else if (value === "event_subscription") {
                        if (events[value] !== "free") {
                            form.append("payment_type", JSON.stringify(payment_type))
                            form.append(value, events[value])

                        } else {
                            console.log("herefree")
                            // form.append("payment_type", JSON.stringify(payment_type))
                            form.append(value, events[value])
                        }
                    }
                    else if (value === "event_from_time" || value === "event_to_time") {
                        if (events["event_from_time"].length < 2 || events["event_to_time"].length < 2) {

                            form.append(value, `${events[value]}:00`)
                        } else {
                            form.append(value, events[value])

                        }
                    } else {
                        form.append(value, events[value])
                    }
                }
            } else {
                errors = { ...errors, [value]: `${value} required` }
                setError(errors)
            }
        })
        console.log("cat =>dss", category_ids, payment_type, tags)
        form.append("category_ids", Array.isArray(category_ids) ?
            Number(category_ids[0]) : category_ids.id)
        form.append("tags", JSON.stringify(tags.map((item: TagsProps) => item.title_en)))
        // form.append("payment_type", payment_type)

        console.log("eventApi", eventApi)
        if (eventDetailData.id !== undefined) {
            form.append("event_id", eventDetailData.id)
        }
        console.log("errorLength", Object.keys(errors).length)
        if (
            errors["subscription_cost"] !== "" &&
            errors["youtube_url"] !== "" &&
            Object.keys(errors).length < 3) {
            console.log("eventfreeefornow")
            errors = {}
        }
        console.log("errors => ", errors)
        if (!isObjHasData(errors)) {
            console.log("in")
            const response = await eventApi(form, token)
            console.log("response", response)

            // PushNotification.configure({
            //     onNotification: (notification: any) => {
            //         console.log("NOTIFICA", notification);
            //         return navigate("Notification", notification)
            //     }
            // })
            if (response.status === 200) {
                // let notificationState: any
                setDisabled(false)
                setMsg(response.data.message)
                setColor("green")
                setContext({
                    ...state,
                    eventDeleted: !eventDeleted
                }
                )
                // setTimeout(() => {
                //     setMsg("")
                // }, 3000);

                // if (eventDetailData.id !== undefined) {
                // return navigate("Notification")

                // PushNotification.configure({
                //     onNotification: async (notification: any) => {
                //         const eventAdded = await getSingleEventDetails(
                //             notification.event_id,
                //             token,
                //             isRtl ? "en" : "ar"
                //         )

                //         await saveToStorage("notifications", JSON.stringify(eventAdded.data)).then(() => navigate("Notification"))
                //     }
                // })
                // PushNotification.configure({
                //     onNotification: async (notification: any) => {
                //         const eventAdded = await getSingleEventDetails(
                //             notification.event_id,
                //             token,
                //             isRtl ? "en" : "ar"
                //         )
                //         setContext({
                //             ...state,
                //             notifications: eventAdded.data
                //         })
                //         // console.log("eventAdded =>", eventAdded)
                //         // notificationState = !notifications.find((item: any) => item.id === eventAdded.data.id) ? [
                //         //     ...notifications, eventAdded.data
                //         // ] : notifications

                //     }
                // })

                // console.log("notiState =>", notificationState)
                // console.log("state =>", state)
                // return navigate("Notification")




            } else {
                setColor("red")
                setMsg("Event Process has an Problem enter all inputs")
                //     PushNotification.configure({
                //         onNotification: (notification: any) => {
                //             console.log("NOTIFICA", notification);
                //             return navigate("Notification", notification)
                //         }
                //     })
                // return navigate("Notification")
            }
        } else {
            setColor("red")

            setMsg("please enter required fields")
        }
    }, [
        setColor,
        setDisabled,
        // disabled,
        token,
        setMsg,
        setError,
        // formError,
        eventApi,
        navigate,
        category_ids,
        eventDetailData.id,
        payment_type,
        // isRtl,
        tags,
        eventDeleted,
        setContext,
        state
        // setContext,
        // notifications,
        // state
    ])
    const changeImage = useCallback(async (stateName: string) => {
        ImagePicker.showImagePicker(isRtl ? optionsAr : options, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                // console.log("imageResponse =>", response)
                const source = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName,
                };
                // console.log("source =>", source)
                setLoading(true)
                setEventInput({
                    ...eventInputs,
                    [stateName]: stateName === "imgs" ? [...eventInputs.imgs, source] : source

                })
                setLoading(false)
                // console.log("image", eventInputs.img)
            }
        });
    }, [
        eventInputs,
        isRtl,
        setLoading,
        setEventInput

    ])


    const selectMultiImages = useCallback(() => {
        ImageCropPicker.openPicker({
            multiple: true
        }).then((images: any) => {
            console.log("images => ", images)
            setEventInput({
                ...eventInputs,
                imgs: images.map((image: any) => {
                    return {
                        uri: image.path,
                        type: image.mime
                    }
                })
            })
        });

    }, [
        eventInputs
    ])

    console.log("imgs =>", eventInputs.imgs)

    return {
        handleChangeEvent,
        disabled,
        setEventInput,
        eventInputs,
        toastMessage,
        formError,
        // errors,
        changeImage,
        loading,
        mapped,
        setMap,
        payChanged,
        selectMultiImages,
        setLoading,
        setCategory,
        setPay,
        payment_type,
        category_ids,
        setDateModal,
        isDatePickerVisible,
        setMode,
        mode,
        setColor,
        color,
        tags,
        setTags
    }
}

export default useEditEventRequest
