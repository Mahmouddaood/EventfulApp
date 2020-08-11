import React from 'react'
import {
    View,
    ScrollView,
    TouchableOpacity,
    Modal,
    Easing,
    Animated,
    Image,
    ImageBackground,
} from 'react-native'
import Share from 'react-native-share';
import ImageViewer from 'react-native-image-zoom-viewer';
import ImgToBase64 from 'react-native-image-base64';
import styles from './styles'
import EventInfoProps, { eventDetailData } from './index.interface'
import ModalView from './partials/ModalView'
import EventImgView from '../EventInfo/partials/EventImgView'
import EventInformation from '../EventInfo/partials/EventInformation'
// import { eventImages } from '../MainProfile/partials/Events/index.interface'
import TicketIcon from '../../components/TicketIcon'
import Avatar from '../../components/Avatar'
import TimeIcon from '../../components/TimeIcon'
import Button from '../../components/Button'
import ViewItem from '../../components/ViewItem'
import TextComp from '../../components/Text'
import registeredStyles from '../../utilities/registeredStyles'
import colors from '../../utilities/colors'
import useAddReviewRequest from '../../utilities/LogicScreens/EventDetail/hooks/useAddReviewRequest'
import useFetchSingleEventDetailRequest from '../../utilities/LogicScreens/EventDetail/hooks/useFetchSingleEventDetailRequest'
import MainContext from '../../utilities/Context/context'
import useJoinEventRequest from '../../utilities/LogicScreens/EventDetail/hooks/useJoinEventRequest'
import { ReviewItem } from '../../utilities/LogicScreens/EventDetail/interfaces/index.interface'
import NoDataPlaceHolder from '../../components/NoDataPlaceHolder'
import Icon from '../../components/Icon'
import { isArrayHasData } from '../../utilities/infastructure/validator/isThereData'
import CallIcon from '../../components/CallIcon'
import LocationMapIcon from '../../components/LocationMapIcon'
import ImageModal from './partials/ImageModal'
import {
    firstCondition, secondCondition, thirdCondition
} from './partials/constants'
const PushNotification = require('react-native-push-notification')

import BottomUnionIcon from '../../components/BottomUnionIcon';

