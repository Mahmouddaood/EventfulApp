import React from 'react'
import {
    View,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    Alert,
    PermissionsAndroid
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import InputScrollView from 'react-native-input-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker';
import { radioData, InputCreateViewProps } from '../index.interface'
import styles from '../styles'
import Map from './MapView'
import Icon from '../../../components/Icon'
import TextComp from '../../../components/Text'
import colors from '../../../utilities/colors'
import PlusIcon from '../../../components/PlusIcon'
import Input from '../../../components/Input'
import DatePicker from '../../../components/DataPicer'
import Select from '../../../components/Select'
import RadioButton from '../../../components/RadioButton'
import ImageUploader from '../../../components/ImageUploader'
import Avatar from '../../../components/Avatar'
import registeredStyles from '../../../utilities/registeredStyles'
import ButtonComp from '../../../Screens/Auth/SignUpScreen/ButtonComp'
import MainContext from '../../../utilities/Context/context'
import LocationMapIcon from '../../../components/LocationMapIcon'
import {
    options,
    optionsAr
} from '../../../utilities/LogicScreens/Profile/constants'
import DateStyles from "../../../components/DataPicer/styles";
import ClockIcon from "../../../components/ClockIcon";
import useFetchCities from '../../../utilities/LogicScreens/Profile/hooks/useFetchCities'
import useFetchCategoryRequest from '../../../utilities/LogicScreens/CreateEvent/hooks/useFetchCategoryRequest'
import useEditEventRequest from '../../../utilities/LogicScreens/EditEvent/hooks/useEditEventRequest'
import { CategoryProps, TagsProps } from '../../../utilities/LogicScreens/CreateEvent/interfaces/index.interface'
import { isObjHasData, isArrayHasData } from '../../../utilities/infastructure/validator/isThereData'
import { IMAGE_BASE_URL } from '../../../utilities/infastructure/config'
import usePrevious from '../../../utilities/infastructure/Hooks/usePrevious'
import { CData } from '../../../utilities/LogicScreens/Profile/interfaces/index.interface';
const LocImg = require("../../../assests/eventfulAssests/images/LocImg.png")
const DateCalendarImg = require('../../../assests/eventfulAssests/images/DateCalendar.png')

const {
    horizontalCenteredFlex,
    verticalCenteredFlex,
    selfCentered,
    fullWidth,
    shadow,
    rowStyle,
    spaceBetweenItems,
    fullHeight,
    rtlRowStyle,
    flexStyle
} = registeredStyles
const {
    memo,
    Fragment,
    useContext,
    useMemo,
    useRef,
    useCallback
} = React


const InputCreateView: React.FC<InputCreateViewProps> = ({
    eventData,
    eventApi,
    navigation
}): JSX.Element => {

    const { state: { token, lang, langType } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const commonProps = {
        isRTL: isRtl,
        color: colors.lightPlacehold
    }
    const eventDataFound = isObjHasData(eventData)


    const commonInputProps = {
        ...commonProps,
        inputStyle: [
            fullWidth,
            styles.inputStyle
        ]
    }
    const commonSelectProps = {
        ...commonProps,
        selectStyle: [
            fullWidth,
            styles.selectStyle,
            selfCentered
        ]
    }

    const {
        handleChangeEvent,
        // setDisabled,
        // changeImage,
        disabled,
        setEventInput,
        eventInputs,
        formError,
        toastMessage,
        payChanged,
        setMap,
        mapped,
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
        color,
        tags,
        setTags
    } = useEditEventRequest(
        navigation.navigate,
        token,
        isRtl,
        eventApi,
        eventDataFound ? eventData : {}
    )
    const {
        name,
        img,
        description,
        address,
        attendees_no,
        // category_ids,
        event_date_from,
        event_date_to,
        event_from_time,
        event_to_time,
        imgs,
        lat,
        lng,
        longitude,
        // payment_type,
        subscription_cost,
        youtube_url,
        event_subscription
    } = useMemo(() => eventInputs, [eventInputs])

    const {
        data: categories,
        loading,
    } = useFetchCategoryRequest()
    const {
        data: cities,
        loading: loadCity
    } = useFetchCities()
    const prevLoc = usePrevious(lat)
    const locChanged = prevLoc !== lat





    const selectedCats = useMemo(() => isArrayHasData(category_ids) ?
        category_ids.map((item: CategoryProps | string) => {
            return categories.find((cat: CategoryProps) => (typeof item === "string" ? item : item.id.toString()) === cat.id.toString())
            //     if (item === cat.id.toString()) {
            //         console.log("Cat", cat)
            //         return cat
            //     } else {
            //         return
            //     }
            // })
        })
        : lang.Categories
        , [
            category_ids,
            categories
        ])
    // const 


    console.log("eve", eventInputs)
    console.log("selCat", selectedCats)
    console.log("tags =>", tags)

    // console.log("category_ids", eventInputs.imgs)
    const onChangeInputFields = useCallback((fieldName: string) => (e: string) => setEventInput({
        ...eventInputs,
        [fieldName]: e
    }), [
        setEventInput,
        eventInputs
    ])

    const PaidView = useMemo(() =>
        event_subscription === "paid" &&
        <Fragment>
            <RadioButton
                selected={payment_type}
                onChange={(item: string) => { console.log("paymn", item); setPay(item) }}
                multiRadio
            />
            <Input
                placeholder={lang.SubscriptionCost}
                {...commonInputProps}
                value={subscription_cost && subscription_cost.toString()}
                onChange={onChangeInputFields("subscription_cost")}
                err={subscription_cost === "" && formError["subscription_cost"] && formError["subscription_cost"]}
            />
        </Fragment>
        , [
            onChangeInputFields,
            event_subscription,
            formError,
            // eventInputs,
            // isRtl,
            // setEventInput,
            subscription_cost,
            commonInputProps,
            payment_type
        ])
    const handleChangeLocation = useCallback((latitude: string, longitude: string) => {
        console.log("lat laon", latitude, longitude)
        setEventInput({
            ...eventInputs,
            lat: latitude,
            lng: longitude
        })
    }, [
        eventInputs,
        setEventInput
    ])
    const onTagDelete = useCallback((item: TagsProps | any) => {
        setTags(
            tags.filter((i: TagsProps | any) => typeof i === "string" ? (item.id.toString() !== i) : (i.id !== item.id)),
            // imgs: eventInputs.imgs,
            // lat: eventInputs.lat,
            // lng: eventInputs.lng,
        )
    }, [
        setTags,
        tags,
    ])
    const handleChangeSelect = useCallback((stateName: string, multiSelect?: boolean) => (item: string | any) => {
        let interestState: CategoryProps[] | any = []
        if (stateName === "event_subscription" && item === "paid") {
            console.log("yes here")
            setEventInput({
                ...eventInputs,
                [stateName]: item,
            })
            setPay(["online", "offline"])
        } else if (stateName === "category_ids") {
            setCategory(item)
        }
        else if (stateName === "tags") {
            const foundedItem: TagsProps | any = tags.find((i: TagsProps) => item.id === i.id)
            //     console.log("item =>", item)
            console.log("founded", foundedItem)
            interestState = foundedItem === undefined ?
                [...tags, item]
                : tags

            console.log("item", item)
            setTags(
                interestState
            )
        }

        // if (stateName === "category_ids") {
        //     const foundedItem: CategoryProps | any = category_ids.find((i: CategoryProps) => item.id === i.id)
        //     console.log("item =>", item)
        //     console.log("founded", foundedItem)
        //     interestState = foundedItem === undefined ?
        //         [...category_ids, item]
        //         : category_ids
        //     setCategory(interestState)
        // }
        else {
            setEventInput({
                ...eventInputs,
                [stateName]: (stateName === "city_id") ? item.id : item,
            })
        }

    }, [
        eventInputs,
        setEventInput,
        setCategory,
        category_ids,
        setPay,
        setTags,
        tags
    ])
    const changeImage = useCallback(async (stateName: string) => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Dentist Pluss AccessPhoto Permission',
                    message:
                        'App needs access to your photo ' +
                        'so you can upload photo.',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
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
                            img: source
                            // stateName === "imgs" ? [...eventInputs.imgs, source] : source

                        })
                        setLoading(false)
                        // console.log("image", eventInputs.img)
                    }
                });
            }

        } catch (err) {
            Alert.alert(err);
        }
    }, [
        eventInputs,
        isRtl,
        setLoading,
        setEventInput

    ])


    const handleOpenDateModal = useCallback((range: string, mode: string, stateName?: string) => () => {
        setMode(mode)
        setDateModal(range)
    }, [
        setDateModal,
        setMode
        // isDatePickerVisible
    ])
    console.log("eventInputs", eventInputs)
    console.log("catego", category_ids)
    console.log("pay", tags)

    const DateModalRef = useRef(null) as any;

    const onDateChange: any = useCallback((stateName: string) => (event: any, selectedDate: Date) => {
        setEventInput({
            ...eventInputs,
            [stateName]: mode === "datetime" ? `${selectedDate.getDate().toString()}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear().toString()}` :
                `${selectedDate.getHours()}:${selectedDate.getMinutes()}:${selectedDate.getSeconds()}`
        })
        setDateModal("")
    }, [
        setEventInput,
        mode,
        eventInputs,
        setDateModal,
        // isDatePickerVisible
    ])
    const DateModalView = useMemo(() =>
        isDatePickerVisible !== "" ? <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={new Date()}
            mode={mode}
            ref={DateModalRef}
            onChange={onDateChange(isDatePickerVisible === "from" ?
                "event_from_time" : isDatePickerVisible === "to" ? "event_to_time" :
                    isDatePickerVisible === "dateFrom" ? "event_date_from" :
                        "event_date_to")}
        /> : <Fragment />
        , [
            // onDateChange,
            isDatePickerVisible,
            // mode
        ])
    let selectTagProps = useMemo(() => {
        return {
            selecteditems: isArrayHasData(tags) && tags
        }
    }, [tags])
    console.log("city=>", cities.find((city: CData) => city.id === eventInputs.city_id)?.name)
    console.log("att => ", attendees_no, youtube_url)
    return (
        <Fragment>
            {/* <KeyboardAwareScrollView> */}
            <ImageUploader
                onChange={() => changeImage("img")}
                AnthorView={
                    ({ onChange }) =>
                        <Fragment>
                            <TouchableOpacity style={[
                                styles.dragStyle,
                                shadow,
                                verticalCenteredFlex,
                                horizontalCenteredFlex,
                                selfCentered,
                            ]}
                                onPress={() => changeImage("img")}
                            >
                                {img ?
                                    <Image source={{ uri: typeof img === "string" ? IMAGE_BASE_URL + img : img.uri }}
                                        //     uri: IMAGE_BASE_URL + img,
                                        // }
                                        //     :
                                        //     { uri: img.uri }}
                                        style={[
                                            fullWidth,
                                            fullHeight,
                                            { borderRadius: 20, resizeMode: "stretch" }
                                        ]} />
                                    :

                                    <Fragment>
                                        <Icon
                                            onPress={() => changeImage("img")}
                                            children={<PlusIcon
                                                width={60}
                                                height={210}
                                                iconStyle={{ top: -120 }}
                                            />

                                            }
                                        />
                                        <TextComp
                                            children={lang.AddImage}
                                            // "add Event photo" 
                                            color={colors.darkPlaceHolder}
                                            fontSize={14}
                                        />
                                    </Fragment>
                                }
                            </TouchableOpacity>
                            <TextComp
                                children={img === "" && formError["img"] || ""}
                                color={"red"}
                                fontSize={18}
                                center
                                textStyle={{
                                    magrinBottom: 6,
                                    bottom: 335

                                }} />
                        </Fragment>

                }
            />
            {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={flexStyle}>
                <KeyboardAvoidingView
                    behavior="padding"
                    enabled
                    style={[flexStyle, verticalCenteredFlex, horizontalCenteredFlex]}> */}
            <View style={[
                styles.ViewInputStyle,
                selfCentered,
            ]}>
                <InputScrollView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={flexStyle}>
                        <KeyboardAvoidingView
                            enabled
                            style={flexStyle}>
                            <Input
                                multi={true}
                                placeholder={lang.EventTitle}
                                {...commonInputProps}
                                value={name && name}
                                onChange={onChangeInputFields("name")}
                                err={name === "" && formError["name"] && formError["name"]}
                            />
                            <Input
                                multi={true}
                                isRTL={isRtl}
                                placeholder={lang.EventDescription}
                                value={description}
                                inputStyle={[
                                    fullWidth,
                                    styles.textAreaStyle
                                ]}
                                onChange={onChangeInputFields("description")}
                                err={description === "" && formError["description"] && formError["description"]}
                            />

                            <Input
                                multi={true}

                                placeholder={lang.HostedBy}
                                {...commonInputProps}
                                value={address && address}
                                onChange={onChangeInputFields("address")}
                                err={address === "" && formError["address"] && formError["address"]}
                            />

                            <View style={[
                                styles.locationViewStyle,
                                rowStyle,
                                spaceBetweenItems,
                                horizontalCenteredFlex,
                            ]}>
                                <TextComp children={lang.Location} color={colors.black} textStyle={{ fontWeight: "bold" }} />
                                <TouchableOpacity onPress={() => navigation.navigate("Map", {
                                    onChangeLoc: handleChangeLocation,
                                    longitude: lng,
                                    latitude: lat,
                                    name: name,
                                    img: img
                                })}>
                                    <Icon children={<LocationMapIcon onPress={() => navigation.navigate("Map", {
                                        onChangeLoc: handleChangeLocation,
                                        longitude: lng,
                                        latitude: lat,
                                        name: name,
                                        img: img
                                    })} width={16} height={19} iconStyle={{
                                        left: 6
                                    }} />} />
                                    {/* <Avatar source={LocImg} imageStyle={styles.locImgStyle} /> */}
                                </TouchableOpacity>
                            </View>
                            <TextComp
                                children={lat === undefined ? formError["lat"] : locChanged && lang.LocChoosen}
                                color={"red"}
                                fontSize={18}
                                center
                                textStyle={{
                                    bottom: 5
                                }} />

                            <View style={[
                                styles.locationViewStyle,
                                rowStyle,
                                spaceBetweenItems,
                                horizontalCenteredFlex,
                            ]}>
                                <TextComp children={lang.AddImages} color={colors.black} textStyle={{ fontWeight: "bold" }} />
                                <Icon
                                    children={<PlusIcon
                                        width={120}
                                        height={140}
                                        iconStyle={styles.plusStyle}
                                        onPress={() => selectMultiImages()}
                                    />}
                                />
                            </View>
                            {eventInputs.imgs.length ? <View style={[fullWidth, rowStyle]}>
                                <ScrollView horizontal >
                                    {eventInputs.imgs.map((image: any, idx: number) => {
                                        return <Avatar
                                            key={idx}
                                            source={{ uri: image.uri }}
                                            imageStyle={styles.multiImageStyle}
                                        />
                                    }
                                    )}
                                </ScrollView>
                            </View> :
                                <TextComp
                                    children={!eventInputs.imgs.length && formError["imgs"]}
                                    color={"red"}
                                    fontSize={18}
                                    center
                                    textStyle={{
                                        marginBottom: 10
                                    }}
                                />
                            }


                            <Select
                                // multiSelect={true}
                                {...commonSelectProps}

                                selecteditems={
                                    selectedCats
                                }

                                // selecteditems={isArrayHasData(category_ids) ?
                                //     categories.map((cat: CategoryProps) => {
                                //         return category_ids.find((item: string) => item === cat.id.toString())
                                //     })
                                //     : category_ids}
                                items={categories}
                                onChangeSelected={handleChangeSelect("category_ids")}
                                err={formError["category_ids"] && formError["category_ids"]}
                                // onUpcomindDeleteItem={onCategoryDelete}
                                isRtl={isRtl}

                            />
                            <Select
                                isRtl={isRtl}
                                multiSelect={true}
                                {...commonSelectProps}
                                tagAdded={true}
                                selecteditems={tags.length > 0 ? tags : lang.Tags}
                                onAddTag={(item) => setTags([...tags, { title_en: item, title_ar: item }])}
                                //     categories.map((cat: CategoryProps) => {
                                //         return category_ids.find((item: string) => item === cat.id.toString())
                                //     })
                                //     : category_ids}
                                items={
                                    typeof category_ids[0] === "string" ? categories.find((cat: CategoryProps) => cat.id.toString() === category_ids[0])?.tags :
                                        category_ids.tags}
                                onChangeSelected={handleChangeSelect("tags")}
                                // err={formError["category_ids"] && formError["category_ids"]}
                                onUpcomindDeleteItem={onTagDelete}

                            />
                            <Select
                                isRtl={isRtl}
                                items={cities}
                                selecteditems={
                                    eventInputs.city_id ?
                                        cities.find((city: CData) => city.id === eventInputs.city_id)?.name :
                                        lang.Cities}
                                {...commonSelectProps}
                                onChangeSelected={handleChangeSelect("city_id")}
                                err={eventInputs.city_id === "" && formError["city_id"] && formError["city_id"]}
                            />
                            <Input
                                multi={true}

                                placeholder={lang.Youtube}
                                {...commonInputProps}
                                value={youtube_url && youtube_url}
                                onChange={onChangeInputFields("youtube_url")}
                            // err={youtube_url === "" && formError["youtube_url"] && formError["youtube_url"]}
                            />
                            {/* <DatePicker
                    dateFT={lang.DateFrom}
                    isRtl={isRtl}
                    onDateChanged={(item: string) => setEventInput({
                        ...eventInputs,
                        event_date_from: item
                    })}
                    selected={event_date_from && event_date_from}
                    err={event_date_from === "" && formError["event_date_from"]}
                />
                <DatePicker
                    dateFT={lang.DateTo}
                    isRtl={isRtl}
                    onDateChanged={(item: string) => setEventInput({
                        ...eventInputs,
                        event_date_to: item
                    })}
                    selected={event_date_to && event_date_to}
                    err={event_date_to === "" && formError["event_date_to"]}

                /> */}
                            <View style={{
                                // width: "95%",
                                minHeight: 120,
                                justifyContent: "space-between",
                                marginBottom: 15
                            }}>
                                {[0, 1].map((idx: number) =>
                                    <Fragment>
                                        <TouchableOpacity
                                            key={idx}
                                            style={[
                                                DateStyles.dateInputStyle,
                                                rowStyle,
                                                horizontalCenteredFlex,
                                                spaceBetweenItems,
                                                shadow,
                                                isRtl && rtlRowStyle,
                                            ]}
                                            onPress={handleOpenDateModal(!idx ? "dateFrom" : "dateTo", "datetime")}
                                        >
                                            <TextComp children={
                                                (!idx && event_date_from !== "") ? event_date_from : (idx && event_date_to !== "") ? event_date_to
                                                    : !idx ? lang.DateFrom : lang.DateTo}
                                                fontSize={14} color={colors.black} textStyle={{ fontWeight: "bold" }} />
                                            <Avatar source={DateCalendarImg} imageStyle={[DateStyles.imageStyle]} />
                                        </TouchableOpacity>
                                        <TextComp
                                            children={
                                                !idx ? (event_date_from === "" && formError["event_date_from"]) :
                                                    (event_date_to === "" && formError["event_date_to"])
                                            }
                                            color={"red"}
                                            fontSize={18}
                                            center
                                            textStyle={{
                                                margin: 5,

                                            }}
                                        />
                                    </Fragment>
                                )}
                            </View>
                            {/* <Input
                    placeholder={lang.EventFromTime}
                    {...commonInputProps}
                    value={event_from_time && event_from_time}
                    onChange={onChangeInputFields("event_from_time")}
                    err={event_from_time === "" && formError["event_from_time"] && formError["event_from_time"]}
                /> */}


                            {/* <Input
                    placeholder={lang.EventDataTo}
                    {...commonInputProps}
                    value={event_to_time && event_to_time}
                    onChange={onChangeInputFields("event_to_time")}
                    err={event_to_time === "" && formError["event_to_time"] && formError["event_to_time"]}
                /> */}
                            <Input
                                multi={true}
                                placeholder={lang.SeatsCount}
                                {...commonInputProps}
                                value={attendees_no && attendees_no.toString()}
                                onChange={onChangeInputFields("attendees_no")}
                                err={attendees_no === "" && formError["attendees_no"] && formError["attendees_no"]}
                            />
                            <Select
                                isRtl={isRtl}
                                multiSelect={false}
                                selecteditems={eventInputs.event_subscription ? event_subscription : lang.EventSubscription}
                                items={radioData}
                                {...commonSelectProps}
                                onChangeSelected={handleChangeSelect("event_subscription")}
                                err={event_subscription === "" && formError["event_subscription"] && formError["event_subscription"]}
                            />
                            {PaidView}

                            <View style={[
                                styles.locationViewStyle,
                                rowStyle,
                                spaceBetweenItems,
                                horizontalCenteredFlex,
                            ]}>
                                <TextComp children={lang.EventFromTime} color={colors.black} textStyle={{ fontWeight: "bold" }} />

                                {event_from_time === "" ? <Icon children={<ClockIcon />}
                                    onPress={handleOpenDateModal("from", "time")}
                                    containerStyle={{ marginEnd: 15 }} />
                                    : <TouchableOpacity onPress={handleOpenDateModal("to", "time")}>
                                        <TextComp children={event_from_time} color={colors.placeholder} />
                                    </TouchableOpacity>
                                }

                            </View>

                            <View style={[
                                styles.locationViewStyle,
                                rowStyle,
                                spaceBetweenItems,
                                horizontalCenteredFlex,
                            ]}>
                                <TextComp children={lang.EventDataTo} color={colors.black} textStyle={{ fontWeight: "bold" }} />
                                {event_to_time === "" ? <Icon children={<ClockIcon />}
                                    onPress={handleOpenDateModal("to", "time")}
                                    containerStyle={{ marginEnd: 15 }} />
                                    : <TouchableOpacity onPress={handleOpenDateModal("to", "time")}><TextComp children={event_to_time} color={colors.placeholder} /></TouchableOpacity>
                                }
                            </View>

                            {DateModalView}

                            {/* <View style={[fullWidth, styles.SelectTxtViewStyle]}>
                    <TextComp
                        children={lang.ChooseCategory}
                        //    "Choose your event category to help people  find you"
                        fontSize={16}
                        color={colors.placeholder}
                        textStyle={styles.catStyle}
                    />
                    <Select
                        multiSelect={false}
                        items={hobbies}
                        selectStyle={[
                            fullWidth,
                            styles.selectStyle,
                            selfCentered
                        ]}
                        onChangeSelected={handleChangeSelect("eventCategory")}
                    />
                </View> */}
                            {/* <View style={[fullWidth, styles.SelectTxtViewStyle]}>
                    <TextComp
                        children={lang.remindeAttendane}
                        //    "When do you want to send a reminder to your 
                        //    attendees?"
                        fontSize={16}
                        color={colors.placeholder}
                        textStyle={styles.catStyle}
                    />
                    <Select
                        multiSelect={false}
                        items={timeBeforeEvent}
                        selectStyle={[
                            fullWidth,
                            styles.selectStyle,
                            selfCentered
                        ]}
                        onChangeSelected={handleChangeSelect("attendanceReminderTime")}
                    />
                </View> */}


                            <ButtonComp
                                title={lang.Save}
                                style={[
                                    selfCentered,
                                    fullWidth,
                                    styles.buttonStyle
                                ]}
                                onPress={() => handleChangeEvent(eventInputs)}
                                disabled={disabled}
                            />
                            <TextComp
                                children={toastMessage}
                                color={Object.keys(formError).length > 3 ? "red" : color}
                                fontSize={18}
                                center

                            />
                        </KeyboardAvoidingView>
                    </TouchableWithoutFeedback>
                </InputScrollView>
            </View>



            {/* </KeyboardAwareScrollView> */}
        </Fragment>
        // : <Map
        // // longitude={longitude}
        // // latitude={latitude}
        // // onChangeLoc={handleChangeLocation}
        // // setMap={setMap}
        // />

    );
}

export default memo(InputCreateView)