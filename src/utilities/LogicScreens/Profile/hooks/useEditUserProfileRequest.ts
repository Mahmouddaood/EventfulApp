import { useCallback, useEffect, useMemo, useContext } from 'react'
import { Platform } from 'react-native'
import useInput from '../../../infastructure/Hooks/useInput'
import Profile from '../../../infastructure/apis/Profile'
import { validateEmail, validatePhone } from '../../../infastructure/validator'
import { UserProfile, EditingDataProps, CData, RegionData, InterestProps } from '../interfaces/index.interface'
import ImagePicker from 'react-native-image-picker'
import usePrevious from '../../../infastructure/Hooks/usePrevious'
import MainContext from '../../../Context/context'

import {
    options,
    optionsAr
} from '../constants'


const {
    editUserProfile,
    getCities,
    getCountries,
    getRegions,
} = Profile

const useEditUserProfileRequest = (userProfileData: UserProfile, isRtl: boolean, api_token: string) => {
    const { state, setContext } = useContext(MainContext)
    const { profileEdited } = useMemo(() => state, [state])
    const {
        // city,
        // country,
        // region,
        photo_url,
        name,
        id,
        ...editingData
    } = userProfileData
    const [userData, setUserData] = useInput<EditingDataProps>(editingData)
    const [disabled, setDisabled] = useInput(false)
    const [toastMsg, setMsg] = useInput("")
    const [loading, setLoading] = useInput<boolean>(false)
    // const [form] = useInput<any>(new FormData())
    const [countries, setCountries] = useInput<CData[]>([])
    const [cities, setCities] = useInput<CData[]>([])
    const [regions, setRegions] = useInput<RegionData[]>([])
    const [interestsArr, setInterests] = useInput<InterestProps[]>(editingData.interests)

    const {
        logo,
        interests,
        email,
        mobile,
        social_links,
        city_id,
        country_id,
        region_id,
        first_name,
        last_name
    } = useMemo(() => userData, [userData])
    const prevRegion = usePrevious(region_id)
    const regionChanged = prevRegion !== region_id
    const prevCountry = usePrevious(country_id)
    const countryChanged = prevCountry !== country_id
    const prevCity = usePrevious(city_id)
    const cityChanged = prevCity !== city_id

    const init = useCallback(async () => {
        setCountries(await getCountries())
        setCities(await getCities(region_id))
        setRegions(await getRegions(country_id))
    }, [
        setCities,
        setCountries,
        setRegions
    ])
    useEffect(() => {
        init()
    }, [
        regionChanged,
        countryChanged
    ])


    const handleEditProfile = useCallback(async () => {
        const form: FormData = new FormData()
        if (typeof logo !== "string") {
            form.append("logo", logo);
        }
        // Object.keys(userData).forEach((value : string , idx:number , a) => 
        //     form.append(value , userData?.[value])
        // )
        form.append("first_name", first_name);
        form.append("last_name", last_name);
        form.append("mobile", userData.mobile);
        form.append("region_id", region_id);
        form.append("interests", JSON.stringify(interests.map((item: InterestProps) => item.id)));
        form.append("email", email);
        form.append("country_id", country_id);
        form.append("city_id", city_id);
        form.append("facebook", social_links.facebook);
        form.append("instagram", social_links.instagram);
        form.append("twitter", social_links.twitter);
        form.append("whatsapp", social_links.whatsapp);
        form.append("website", social_links.website)
        form.append("youtube", social_links.youtube)
        form.append("tiktok", social_links.tiktok)
        // form.append("city", userData.city);
        // form.append("country", userData.country);
        // form.append("region", userData.region)
        console.log("lo", form)
        const isEmailValidated = validateEmail(email)
        const isMobileValidated = validatePhone(mobile)
        if (!isEmailValidated) {
            setDisabled(false)
            setMsg("Please enter valid email")
        }
        if (!isMobileValidated) {
            setDisabled(false)
            setMsg("Please enter vali mobile")
        }
        if (!userData.country_id) {
            setDisabled(false)
            setMsg("Must to select country")
        }
        if (!userData.region_id) {
            setDisabled(false)
            setMsg("Must to select region")
        }
        if (!userData.city_id) {
            setDisabled(false)
            setMsg("Must to select city")
        }
        const response = await editUserProfile(form, api_token)
        console.log("Response =>", response)
        // if (response.success === "true") {
        setDisabled(false)
        setMsg("Profile Edited")
        setContext({
            ...state,
            profileEdited: !profileEdited
        })
        setTimeout(() => {
            setMsg("")
        }, 3000);
        // } else
        if (response.success === "fasle") {
            setDisabled(false)
            setMsg("The logo must be a file of type: jpeg, jpg, png, svg")
            setTimeout(() => {
                setMsg("")
            }, 3000);
            // } else {
            //     console.log("no response")
            //     setDisabled(false)
            //     setMsg("Please enter valid email and password")
        }
    }, [
        email,
        mobile,
        setDisabled,
        setMsg,
        userData,
        api_token,
        // cityChanged,
        // countryChanged,
        // regionChanged,
        setUserData,
        // form
    ])

    const changeImage = useCallback(async () => {
        ImagePicker.showImagePicker(isRtl ? optionsAr : options, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                const source = { uri: response.uri };
                console.log("source =>", source)

                // setLoading(true)
                // form.append('logo', 
                setUserData({
                    ...userData,
                    logo: {
                        uri: response.uri,
                        type: response.type,
                        name: response.fileName,
                    }

                })


                // setLoading(false)

                // console.log("form", form)
                console.log(" logo", userData.logo)
                // setImage({s
                //     uri: response.uri,
                //     type: response.type ? response.type : 'image/jpeg',
                //     name: 'userImage',
                // })


                // form.append('api_token', api_token)
                // const res = uploadUserImage(form).then(() => setLoading(false))
                // console.log("resImage =>", res)
            }
        });
    }, [
        setUserData,
        isRtl,
        // userData.logo,
        // setLoading,
        userData,

    ])

    // const onSubmit = useCallback(async () => {
    //     setLoading(true)
    //     let formData = new FormData();
    //     formData.append('api_token', id)
    //     if (image) {
    //         setLoading(false)
    //         formData.append('photo', image)
    //         const response = uploadUserImage(image)
    //         console.log("resImage =>", response)
    //     } else {
    //         setLoading(false)
    //     }
    // }, [
    //     setLoading,
    //     image,
    //     id
    // ])



    return {
        toastMsg,
        setDisabled,
        disabled,
        setMsg,
        userData,
        setUserData,
        handleEditProfile,
        // onSubmit,
        changeImage,
        loading,
        cities,
        countries,
        regions,
        interestsArr
    }


}
export default useEditUserProfileRequest