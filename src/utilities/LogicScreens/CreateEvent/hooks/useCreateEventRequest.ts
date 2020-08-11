import { useCallback } from 'react';
import ImagePicker from 'react-native-image-picker'
import ImageCropPicker from 'react-native-image-crop-picker'
import useInput from '../../../infastructure/Hooks/useInput'
import CreateEvent from "../../../infastructure/apis/CreateEvent";
import CreateEventState from '../interfaces/index.interface'
import {
    options,
    optionsAr
} from '../../Profile/constants'
import usePrevious from '../../../infastructure/Hooks/usePrevious';
import { isObjHasData } from '../../../infastructure/validator/isThereData';
const { registerEvent } = CreateEvent


const useCreateEventRequest = (token: string, isRtl: boolean) => {

    const [eventInputs, setEventInput] = useInput<CreateEventState | any>({
        name: "",
        img: "",
        description: "",
        address: "",
        attendees_no: "",
        category_ids: [],
        city_id: "",
        event_date_from: "",
        event_date_to: "",
        event_from_time: "",
        event_to_time: "",
        imgs: [],
        lat: "",
        lng: "",
        payment_type: "",
        subscription_cost: "",
        youtube_url: "",
        event_subscription: ""
    })
    const [mapped, setMap] = useInput<boolean>(false)
    const [disabled, setDisabled] = useInput<boolean>(false)
    const [loading, setLoading] = useInput<boolean>(false)
    const [toastMessage, setMsg] = useInput<string>("")
    const [formError, setError] = useInput<any>({})

    const prevPayType = usePrevious(eventInputs.payment_type)
    const payChanged = prevPayType !== eventInputs.payment_type
    // const {
    //     name,
    //     img,
    //     description,
    //     address,
    //     attendees_no,
    //     category_ids,
    //     city_id,
    //     event_date_from,
    //     event_date_to,
    //     event_from_time,
    //     event_to_time,
    //     imgs,
    //     location,
    //     payment_type,
    //     subscription_cost,
    //     youtube_url
    // } = eventInputs


    let errors: any = {}
    const handleCreateEvent = useCallback(async () => {
        console.log("eventInputs", eventInputs)
        let form = new FormData()
        Object.keys(eventInputs).forEach(async (value: any, idx: number) => {
            if (!Object.keys(eventInputs[value]).length) {
                console.log("value", value)
                errors = { ...errors, [value]: `${value} required` }
                setDisabled(false)
                // setError({
                //     ...formError,
                //     {[value]: `${[value]} required`}
                // })
            }
            // } else {
            //     return form.append(value, eventInputs[value])
            // }
            setError(errors)
        })
        console.log("formEr =>", formError)
        console.log("foo", errors)
        console.log("evinp", eventInputs)

        if (!isObjHasData(errors)) {
            console.log("oin")
            const response = await registerEvent(form, token)
            if (response.data.success === true || response.status === 200) {
                setDisabled(false)
                setMsg("event creation done")
                console.log("event created")
            } else {
                setDisabled(!disabled)
                console.log("event creation has A problem")
            }
        }


    }, [
        setDisabled,
        disabled,
        token,
        eventInputs,
        setMsg,
        setError,
        formError
    ])
    //     console.log("eventInputs", eventInputs)
    //     let form = new FormData()
    //     Object.keys(eventInputs).forEach(async (value: any, idx: number) => {
    //         console.log("value", value)
    //         if (!isObjHasData(eventInputs[value])) {
    //             setDisabled(false)
    //             setError({
    //                 ...formError,
    //                 value: `${value} required`
    //             })
    //             console.log("foo", formError)

    //         } else {
    //             return form.append(value, eventInputs[value])
    //         }
    //     })
    //     if (isObjHasData(formError))
    //         console.log("oin")
    //     const response = await registerEvent(form, token)
    //     if (response.data.success === true || response.status === 200) {
    //         setDisabled(false)
    //         setMsg("event creation done")
    //         console.log("event created")
    //     } else {
    //         setDisabled(!disabled)
    //         console.log("event creation has A problem")
    //     }



    // }, [
    //     // setDisabled,
    //     // disabled,
    //     // token,
    //     eventInputs,
    //     // setMsg,
    //     setError,
    //     formError
    // ])
    const changeImage = useCallback(async () => {
        ImagePicker.showImagePicker(isRtl ? optionsAr : options, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                const source = { uri: response.uri };
                console.log("source =>", source)
                setLoading(true)
                setEventInput({
                    ...eventInputs,
                    img: {
                        uri: response.uri,
                        type: response.type,
                        name: response.fileName,
                    }

                })
                setLoading(false)
                console.log("image", eventInputs.img)
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
        }).then(images => {
            setEventInput({
                ...eventInputs,
                imgs: images
            })
        });

    }, [
        eventInputs,
        setEventInput
    ])




    return {
        handleCreateEvent,
        disabled,
        setEventInput,
        eventInputs,
        toastMessage,
        errors,
        changeImage,
        loading,
        mapped,
        setMap,
        payChanged,
        selectMultiImages
    }
}

export default useCreateEventRequest