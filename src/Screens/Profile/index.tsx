import React from 'react'
import {
    ScrollView,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Modal,
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
const PushNotification = require('react-native-push-notification')
import styles from './styles'
import
ProfileProps,
{
    EventfulDataProps,
    timeArr,
    // EventItem
} from './index.interface'
import Image from 'react-native-scalable-image';

import CommonSection from './partials/CommonSection'
import RenderWantedModal from './partials/RenderWantedModal'
import DetailShadowStyles from "./partials/DetailedShadowItem/DetailShadowStyles";
import DetailedItem from './partials/DetailedItem/DetailedItem'
import LocationIcon from '../../components/LocationIcon'
import DateIcon from '../../components/DateIcon'
import TextComp from '../../components/Text'
import BackImage from '../../components/BackImage'
import NoDataPlaceHolder from '../../components/NoDataPlaceHolder'
import SearchIcon from "../../components/SearchIcon";
import Icon from '../../components/Icon'
import BottomTab from '../../components/BottomTab'
import Button from '../../components/Button'
import CreateEventIcon from '../../components/CreateEventIcon'
import DatePicker from '../../components/DataPicer'
import CloseIcon from '../../components/CloseIcon'
import DetailEvent from '../../Screens/MainProfile/partials/Events/partails/DetailEvent'
import registeredStyles from '../../utilities/registeredStyles'
import context from '../../utilities/Context/context'
import EventDataProps, { EventItem } from "../../utilities/LogicScreens/Home/interfaces/index.interface";
import useFetchEventsRequest from "../../utilities/LogicScreens/Home/hooks/useFetchEventsRequest";
import useFetchCategoryRequest from '../../utilities/LogicScreens/CreateEvent/hooks/useFetchCategoryRequest'
import useFetchCities from '../../utilities/LogicScreens/Profile/hooks/useFetchCities'
import useRecommendedRequest from '../../utilities/LogicScreens/Home/hooks/useRecommendedRequest'
import { isArrayHasData, isObjHasData } from '../../utilities/infastructure/validator/isThereData'
import colors from '../../utilities/colors'
import ForwardIcon from "../../components/ForwardIcon";
import { CategoryProps } from '../../utilities/LogicScreens/CreateEvent/interfaces/index.interface';
import { CData } from '../../utilities/LogicScreens/Profile/interfaces/index.interface';
import Avatar from '../../components/Avatar'
import { firstCondition, secondCondition } from '../EventDetail/partials/constants'
import PlusView from '../MainProfile/partials/Events/partails/PlusView'
import FlatSearchIcon from '../../components/FlatSearchIcon'
import BottomGroupIcon from '../../components/BottomGroupIcon'
import MoreGroupIcon from '../../components/MoreGroupIcon'
import EventDetail from '../../utilities/infastructure/apis/EventDetail'
import { getFromStorage, saveToStorage } from '../../utilities/infastructure/validator/localStorage'
import notify from '../Notification/partials/notify'
import { moderateScale } from '../../utilities/Context/responsive'

const {
    getSingleEventDetails
} = EventDetail
const CloseImg = require('../../assests/eventfulAssests/images/close.png')
const LoginImg = require('../../assests/eventfulAssests/images/LoginImage.png')
const ShadowImg = require('../../assests/eventfulAssests/images/ShadowImg.png')
const {
    memo,
    useContext,
    useCallback,
    useMemo,
    useState,
    Fragment,
    useEffect
} = React
const {
    flexStyle,
    rowStyle,
    rtlRowStyle,
    fullWidth,
    verticalCenteredFlex,
    horizontalCenteredFlex,
    spaceBetweenItems,
    selfCentered
} = registeredStyles
const { width: screenWidth } = Dimensions.get('window');
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const wp = (percentage: any) => {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;


const Profile: React.FC<ProfileProps> = ({ navigation }): JSX.Element => {
    const { navigate } = useMemo(() => navigation, [navigation])
    const { state: { first_name, name, lang, langType, isGuest, token } } = useContext(context)
    const isRtl = useMemo(() => langType === "ar", [langType])
    let sliderRef: any
    const [pagIndex, setPaginationIndex] = useState<number>(0)
    const {
        data: allData,
        loading,
        filterData,
        searchValue,
        // setModalSearch,
        // searchValues,
        // setSearchValues,
        searchEvents,
        singleModalVisible,
        setSingleModal,
        // setSearchNames,
        // searchNames,
        searchStates,
        setSearchStates
    } = useFetchEventsRequest(isRtl, isRtl ? "name_ar" : "name_en")
    const {
        searchDone,
        searchData,
        modalSearch,
        searchValues,
        searchNames
    } = useMemo(() => searchStates, [searchStates])
    // console.log("seacData =>", searchData)
    const handlePress = useCallback((item: EventItem) => () => {
        navigate("EventDetail", {
            data: item
        })
    }, [navigate])

    const handleSearch = useCallback((searchParam: string) => (selected: CategoryProps | CData | any) =>
        setSearchStates({
            ...searchStates,
            searchValues: {
                ...searchValues,
                [searchParam]: typeof selected === "string" ? selected : selected.id
            }
        })
        , [
            setSearchStates
        ])

    const {
        data: categories
    } = useFetchCategoryRequest()

    const {
        data: cities
    } = useFetchCities()
    const {
        data: recommendedEvents
    } = useRecommendedRequest()
    let dots: number[] = [];
    // for (let i = 0; i < recommendedEvents.length; i++) {
    //     dots = [...dots, i];
    // }
    // console.log("length => ", isArrayHasData(allData) && allData.length)
    // let lastIndex = allData.length - 1

    const EventItem = useCallback((sectionItem: EventfulDataProps, idx: number) => {
        const isAllVisible = sectionItem.events.length > 2
        const isEventThere = sectionItem.events.length !== 0
        // console.log("last=>", lastIndex)
        return isEventThere &&

            <CommonSection
                loading={loading}
                isRtl={isRtl}
                key={sectionItem.id}
                data={sectionItem.events}
                onPress={handlePress}
                isAllVisible={isAllVisible}
                headTitle={isRtl ? sectionItem.name_ar : sectionItem.name_en}
                DetailView={DetailedItem}
                headViewStyle={styles.recentlyHeadViewStyle}
                contentStyle={[
                    // styles.recentlyContentStyle,
                    {
                        // bottom: 0,
                        // isArrayHasData(recommendedEvents) ? 610 : 260,
                        minHeight: "13%",
                        maxHeight: "16%"
                    }
                ]}
            />


    }, [handlePress, isRtl,])
    const profileName: string = first_name !== undefined ? first_name : name
    const sortArray = [
        "لقائات",
        "أنشطة",
        "دورات تدريبية",
        "الأعمال",
        "ترفيه",
        "أخرى"
    ]
    const EventMap = useMemo(() => {
        if (loading) {
            return <NoDataPlaceHolder loading={loading} />
        } else {
            return isArrayHasData(allData) &&
                <View style={{
                    width: "100%",
                    // backgroundColor: "#000",
                    bottom: isArrayHasData(recommendedEvents) ? "39%" : "26%",
                    marginBottom: isArrayHasData(recommendedEvents) ? "45%" : "30%",
                    // flex:1
                    minHeight: "100%",
                    // marginTop: "30%"
                    // bottom: "15%"

                }} >
                    {/* <ScrollView> */}
                    {
                        allData.map(EventItem)

                    }
                    {/* </ScrollView> */}
                </View>
        }
    }, [
        allData,
        EventItem,
        loading
    ])
    // console.log("searchvacle =>", searchValues, searchNames)

    const handleSelectItem = useCallback((stateId: string, stateName: string) => (id: number, name: string) => {
        setSearchStates({
            ...searchStates,
            searchValues: {
                ...searchValues,
                [stateId]: stateId === "event_when" ? name : id
            },
            searchNames: {
                ...searchNames,
                [stateName]: name
            },
            // modalSearch: true
        })
        setSingleModal("")
    }, [
        // searchValues,
        setSingleModal,
        setSearchStates,
        searchStates
    ])
    useEffect(() => {
        // const language = navigation.getParam("language")
        PushNotification.configure({
            // smallIcon: "notification_icon",
            // largeIcon: "notification_icon",
            onNotification: async (notification: any) => {

                // console.log("noiniinin", notification)
                // const eventAdded = await getSingleEventDetails(
                //     notification.event_id,
                //     token,
                //     isRtl ? "en" : "ar"
                // )
                // const notifications: any = await getFromStorage("notifications")
                // let userNot = await JSON.parse(notifications)
                // console.log("usr =>", userNot)

                // if (!userNot) {
                //     console.log("no")
                //     await saveToStorage("notifications", JSON.stringify([eventAdded.data]))
                // } else {
                //     console.log("yes", userNot.find((item: any) => item.id === eventAdded.data.id))
                //     if (!userNot.find((item: any) => item.id === eventAdded.data.id)) {
                //         userNot = [...userNot, eventAdded.data]
                //         await saveToStorage("notifications", JSON.stringify(userNot))
                //     }
                // }
                console.log("proffhoem")
                notify(
                    notification.event_id,
                    isRtl,
                    token,
                    navigation
                )
                // navigation.push("Notification")

            },
            smallIcon: "eventful",
            largeIcon: "eventful"

        })
    }, [navigation])
    // console.log("isRtl => ", isRtl)
    return (
        <Fragment>
            <ScrollView
                style={[flexStyle]}
                scrollEnabled
                shouldRasterizeIOS
            >
                <BackImage
                    selectedValue={searchValue}
                    filterData={filterData}
                    categories={categories}
                    loginImgStyle={styles.loginImgStyle}
                    screenName={`${lang.Welcome} ${(
                        !isObjHasData(first_name) &&
                            !isObjHasData(name) ?
                            `` :
                            (isObjHasData(first_name) ?
                                first_name :
                                name))} `}
                    logoText={lang.UpcomingForYu}
                    // searching={searchFlag}
                    isRtl={isRtl}
                    logoStyle={[styles.logoStyle, {
                        flexDirection: isRtl ? "row-reverse" : "row"
                    }]}
                    logoTxtStyle={styles.logoTxtStyle}
                    txtStyle={styles.txtStyle}
                    // anthorView={
                    //     <View style={{
                    //         width: "90%",
                    //         alignSelf: "center",
                    //         height: 60,
                    //         marginTop: 400,
                    //         rotation: -4,
                    //         // bottom: 300,
                    //         position: "absolute",
                    //         justifyContent: "center",
                    //         paddingHorizontal: 70,

                    //     }}>
                    //         <PlusView navigation={navigation} style={{
                    //             width: 45,
                    //             height: 45,
                    //             bottom: 0,
                    //             alignSelf: "flex-start",
                    //             marginLeft: 0,
                    //             marginBottom: 0,
                    //             marginRight: 0,
                    //         }} />

                    //     </View>
                    // }
                    leftIcon={
                        <View style={{
                            // backgroundColor: colors.black,
                            flexDirection: isRtl ? "row-reverse" : "row",
                            marginBottom: "6%"
                            // left: isRtl ? 75 : 240,
                            // top: isRtl ? -52 : -42,
                            // minWidth: "20%",
                            // rotation: 0,
                            // bottom: 62,
                            // paddingTop: 10,
                            // height: 100,
                            // alignSelf: isRtl ? "flex-start" : "flex-end",
                            // flexDirection: isRtl ? "row-reverse" : "row",
                            // justifyContent: "center",


                        }}>
                            <Icon
                                containerStyle={{
                                    marginEnd: 5,
                                    bottom: 2
                                }
                                    // // searchFlag ?
                                    // //     (isRtl ?
                                    // //         styles.rtlSearchIconStyle
                                    // //         :
                                    // //         styles.searchIconStyle) :
                                    // (
                                    //     isRtl ?
                                    //         [styles.rtlIconStyle, {
                                    //             top: -83,
                                    //             right: -10,
                                    //             rotation: -1
                                    //         }]
                                    //         :
                                    //         [styles.iconContainerStyle,
                                    //         {
                                    //             top: -93,
                                    //             marginLeft: 30,
                                    //             rotation: -1,
                                    //         }
                                    //         ]
                                    // )
                                }
                                children={
                                    <MoreGroupIcon
                                        width={20}
                                        height={20}
                                        onPress={navigation.openDrawer}

                                    />}
                                onPress={navigation.openDrawer}

                            />
                            <Icon
                                containerStyle={{ marginEnd: 5 }
                                    // searchFlag ?
                                    //     (isRtl ?
                                    //         styles.rtlSearchIconStyle
                                    //         :
                                    //         styles.searchIconStyle) :
                                    // (
                                    //     isRtl ?
                                    //         styles.rtlIconStyle
                                    //         :
                                    //         styles.iconContainerStyle
                                    // )
                                }
                                children={
                                    <FlatSearchIcon

                                    />}
                                onPress={() => setSearchStates({
                                    ...searchStates,
                                    modalSearch: true
                                })}
                            />
                        </View>
                    }

                />

                <View style={{
                    width: "100%",
                    position: "absolute",
                    // top: 200,

                    // top: moderateScale(55, 1),

                    top: 180,
                    alignSelf: "center",
                    height: 60,
                    // marginTop: 400,
                    // rotation: -4,
                    // bottom: 300,
                    // position: "absolute",
                    // justifyContent: "center",
                    paddingHorizontal: "2.5%",
                    // backgroundColor: "#000"

                }}>
                    <PlusView navigation={navigation} style={{
                        width: 45,
                        height: 45,
                        marginLeft: 0,
                        marginBottom: 0,
                        marginRight: 0,
                        bottom: 0,

                        alignSelf: "flex-start",

                    }} />
                </View>

                {modalSearch ? <Modal transparent  >
                    <View style={[
                        styles.modalStyle,
                        selfCentered,
                    ]}>
                        {/* <View
            style={[
                isRtl ? rtlRowStyle : rowStyle,
                spaceBetweenItems,
                horizontalCenteredFlex,
                selfCentered,
                { width: "110%", marginBottom: 40 },
            ]}>
            <Icon
                children={
                    <SearchIcon
                        width={15}
                        height={16}
                        color={colors.black}
                        iconStyle={{
                            top: 4
                        }}
                    />}
            />
            <TextInput
                style={{
                    width: "80%",
                    borderWidth: 0,
                    fontSize: 18,
                    color: colors.placeholder

                }}
                placeholder={"Search for ..."}
            />
            <View style={{
                width: "100%",
                alignSelf: "center",
                backgroundColor: colors.graye2,
                elevation: 1,
                height: 0.25,
                top: 43,
                position: "absolute",
                zIndex: 1000
            }} />
            </View> */}
                        <TouchableOpacity style={[
                            styles.closeViewStyle,
                            rowStyle,
                            selfCentered,
                            {
                                justifyContent: isRtl ? "flex-end" : "flex-start",
                            }
                        ]} onPress={() => setSearchStates({
                            ...searchStates,
                            modalSearch: false
                        })}>
                            <Icon onPress={() => setSearchStates({
                                ...searchStates,
                                modalSearch: false
                            })} children={<CloseIcon />} />
                        </TouchableOpacity>
                        {/* <Icon onPress={() => setModalSearch(false)} children={<BackIcon color={"#000"} onPress={() => setModalSearch(false)} iconStyle={{ right: 15 }} />} /> */}
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={[
                                styles.modalScrollStyle,
                                selfCentered
                            ]}>
                            {singleModalVisible ? <Modal transparent>
                                <View style={[
                                    styles.singleModalStyle,
                                    selfCentered
                                ]}>
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                        {singleModalVisible === "city" &&
                                            <Fragment>
                                                <RenderWantedModal
                                                    name={isRtl ? "كل المدن" : "all cities"}
                                                    id={isRtl ? "كل المدن" : "allcities"}
                                                    handleSelectItem={handleSelectItem("city", "city")}
                                                    selected={
                                                        searchNames.city === "كل المدن"
                                                        || searchNames.city === "all cities"
                                                    }
                                                    isRtl={isRtl}
                                                />
                                                {cities.map((cityItem: CData) =>
                                                    <RenderWantedModal
                                                        name={cityItem.name}
                                                        id={cityItem.id}
                                                        handleSelectItem={handleSelectItem("city", "city")}
                                                        selected={searchNames.city === cityItem.name}
                                                        isRtl={isRtl}
                                                    />
                                                )}
                                            </Fragment>
                                        }
                                        {singleModalVisible === "category" &&
                                            <Fragment>
                                                <RenderWantedModal
                                                    name={isRtl ? "كل التطبيقات" : "all categories"}
                                                    id={isRtl ? "كل التطبيقات" : "allcategories"}
                                                    handleSelectItem={handleSelectItem("category", "category")}
                                                    selected={
                                                        searchNames.city === "كل التطبيقات"
                                                        || searchNames.city === "all categories"
                                                    }
                                                    isRtl={isRtl}
                                                />
                                                {categories.map((categoryItem: CategoryProps) =>
                                                    <RenderWantedModal
                                                        isRtl={isRtl}
                                                        name={isRtl ? categoryItem.name_ar : categoryItem.name_en}
                                                        id={categoryItem.id}
                                                        handleSelectItem={handleSelectItem("category", "category")}
                                                        selected={searchNames.category === (
                                                            isRtl ?
                                                                categoryItem.name_ar :
                                                                categoryItem.name_en)
                                                        }
                                                    />
                                                )}
                                            </Fragment>
                                        }
                                        {singleModalVisible === "time" &&
                                            <Fragment>
                                                <RenderWantedModal
                                                    name={isRtl ? "أي وقت" : "anyTime"}
                                                    id={isRtl ? "أي وقت" : "anyTime"}
                                                    handleSelectItem={handleSelectItem("event_when", "time")}
                                                    selected={
                                                        searchNames.city === "أي وقت"
                                                        || searchNames.city === "Any Time"
                                                    }
                                                    isRtl={isRtl}
                                                />
                                                {timeArr(isRtl).map((timeItem: string, idx: number) =>
                                                    <RenderWantedModal
                                                        isRtl={isRtl}
                                                        name={timeItem}
                                                        selected={searchNames.time === timeItem}
                                                        id={idx}
                                                        handleSelectItem={handleSelectItem("event_when", "time")}
                                                    />
                                                )}
                                            </Fragment>
                                        }
                                    </ScrollView>
                                    <Button
                                        title={"back"}
                                        onPress={() => setSingleModal("")}
                                        containerStyle={[styles.backButStyle, selfCentered]}
                                    />
                                </View>
                            </Modal> :
                                <Fragment>
                                    <View style={styles.modalSearchStyle}>
                                        <TextComp children={lang.IWantGo} color={colors.black} fontSize={18} />
                                        <TouchableOpacity
                                            style={isRtl && { alignSelf: "flex-end" }}
                                            onPress={() => setSingleModal("city")}>
                                            <TextComp children={
                                                searchNames.city ?
                                                    searchNames.city :
                                                    lang.AllCities}
                                                color={colors.flowerColor}
                                                fontSize={28} />
                                            <View style={styles.underLineStyle} />
                                        </TouchableOpacity>

                                    </View>
                                    <View style={styles.secondModalStyle}>
                                        <TextComp children={lang.In} color={colors.black} fontSize={18} />
                                        <TouchableOpacity
                                            style={isRtl && { alignSelf: "flex-end" }}
                                            onPress={() => setSingleModal("time")}>
                                            <TextComp children={
                                                searchNames.time ?
                                                    searchNames.time :
                                                    lang.AnyTime}
                                                color={colors.flowerColor}
                                                fontSize={28} />
                                            <View style={styles.underLineStyle} />
                                        </TouchableOpacity>
                                        {(
                                            searchValues.event_when === "anthorTime" || searchValues.event_when === "وقت اخر"
                                        ) && <DatePicker
                                                dateInputStyle={{
                                                    margin: 12,
                                                    borderWidth: 0.2,
                                                    borderColor: colors.background
                                                }}
                                                dateFT={lang.ChooseTime}
                                                isRtl={isRtl}
                                                onDateChanged={(item: string) => {
                                                    setSearchStates({
                                                        ...searchStates,
                                                        searchValues: {
                                                            ...searchValues,
                                                            event_when: item
                                                        },
                                                        searchNames: {
                                                            ...searchNames,
                                                            time: item
                                                        }
                                                    })

                                                }}

                                            />}
                                    </View>
                                    <View style={styles.modalSearchStyle}>
                                        <TextComp children={lang.ModeFor} color={colors.black} fontSize={18} />
                                        <TouchableOpacity style={isRtl && {
                                            alignSelf: "flex-end"
                                        }} onPress={() => setSingleModal("category")}>
                                            <TextComp children={
                                                searchNames.category ?
                                                    searchNames.category :
                                                    lang.AnyThing}
                                                color={colors.flowerColor}
                                                fontSize={28} />
                                            <View style={styles.underLineStyle} />
                                        </TouchableOpacity>

                                    </View>
                                </Fragment>
                            }
                        </ScrollView>
                        <Button title={lang.Search}
                            containerStyle={[
                                styles.searchButStyle,
                                selfCentered,
                                horizontalCenteredFlex,
                                verticalCenteredFlex
                            ]}
                            textStyle={{ fontSize: 15 }}
                            onPress={searchEvents} />
                    </View>
                </Modal> :
                    // <ScrollView>
                    // <View style={{ minHeight: "100%", backgroundColor: "#000" }}>
                    <View style={{
                        bottom: moderateScale(68, 1),
                        marginBottom: isArrayHasData(allData) ? (allData.length > 7 ? 0 : moderateScale(-60, 1)) : 0
                    }}>


                        {
                            isArrayHasData(recommendedEvents) &&
                            <View style={{
                                // backgroundColor: colors.black,
                                flex: 1,
                                // height: "100%",
                                padding: 10,
                                marginTop: 6,
                                // bottom: "21%"
                            }}>
                                <TextComp children={lang.Recommended} center fontSize={23} color={colors.black} />
                                <Carousel
                                    ref={(c: any) => sliderRef = c}
                                    // layout={"stack"}
                                    // autoplay
                                    horizontal
                                    sliderHeight={slideHeight}
                                    sliderWidth={sliderWidth}
                                    itemWidth={itemWidth}
                                    data={
                                        recommendedEvents
                                    }
                                    // inactiveSlideScale={0.94}
                                    // inactiveSlideOpacity={0.7}
                                    inactiveSlideShift={5}
                                    containerCustomStyle={styles.slider}
                                    contentContainerCustomStyle={styles.sliderContentContainer}
                                    loop={true}
                                    loopClonesPerSide={2}
                                    autoplay={true}
                                    autoplayDelay={30}
                                    autoplayInterval={3000}

                                    onSnapToItem={(index: number) => setPaginationIndex(index)}

                                    renderItem={(({ item }: { item: EventItem | any }) =>
                                        <TouchableOpacity style={{
                                            width: "100%",
                                            height: 273,
                                            marginTop: 5,
                                            borderRadius: 15,
                                            marginEnd: 10,
                                        }}
                                            onPress={handlePress(item)}
                                        >
                                            <ImageBackground
                                                source={

                                                    { uri: item.photo_url }
                                                }
                                                style={{
                                                    flex: 1,
                                                    borderRadius: 15,
                                                    backfaceVisibility: "hidden",
                                                    overflow: "hidden",
                                                    // resizeMode: "stretch",
                                                    aspectRatio: 1.04,
                                                    alignSelf: "center",
                                                }}
                                            >

                                                <ImageBackground
                                                    source={ShadowImg}
                                                    style={[styles.recommendedImgStyle,
                                                        rowStyle,
                                                        // fullWidth,
                                                        verticalCenteredFlex,
                                                        horizontalCenteredFlex,
                                                        spaceBetweenItems,
                                                        selfCentered,
                                                    ]}>
                                                    <View>
                                                        <TextComp
                                                            children={item.event_subscription}
                                                            textStyle={DetailShadowStyles.statuStyle}
                                                        />
                                                        <TextComp
                                                            children={item.name}
                                                            fontSize={item.name.length > 25 ? 19 : 24}
                                                            textStyle={[
                                                                DetailShadowStyles.nameStyle,
                                                                selfCentered,
                                                                fullWidth
                                                            ]}
                                                        />
                                                        <View
                                                            style={[
                                                                DetailShadowStyles.locDateStyle,
                                                                horizontalCenteredFlex,
                                                                rowStyle]}>
                                                            <View style={[rowStyle, { width: "45%" }]}>
                                                                <Icon children={<LocationIcon />} />
                                                                <TextComp
                                                                    children={cities.find((i: any) => i.id === item.city_id)?.name}
                                                                    textStyle={DetailShadowStyles.locStyle}

                                                                />
                                                            </View>
                                                            <View style={[rowStyle, { width: "45%", bottom: 2 }]}>
                                                                <Icon children={<DateIcon />} />
                                                                <TextComp
                                                                    children={item.formatted_date}
                                                                    textStyle={DetailShadowStyles.dateStyle}
                                                                />
                                                            </View>
                                                        </View>

                                                    </View>
                                                    <View style={[
                                                        verticalCenteredFlex,
                                                        horizontalCenteredFlex,
                                                        DetailShadowStyles.iconImgStyle
                                                    ]}>
                                                        <Icon children={<ForwardIcon />} />
                                                    </View>

                                                </ImageBackground>

                                                {/* <TextComp center children={item.title} color={colors.mainColor} /> */}
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    )}

                                />

                                <Pagination
                                    dotsLength={
                                        recommendedEvents.length
                                    }
                                    activeDotIndex={pagIndex}
                                    containerStyle={styles.paginationContainer}
                                    dotColor={colors.purple}
                                    dotStyle={styles.paginationDot}
                                    inactiveDotColor={colors.black}
                                    inactiveDotOpacity={0.4}
                                    inactiveDotScale={0.6}
                                    carouselRef={sliderRef}

                                //   tappableDots={!!this._slider1Ref}
                                />
                            </View>
                        }


                        {
                            isArrayHasData(allData) && !isArrayHasData(searchData) ?

                                <ScrollView style={{
                                    flex: 1,
                                    marginBottom: 50
                                }}>
                                    {allData.map((item: EventfulDataProps) => {
                                        const isEventThere = isArrayHasData(item.events)
                                        return isEventThere && <View key={item.id} style={{
                                            height: 240,
                                            // marginBottom: 10
                                        }}>
                                            <TextComp key={item.id} textStyle={styles.rcommendStyle} children={isRtl ? item.name_ar : item.name_en} color={colors.black} />
                                            <View key={item.id} style={{ height: 190, bottom: 6, marginHorizontal: 10 }}>
                                                <ScrollView horizontal style={isRtl && { transform: [{ scaleX: -1 }] }}>
                                                    {item.events.map((event: EventItem | any) => {
                                                        return <DetailedItem
                                                            loading={loading}
                                                            isRtl={isRtl}
                                                            item={event}
                                                            key={item.id}
                                                            onPress={handlePress(event)}

                                                        />
                                                    })}
                                                </ScrollView>
                                            </View>
                                        </View>
                                    })
                                    }
                                </ScrollView>
                                :
                                (isArrayHasData(searchData) ?

                                    // <ScrollView style={[flexStyle, {
                                    //     bottom: isArrayHasData(recommendedEvents) ? 540 : 240,
                                    //     marginBottom:
                                    //         searchData.length > 8 ?
                                    //             (!isArrayHasData(recommendedEvents) ? -650 : -50) :
                                    //             (!isArrayHasData(recommendedEvents) ? 0 : -320)
                                    // }]}>
                                    <View
                                        style={{
                                            minHeight: 290,
                                            marginTop: 15,
                                            width: "100%",
                                            // backgroundColor: "#000",
                                            // bottom: isArrayHasData(recommendedEvents) ? "1%" : "15%",
                                            // marginBottom: -100
                                            // marginBottom: isArrayHasData(recommendedEvents) ? "35%" : "-60%",
                                            // flex:1
                                        }} >
                                        <ScrollView>
                                            {
                                                searchData &&
                                                searchData.map((item: EventItem, idx: number) => {
                                                    return <View
                                                        key={item.id}
                                                        style={[
                                                            rowStyle,
                                                            fullWidth,

                                                            // horizontalCenteredFlex,
                                                            {
                                                                height: 150,
                                                                // backgroundColor: "#000",
                                                                justifyContent: "flex-start",
                                                                marginHorizontal: 5,
                                                                marginBottom: 10,
                                                                paddingHorizontal: 12
                                                            }
                                                        ]}>
                                                        {
                                                            searchData[firstCondition(idx)]?.photo_url !== undefined &&
                                                            <TouchableOpacity style={{
                                                                width: "47%",
                                                                height: "100%",
                                                                marginHorizontal: 5,
                                                                // backgroundColor: "#000"
                                                            }}
                                                                onPress={handlePress(item)}

                                                            >

                                                                <Avatar
                                                                    source={
                                                                        { uri: searchData[firstCondition(idx)]?.photo_url }
                                                                    }
                                                                    imageStyle={{
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        borderRadius: 12,


                                                                    }}
                                                                >
                                                                    {searchData[firstCondition(idx)] && <DetailEvent
                                                                        item={searchData[firstCondition(idx)]}
                                                                        isRtl={isRtl}
                                                                    />
                                                                    }
                                                                </Avatar>
                                                            </TouchableOpacity>
                                                        }
                                                        {
                                                            searchData[secondCondition(idx)]?.photo_url !== undefined &&
                                                            <TouchableOpacity
                                                                onPress={handlePress(searchData[secondCondition(idx)])}

                                                                style={{
                                                                    width: "47%",
                                                                    height: "100%",

                                                                }}>

                                                                <Avatar
                                                                    source={
                                                                        { uri: searchData[secondCondition(idx)]?.photo_url }
                                                                    }
                                                                    imageStyle={{
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        borderRadius: 12,
                                                                        marginHorizontal: 4
                                                                    }}
                                                                >

                                                                    {searchData[secondCondition(idx)] && <DetailEvent

                                                                        item={searchData[secondCondition(idx)]}
                                                                        isRtl={isRtl}
                                                                    />
                                                                    }
                                                                </Avatar>
                                                            </TouchableOpacity>

                                                        }

                                                    </View>
                                                }
                                                )}
                                        </ScrollView>
                                    </View>
                                    : searchDone &&
                                    <View style={[styles.alterVStyle, {
                                        bottom: isArrayHasData(recommendedEvents) ? 0 : 250

                                    }, selfCentered]}>
                                        <TextComp center children={lang.NoData} fontSize={25} color={"red"} />
                                    </View>
                                )

                        }

                    </View>
                }




            </ScrollView>
            {!isGuest && <BottomTab navigation={navigation} selectedTab={"Profile"} bottomViewStyle={{ backgroundColor: colors.white }} />}
        </Fragment >
    )
}
export default memo(Profile)