const ProfileImg = require('../../assests/eventfulAssests/images/ProfileImg.png')
const {
    memo,
    useMemo,
    Fragment,
    useCallback,
    useContext,
    useState,
    useEffect
} = React
const {
    fullWidth,
    flexStyle,
    rowStyle,
    selfCentered,
    verticalCenteredFlex,
    horizontalCenteredFlex,
    rtlRowStyle,
    flexEndStyle,
    selfEnd,
    flexStartStyle,
    selfStart
} = registeredStyles
const EventDetail: React.FC<EventInfoProps> = ({
    navigation,
    eventDetailData,
}): JSX.Element => {
    const { goBack, navigate, getParam } = useMemo(() => navigation, [navigation])
    const { id } = useMemo(() => getParam("data"), [getParam])
    const [descModal, setDescModal] = useState<boolean>(false)
    const [imageModal, setImageModal] = useState<boolean>(false)
    const { state } = useContext(MainContext)
    const {
        token,
        lang,
        langType,
        name,
        mobile,
        email
    } = useMemo(() => state, [state])
    const isRtl = useMemo(() => langType === "ar", [langType])
    const {
        data,
        loading
    } = useFetchSingleEventDetailRequest(id, token, isRtl ? "ar" : "en")
    const [shareAnimated] = useState<any>(new Animated.Value(0))
    const [showAnimated, setShow] = useState<boolean>(false)
    const changeShare = useCallback(() => {
        setShow(!showAnimated)
        Animated.timing(shareAnimated, {
            toValue: 1,
            duration: 1000,
            easing: Easing.exp
        }).start()
    }, [
        shareAnimated,
        showAnimated
    ])
    const {
        handleAddReview,
        modalVisible,
        setVisible
    } = useAddReviewRequest(token, id)
    console.log("id =>", id, "desc =>", data)
    const {
        subEventDetail,
        eventDetail,
        ticket,
        date,
        location,
        followers,
        eventsImages,
        reviews,
        ...eventInfo
    } = eventDetailData

    const {
        id: event_id,
        img,
        address,
        attendees_no,
        description: eventDesc,
        event_subscription,
        formatted_date_time,
        formatted_time,
        images_urls,
        owner_bio_ar,
        owner_bio_en,
        owner_logo,
        owner_mobile,
        youtube_url,
        attendees_no_reserved,
        ticket_price,
        img_url,
        owner_name,
        owner_id,
        even_rates,
        rates,
        formatted_date,
        payment_type,
        subscription_cost
    } = data || {}
    const {
        handleJoinEvent,
        setMsg,
        toastMsg
    } = useJoinEventRequest(token, navigation.navigate)
    console.log("share", data)
    // console.log("email =>", data.rates)
    const navigateBack = useCallback(() => goBack(), [goBack])
    const navigateContact = useCallback(() => navigate("EventInfo", { eventDetail: data }), [navigate, data])
    const navigateProfilEvent = useCallback(() => navigate("ProfileEvents", {
        profileItemId: owner_id
    }), [navigate, owner_name, owner_logo, owner_bio_ar, owner_bio_en])
    const handlePressReview = useCallback(() =>
        // navigate("EventInfo", {
        //     briefEventData: eventInfo
        // })
        setVisible(true)
        , [
            // navigate,
            // eventInfo,
            modalVisible,
            setVisible
        ])
    useEffect(() => {
        PushNotification.configure({
            onNotification: async (notification: any) => {
                navigation.navigate("Notification")
            },
            smallIcon: "eventful",
            largeIcon: "eventful"
        })
    }, [navigation])

    const handlePressPofile = useCallback(() => navigate("MainProfile"), [navigate])
    const handlePressContact = useCallback(() => navigate("Contact"), [navigate])
    const joinEvent = useCallback(() => {
        // if (event_subscription === "paid" || "مدفوع") {
        //     console.log("a7a")
        //     handleJoinEvent(
        //         id,
        //         name,
        //         mobile,
        //         email
        //     )
        // }
        handleJoinEvent
    }, [
        email,
        event_subscription,
        id,
        mobile,
        name,
        handleJoinEvent,
        navigate,
        payment_type,
        setMsg
    ])
    const onSharing = useCallback(() => {
        ImgToBase64.getBase64String(img_url)
            .then((base64String: any) => {
                console.log("basc64-> ", base64String)
                // const url = `file://http://eventful.sa/public/uploads/15911347745ed6ca36ad141.jpg`;
                const title = 'Awesome Event';
                const message = `Please check this out.  
    this event is awesome 
    will start soon
    This event is about ${eventDesc && eventDesc.replace(/<\/?[^>]+(>|$)/g, "")}
     creator of this event is ${owner_name} 
    and this event will be at ${address}
         from ${formatted_date_time} 
         and attendace number will be ${attendees_no}
                you can join ${payment_type}

        and Link is here 
                    ${'AppLink: http://www.eventful.sa/event/' + id}
        
    `;
                const options = {
                    title,
                    message: `${message}`,
                    url: `data:image/png;base64,${base64String}`,


                }
                Share.open(options);

            })
            .catch((err: any) => console.log("e =>", err));


    }, [
        event_id
    ])
    const [imageAnimated] = useState(new Animated.Value(0))
    const [showImageScroll, setImageScroll] = useState(false)
    const ImagePress = useCallback(() => {
        setImageScroll(true)
        Animated.timing(imageAnimated, {
            toValue: 1,
            duration: 4000,
            easing: Easing.ease
        }).start()
    }, [imageAnimated, setImageScroll])
    console.log("eventDesc =>", eventDesc && eventDesc.length)

    const ImageView = useMemo(() => images_urls && images_urls.map((item: string, idx: number) =>
        <View key={idx} style={[rowStyle, fullWidth, selfCentered, styles.imgViewStyle]}>
            <NoDataPlaceHolder loading={loading} containerStyle={[rowStyle, { margin: 5 }]}>
                <TouchableOpacity onPress={ImagePress}>
                    <Avatar source={
                        {
                            uri: images_urls[firstCondition(idx, true)] &&
                                images_urls[firstCondition(idx, true)]
                        }
                    }
                        imageStyle={styles.avatarStyle}
                    // !idx ?
                    //      :
                    //     {
                    //         uri: images_urls[3]
                    //     }}
                    />

                </TouchableOpacity>
                <TouchableOpacity onPress={ImagePress}>

                    <Avatar
                        source={
                            {
                                uri: images_urls[secondCondition(idx, true)]
                                    && images_urls[secondCondition(idx, true)]
                            }
                        }
                        imageStyle={styles.avatarStyle}
                    // source={
                    //     !idx ?
                    //         { uri: images_urls[1] } :
                    //         {
                    //             uri: images_urls[4]
                    //         }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={ImagePress}>


                    <Avatar source={{
                        uri: images_urls[thirdCondition(idx)] &&
                            images_urls[thirdCondition(idx)]
                    }
                    }
                        imageStyle={styles.avatarStyle}
                    // source={
                    //     !idx ?
                    //         { uri: images_urls[2] } :
                    //         {
                    //             uri: images_urls[5]
                    //         }}
                    />
                </TouchableOpacity>
            </NoDataPlaceHolder>
        </View>
    )
        , [
            images_urls,
            loading,
        ])
    console.log("ev", owner_bio_en)
    return (
        <ScrollView
            style={[flexStyle, { marginBottom: -80 }]}
            scrollEnabled
            shouldRasterizeIOS
        >
            <EventImgView
                onLine={event_subscription === "online" || event_subscription === "اون لاين"}
                setImageModal={setImageModal}
                navigation={navigation}
                eventImage={{ uri: img_url }}
                onNavigateBack={navigateBack}
                eventId={id}
                onNavigateProfile={handlePressPofile}
            />
            {imageModal ? <ImageModal
                setImageModal={setImageModal}
                image={{ uri: img_url }}
            />
                : <Fragment />}

            <ScrollView style={styles.scrollStyle} >
                <Fragment>
                    <EventInformation
                        youtube={youtube_url}
                        desc={false}
                        isRtl={isRtl}
                        onPressDetail={navigateProfilEvent}
                        onPressContact={handlePressContact}
                        onPressShare={onSharing}
                        loading={loading}
                        eventName={owner_name}
                        image={owner_logo === "http://eventful.sa/public/uploads" ? ProfileImg : { uri: owner_logo }}
                        key={event_id}
                        eventDescription={
                            isRtl ? owner_bio_ar : owner_bio_en
                        }
                    />
                    <View style={{
                        width: "90%",
                        bottom: 12,
                        flexDirection: isRtl ? "row-reverse" : "row",
                        justifyContent: "flex-start",
                        padding: 4,
                        // margin: 8,
                        alignItems: "flex-end",
                        alignSelf: "center",

                        // backgroundColor: colors.black
                    }}>


                        <TextComp children={isRtl ? "كيف تبدع" : "How to Be Creative"} textStyle={{
                            textAlign: isRtl ? "right" : "left"
                        }} fontSize={26} color={colors.black} />
                    </View>
                    {eventDesc !== null ?

                        !descModal ? <Fragment><View style={[
                            styles.descViewStyle,
                            isRtl ? rtlRowStyle : rowStyle,
                            selfCentered
                        ]}>
                            <TextComp
                                numberOfLines={2}
                                children={
                                    eventDesc && eventDesc.replace(/<\/?[^>]+(>|$)/g, "")
                                }
                                textStyle={{
                                    textAlign: isRtl ? "right" : "left",

                                }}
                                fontSize={14}
                                color={colors.placeholder} />
                        </View>
                            {
                                eventDesc !== undefined && eventDesc.length > 50 && < TouchableOpacity onPress={() => setDescModal(true)} style={{
                                    backgroundColor: colors.mainColor,
                                    width: 67,
                                    height: 35,
                                    borderRadius: 15,
                                    marginLeft: 20,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    bottom: 19
                                }}>
                                    <TextComp children={lang.ReadMore} fontSize={15} />
                                </TouchableOpacity>
                            }
                        </Fragment>
                            : <Modal transparent>
                                <TouchableOpacity onPress={() => setDescModal(false)} style={{
                                    width: "94%",
                                    padding: 15,
                                    elevation: 1,
                                    borderRadius: 20,
                                    alignSelf: "center",
                                    minHeight: 150,
                                    borderWidth: 1,
                                    borderColor: colors.black,
                                    backgroundColor: colors.background,
                                    top: 185

                                }}>
                                    <ScrollView>
                                        <TextComp children={eventDesc.replace(/<\/?[^>]+(>|$)/g, "").replace("&nbsp;", "")} color={colors.placeholder} />
                                    </ScrollView>
                                </TouchableOpacity>
                            </Modal>
                        :
                        <View
                            style={{ marginBottom: 18 }} />
                    }

                    <View style={{ bottom: 25 }}>

                        <View style={[
                            isRtl ? rtlRowStyle : rowStyle,
                            horizontalCenteredFlex,
                            selfCentered,
                            { width: "90%" }
                        ]}>
                            <Icon children={<TicketIcon />} />
                            <View style={[
                                styles.ticketStyle,
                                rowStyle,
                                isRtl ? flexEndStyle : flexStartStyle,
                                {
                                    alignItems: "flex-end"
                                }
                            ]}>
                                <TextComp children={event_subscription} fontSize={14} color={colors.black} />
                            </View>
                        </View>
                        <View style={[
                            isRtl ? rtlRowStyle : rowStyle,
                            horizontalCenteredFlex,
                            selfCentered,
                            { width: "90%" }
                        ]}>
                            <Icon children={<TimeIcon />} />
                            <View style={styles.ticketStyle}>
                                <TextComp
                                    children={`${formatted_date_time} `}
                                    fontSize={14}
                                    textStyle={{
                                        textAlign:
                                            isRtl ? "right" :
                                                "left",
                                    }}
                                    color={colors.black}
                                />
                                <TextComp
                                    children={`${formatted_time} `}
                                    fontSize={14}
                                    textStyle={{
                                        textAlign:
                                            isRtl ?
                                                "right" :
                                                "left",
                                    }}
                                    color={colors.lightPlacehold}
                                />
                            </View>
                        </View>
                        <View style={[
                            isRtl ? rtlRowStyle : rowStyle,
                            horizontalCenteredFlex,
                            selfCentered,
                            { width: "90%", bottom: 8 },
                            isRtl && { left: 2 }
                        ]}>
                            <Icon children={<LocationMapIcon />} />
                            <View style={styles.ticketStyle}>
                                <TextComp children={`${address} `}
                                    fontSize={14}
                                    textStyle={{
                                        textAlign:
                                            isRtl ?
                                                "right" :
                                                "left",
                                    }}
                                    color={colors.black}
                                />
                            </View>
                        </View>
                        <View style={[
                            isRtl ? rtlRowStyle : rowStyle,
                            horizontalCenteredFlex,
                            selfCentered,
                            { width: "90%", bottom: 12 },
                            isRtl && { left: 3 }
                        ]}>
                            <Icon children={<CallIcon />} />
                            <View style={styles.ticketStyle}>
                                <TextComp
                                    children={`${owner_mobile} `}
                                    fontSize={14}
                                    textStyle={{
                                        textAlign:
                                            isRtl ?
                                                "right"
                                                : "left"
                                    }}
                                    color={colors.black} />
                            </View>
                        </View>
                        <View style={[
                            isRtl ? rtlRowStyle : rowStyle,
                            horizontalCenteredFlex,
                            selfCentered,
                            { width: "90%", bottom: 12 },
                            isRtl && { left: 2 }
                        ]}>
                            <Icon children={<BottomUnionIcon width={15} />} />
                            <View style={styles.ticketStyle}>
                                <TextComp
                                    children={`${attendees_no_reserved} `}
                                    fontSize={14}
                                    textStyle={{
                                        textAlign:
                                            isRtl ?
                                                "right"
                                                : "left",
                                    }} color={colors.black} />
                            </View>
                        </View>
                        {/* <HTML html={description} /> */}

                        {/* <View style={{ width: "88%", alignSelf: "center", marginTop: 5, justifyContent: "flex-end" }}>
                            <TextComp textStyle={[styles.subDetailStyle, { textAlign: isRtl ? "right" : "left" }]}
                                fontSize={14}
                                // center
                                numberOfLines={5}
                                color={colors.placeholder}
                                children={
                                    eventDesc ? eventDesc.slice(3, 19) : "Here My Description"
                                }
                            />
                        </View> */}


                        {/* <IconTextView
                            isRtl={isRtl}
                            itemStyle={{ bottom: 5 }}
                            loading={loading}
                            image={PriceImg}
                            imageStyle={!isRtl ?
                                { width: 18, height: 18, alignSelf: "center", left: -22 } :
                                {
                                    left: -15
                                }
                            }
                            firstText={ticket_price}
                        // imageStyle={isRtl && { marginRight: 20 }}

                        /> */}
                    </View>

                    {event_subscription !== "free" ? <Button
                        title={lang.JoinNow}
                        onPress={handleJoinEvent(event_id, subscription_cost, attendees_no)}
                        containerStyle={[styles.joinStyle, selfCentered]}
                    /> :
                        <View style={{
                            marginBottom: -40
                        }} />
                    }
                    <TextComp
                        children={toastMsg}
                        fontSize={17}
                        center
                        color={"green"}
                    />
                    {showImageScroll &&
                        <Modal transparent>
                            <View style={{ height: 350 }}>
                                <Animated.ScrollView horizontal style={{ opacity: imageAnimated }}>
                                    <ImageViewer style={styles.imageViewerStyle}
                                        imageUrls={images_urls
                                            &&
                                            images_urls.map(i => {
                                                return { url: i }
                                            })}
                                    />
                                </Animated.ScrollView>
                                <Button
                                    title={"close"}
                                    onPress={() => setImageScroll(false)}
                                    textStyle={{ fontSize: 12 }}
                                    containerStyle={[styles.closeButStyle, selfCentered]} />
                            </View>
                        </Modal>
                    }
                    {isArrayHasData(images_urls) &&
                        <View style={[selfCentered, {
                            width: "90%",
                            bottom: event_subscription === "free" ? 28 : 8,
                            marginBottom: 12,
                            minHeight: isArrayHasData(images_urls) ? (images_urls.length > 3 ? 300 : 180) : 70
                        }]}>
                            <TextComp
                                children={lang.Photos}
                                // 'Photos'
                                color={colors.black}
                                fontSize={20}
                                textStyle={isRtl ?
                                    { textAlign: "right" }
                                    :
                                    styles.photoTextStyle
                                }
                            />
                            {ImageView}
                            {/*
                              :
                        //     <TextComp
                        //         center
                        //         children={"This is Event has no images yet"}
                        //         fontSize={19} color={colors.mainColor} />
                        // 
                        
                           */}

                        </View>
                    }
                    <ModalView
                        item={data}
                        navigate={navigate}
                        loading={loading}
                        isRtl={isRtl}
                        addRevLang={lang.AddReview}
                        reviewsLang={lang.Comments}
                        commentLang={lang.Reviews}
                        evenRates={even_rates}
                        eventId={id}
                        token={token}
                        rates={rates}
                    />

                </Fragment>
            </ScrollView >
        </ScrollView >
    )
}

export default memo(EventDetail)

EventDetail.defaultProps = {
    eventDetailData: eventDetailData,
}

// const reviewRenderer = useCallback(
//     (item: ReviewItem, idx) =>
//         <Fragment key={idx}>
//             <View style={[styles.reviewDetailStyle, verticalCenteredFlex, selfCentered]}>
//                 <ViewItem
//                     loading={loading}
//                     isRtl={isRtl}
//                     name={item.name}
//                     image={{ uri: item.image }}
//                     avatarStyle={styles.followImageStyle}
//                     nameStyle={styles.nameStyle}
//                     itemStyle={[styles.itemStyle, fullWidth]}
//                     leftView={<Button title={item.rate} containerStyle={styles.buttonContentStyle} textStyle={{
//                         fontSize: 12
//                     }} />}
//                 />
//                 <TextComp
//                     children={item.comment || "this is my comment"}
//                     center
//                     fontSize={14}
//                     color={colors.greay}
//                 />
//             </View>
//             {!idx && <View style={[styles.betweenLineStyle, selfCentered]} />}
//         </Fragment>
//     , [isRtl,
//         even_rates,
//         loading
//     ])