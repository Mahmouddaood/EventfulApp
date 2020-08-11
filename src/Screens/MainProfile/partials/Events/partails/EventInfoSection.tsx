import React from 'react'
import {
    View,
    Animated,
    ImageBackground,
    TouchableOpacity,
    Modal,
    ScrollView
} from 'react-native'
import styles from './styles'
import DetailEvent from './DetailEvent'
import PlusView from './PlusView'
import { EventInfoSectionProps } from '../index.interface'
import { ButtonList } from '../../../../ProfileWithEvents/indes.interface'
import List from '../../../../../components/List'
import TextComp from '../../../../../components/Text'
import Avatar from '../../../../../components/Avatar'
import Button from '../../../../../components/Button'
import Icon from '../../../../../components/Icon'
import DateIcon from '../../../../../components/DateIcon'
import NoDataPlaceHolder from '../../../../../components/NoDataPlaceHolder'
import MainContext from '../../../../../utilities/Context/context'
import colors from '../../../../../utilities/colors'
import useGetUserEventsRequest from '../../../../../utilities/LogicScreens/Profile/hooks/useGetUserEventsRequest'
import { UserEvent } from '../../../../../utilities/LogicScreens/Profile/interfaces/index.interface'
import useDeleteEventRequest from '../../../../../utilities/LogicScreens/Profile/hooks/useDeleteEventRequest'
import registeredStyles from '../../../../../utilities/registeredStyles'
// import AnimatedSection from './AnimatedSection'
import AnimatedSection from './AnimatedSection'
import EventListSvg from '../../../../../components/EventListSvg'
import EventGridSvg from '../../../../../components/EventGridSvg'
const LocImg = require("../../../../../assests/eventfulAssests/images/LocImg.png")
const CalculaterImg = require('../../../../../assests/eventfulAssests/images/calendar.png')
const testImage = require("../../../../../assests/eventfulAssests/images/DjNight.png")
import Profile from "../../../../../utilities/infastructure/apis/Profile";
import ListIcon from '../../../../../components/ListIcon'
import LocationMapIcon from '../../../../../components/LocationMapIcon'
import { firstCondition, secondCondition } from '../../../../../Screens/EventDetail/partials/constants'
import { moderateScale } from '../../../../../utilities/Context/responsive'
const {
    getUserEvents
} = Profile
const {
    rowStyle,
    rtlRowStyle,
    spaceBetweenItems,
    verticalCenteredFlex,
    shadow,
    horizontalCenteredFlex,
    selfCentered,
    selfEnd,
    selfStart,
    fullWidth
} = registeredStyles
const {
    memo,
    useContext,
    useMemo,
    useCallback
} = React

// const firstCondition = (idx: number | any) => !idx ?
//     idx : idx === 1 ?
//         idx + 1 : idx === 2 ?
//             idx + 2 : idx === 3 ?
//                 idx + 3 : idx === 4 ?
//                     idx + 4 : idx === 5 ?
//                         idx + 5 : idx === 6 ?
//                             idx + 6 : idx === 7 &&
//                             idx + 7

// const secondCondition = (idx: number | any) => !idx ? idx + 1 :
//     idx === 1 ? idx + 2 :
//         idx === 2 ? idx + 3 :
//             idx === 3 ? idx + 4 :
//                 idx === 4 ?
//                     idx + 5 : idx === 5 ?
//                         idx + 6 : idx === 6 ?
//                             idx + 7 : idx === 7 &&
//                             idx + 8

const EventInfoSection: React.FC<EventInfoSectionProps> = ({
    navigation,
    containerStyle,
    plus
}): JSX.Element => {
    const { state, setContext } = useContext(MainContext)
    const { token, langType, isGuest, lang } = useMemo(() => state, [state])
    const isRtl = useMemo(() => langType === "ar", [langType])
    const {
        data,
        loading,
        handleStatusChange,
        imageFocus,
        showKey,
        fadeAnimated,
        editFadeAnimated,
        showEditView,
        fetchData,
        viewType,
        setViewType,
        viewAnimated,
        openDeleteModal,
        modalVisible,
        setStatus,
        fade,
        handleEventDelete,
        animatedvisible
    } = useGetUserEventsRequest(token, navigation.navigate, isRtl ? "ar" : "en")
    // const {
    //     handleEventDelete
    // } = useDeleteEventRequest(token)
    console.log("data =>", data)
    const { navigate } = useMemo(() => navigation, [navigation])
    const handleChange = useCallback((item: string) => {
        handleStatusChange(item)
    }, [
        handleStatusChange
    ])
    const handleNavigateAdd = useCallback(() => !isGuest && navigate("CreateEvent"), [navigate])
    const handleNavigateEdit = useCallback((item: UserEvent) => () => {
        console.log("here you are", item)
        return navigate("CreateEvent", { eventData: item })
    }, [navigate])
    const handleDelete = useCallback((id: number) => async () => {
        console.log("idds", id, showKey)
        handleEventDelete(showKey)
        openDeleteModal(false)
        setContext({
            ...state,
            eventDeleted: true
        })
        // return await fetchData()
        // setStatus("myevents")
        // return await getUserEvents(token, "my_events", isRtl ? "en" : "ar")
    }
        , [
            handleEventDelete,
            showKey,

            setContext,
            // token,
            openDeleteModal,
        ])

    console.log("sohwkey=>", showKey)
    const imageData = [
        {
            img_url: testImage
        },
        {
            img_url: testImage
        },
        {
            img_url: testImage
        },
        {
            img_url: testImage
        },
        {
            img_url: testImage
        },
        {
            img_url: testImage
        },

    ]

    const Imag = useMemo(() => {
        return data && data.map((item: UserEvent, idx: number) => {
            // console.log("eventidx =>", firstCondition(idx))

            return <View style={[styles.imgViewStyle, rowStyle, horizontalCenteredFlex]}>
                <TouchableOpacity
                    style={styles.gridItemStyle}
                    onPress={data[firstCondition(idx)] && imageFocus(firstCondition(idx), data[firstCondition(idx)])}
                >

                    <ImageBackground
                        source={{ uri: data[firstCondition(idx)]?.img_url }}
                        style={[styles.avatarStyle,
                        data[firstCondition(idx)] && {
                            borderColor: "#ced4e2",
                            borderWidth: 1
                        }
                        ]}
                    >
                        {/* {data[firstCondition(idx)] && !showKey && <View style={{
                            backgroundColor: colors.white,
                            width: "100%",
                            height: 105, top: 90
                        }}>
                            <TextComp children={"name 1"} color={colors.purple} fontSize={15} textStyle={{ textAlign: isRtl ? "right" : "left" }} />
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
                                <Avatar source={LocImg} imageStyle={{ width: 14, height: 18 }} />
                                <TextComp children={item.address} textStyle={{ marginLeft: 10 }} fontSize={13} color={colors.placeholder} />
                            </View>
                        </View>
                        } */}
                        {data[firstCondition(idx)] && animatedvisible && showKey === firstCondition(idx) &&
                            <AnimatedSection
                                item={data[firstCondition(idx)]}
                                fade={fadeAnimated}
                                showKey={showKey}
                                id={idx}
                                isRtl={isRtl}
                            />
                        }

                        {data[firstCondition(idx)] && <DetailEvent
                            item={data[firstCondition(idx)]}
                            isRtl={isRtl}
                        />
                        }



                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.gridItemStyle}
                    onPress={data[secondCondition(idx)] &&
                        imageFocus(secondCondition(idx), data[secondCondition(idx)])}>

                    <ImageBackground source={{ uri: data[secondCondition(idx)]?.img_url }}
                        style={[styles.avatarStyle, data[secondCondition(idx)] && {
                            borderColor: "#ced4e2",
                            borderWidth: 2
                        }]}
                    >
                        {data[secondCondition(idx)] && (showKey === secondCondition(idx)) && fadeAnimated &&
                            <AnimatedSection
                                item={data[secondCondition(idx)]}
                                fade={fadeAnimated}
                                showKey={showKey}
                                // id={item.id}
                                isRtl={isRtl}
                            />
                        }
                        {data[secondCondition(idx)] && <DetailEvent
                            item={data[secondCondition(idx)]}
                            isRtl={isRtl}
                        />
                        }


                    </ImageBackground>
                </TouchableOpacity>
                {/* <Avatar source={imageData[!idx ? idx + 1 : idx === 1 ? idx + 2 : idx === 2 ? idx + 3 : idx === 3 ? idx + 4 : idx === 4 ? idx + 5 : idx === 5 ? idx + 6 : idx === 6 ? idx + 7 : idx === 7 ? idx + 8 : 0]}
                    imageStyle={styles.avatarStyle}
                /> */}
            </View >
        })
    }, [
        data,
        imageData,
        viewAnimated,
        fadeAnimated,
        imageFocus,
        showKey
    ])

    const ImageView = useMemo(() => {
        return data && data.map((item: UserEvent, idx: number) => {

            return <NoDataPlaceHolder loading={loading} containerStyle={{ margin: 15 }}>
                <TouchableOpacity
                    key={item.id}
                    onPress={() => navigation.navigate("EventDetail", {
                        data: item
                    })}
                    style={[
                        styles.imgViewStyle,
                        isRtl ? rtlRowStyle : rowStyle
                        // horizontalCenteredFlex
                    ]}>
                    <View style={[
                        styles.itemStyle,
                        horizontalCenteredFlex,
                        verticalCenteredFlex
                    ]}>
                        <ImageBackground key={item.id}
                            style={[
                                styles.listImgStyle,
                                selfCentered,
                                horizontalCenteredFlex
                            ]}
                            source={{ uri: item.img_url }}
                        >
                            {/* {(fadeAnimated || editFadeAnimated) && <AnimatedSection
                            item={item}
                            editFade={editFadeAnimated}
                            fade={fadeAnimated}
                            showEditView={showEditView}
                            showKey={showKey}
                        />
                        } */}
                            <TouchableOpacity style={[
                                styles.iconVStyle,
                                horizontalCenteredFlex,
                                verticalCenteredFlex
                            ]}
                                onPress={showEditView(item.id)}
                            >
                                {[0, 1, 2].map((idx: number) => <View
                                    key={idx}
                                    style={styles.innerStyle}
                                />
                                )}
                            </TouchableOpacity>
                            {item.id === showKey && editFadeAnimated && <Animated.View style={[
                                styles.edtNStyle,
                                selfCentered,
                                shadow,
                                {
                                    opacity: editFadeAnimated,
                                }
                            ]}>
                                <TouchableOpacity onPress={handleNavigateEdit(item)}
                                >
                                    <TextComp
                                        textStyle={[styles.editTxtStyle, isRtl && styles.rtlEditTxtStyle]}
                                        children={lang.EditEvent}
                                        fontSize={13}
                                        color={colors.black}
                                        onPress={handleNavigateEdit(item)}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => openDeleteModal(true)}>
                                    <TextComp
                                        textStyle={styles.delTxtStyle}
                                        children={lang.DeleteEvent}
                                        fontSize={13}
                                        color={colors.black}
                                        onPress={() => openDeleteModal(true)}

                                    />
                                </TouchableOpacity>
                            </Animated.View>
                            }
                        </ImageBackground >
                    </View>
                    {
                        // <DeleteModal
                        //     modalVisible={modalVisible}
                        //     handleOkPress={handleDelete(item.id)}
                        //     handleClosePress={() => openDeleteModal(false)} />
                        modalVisible && <Modal transparent>
                            <View style={[styles.deleteModalStyle, selfCentered]}>
                                <View>
                                    <TextComp
                                        color={colors.mainColor}
                                        fontSize={16}
                                        children={lang.DeleteMsg}
                                        center
                                    />
                                    <View style={[
                                        styles.chooseStyle,
                                        isRtl ? rtlRowStyle : rowStyle,
                                        spaceBetweenItems,
                                        selfCentered
                                    ]}>
                                        <Button title={lang.Yes}
                                            onPress={handleDelete(item.id)}
                                            containerStyle={[styles.chooseButStyle,
                                            {
                                                backgroundColor: colors.purple
                                            }
                                            ]}></Button>

                                        <Button
                                            onPress={() => openDeleteModal(false)}
                                            title={lang.No}
                                            containerStyle={[styles.chooseButStyle,
                                            {
                                                backgroundColor: colors.error
                                            }
                                            ]}></Button>
                                    </View>

                                </View>

                            </View>
                        </Modal>
                    }
                    <View style={styles.detailImgStyle}>
                        <TextComp
                            children={item.formatted_date_time}
                            fontSize={13}
                            color={"#1fb895"}
                            center
                            textStyle={{
                                textAlign: isRtl ? "right" : "left",
                                minWdth: "100%",
                                marginTop: 5,
                                marginBottom: 10,
                                marginHorizontal: isRtl ? 10 : 0
                            }}
                        />
                        <TextComp
                            children={item.name}
                            fontSize={15}
                            color={colors.black}
                            center
                            textStyle={{
                                marginHorizontal: isRtl ? 20 : 10,
                                textAlign: isRtl ? "right" : "left",
                                fontWeight: "bold"
                            }}
                        />

                        {/* <View style={[styles.timeViewStyle, spaceBetweenItems]}>

                            <TextComp
                                children={item.description && item.description.replace(/<\/?[^>]+(>|$)/g, "")}
                                fontSize={item.description.length > 35 ? 13 : 15}
                                color={colors.black}
                                center
                                textStyle={{
                                    textAlign: isRtl ? "right" : "left"
                                }}

                            />
                        </View> */}

                        <View style={[
                            styles.locAddressStyle,
                            isRtl ? rtlRowStyle : rowStyle,
                            isRtl ? selfEnd : selfStart,
                            spaceBetweenItems,
                            horizontalCenteredFlex,

                        ]}>
                            {/* <Avatar source={LocImg}
                                imageStyle={styles.locStyle}
                            /> */}
                            <Icon children={<LocationMapIcon iconStyle={{
                                top: 9
                            }} />} />
                            <TextComp
                                textStyle={{
                                    minWidth: "40%", top: 3,
                                    textAlign: isRtl ? "right" : "left",
                                    marginHorizontal: isRtl ? 10 : 15
                                }}
                                children={item.address}
                                color={colors.placeholder}
                                fontSize={item.address.length > 20 ? 10 : 13}
                                center
                            />
                        </View>
                        <View style={[
                            styles.locAddressStyle,
                            isRtl ? rtlRowStyle : rowStyle,
                            isRtl ? selfEnd : selfStart,
                            spaceBetweenItems,
                            horizontalCenteredFlex,
                            {
                                bottom: 10
                            }
                        ]}>
                            {/* <Avatar source={CalculaterImg} imageStyle={{
                                width: 16,
                                height: 16.4,
                                marginEnd: 5
                            }} /> */}
                            <Icon children={<DateIcon color={colors.placeholder} width={15} height={15} iconStyle={{
                                marginTop: 5
                            }} />} />
                            <View style={{ minWidth: 150, marginHorizontal: 10 }}>
                                <TextComp
                                    children={`${item.formatted_date}`}
                                    color={colors.black}
                                    fontSize={item.address.length > 20 ? 10 : 13}
                                    textStyle={{
                                        textAlign: isRtl ? "right" : "left",
                                        width: "100%",
                                        top: 3,
                                        fontWeight: "bold"
                                    }}
                                // center
                                />
                                <TextComp
                                    children={`${item.formatted_time}`}
                                    color={colors.black}
                                    fontSize={item.address.length > 20 ? 10 : 13}
                                    textStyle={{
                                        textAlign: isRtl ? "right" : "left",
                                        width: "100%",
                                        top: 3,
                                    }}
                                // center
                                />
                            </View>
                        </View>

                    </View>
                </TouchableOpacity >
            </NoDataPlaceHolder>

        }
        )
    }, [
        data,
        fadeAnimated,
        imageFocus,
        showKey,
        editFadeAnimated,
        showEditView,
        handleDelete,
        handleNavigateEdit,
        loading
    ])


    return (
        <View style={containerStyle}>
            <List
                items={ButtonList(isRtl)}
                onHandleSelect={handleChange}
                flatViewStyle={styles.flatButStyle}
            />

            <View style={[styles.headDisplayStyle,
                rowStyle,
                spaceBetweenItems,
                horizontalCenteredFlex,
            isRtl ? selfEnd : selfStart,
            {
                marginHorizontal: isRtl ? 50 : 30
            }

            ]}>
                <View style={[
                    styles.listStyle,
                    rowStyle,
                    spaceBetweenItems,
                ]}>
                    <TextComp
                        children={isRtl ? "قائمه" : "List"}
                        fontSize={14}
                        color={
                            viewType === "list" ?
                                colors.purple :
                                colors.black
                        } />
                    <Icon children={<ListIcon iconStyle={{ bottom: viewType === "list" ? 0 : 5 }} />}
                        containerStyle={
                            viewType === "list" &&
                            [
                                styles.iconListStyle,
                                verticalCenteredFlex,
                                horizontalCenteredFlex
                            ]}
                        onPress={() => setViewType("list")} />
                </View>

                {/* containerStyle={
                        viewType === "grid" && [verticalCenteredFlex, horizontalCenteredFlex, {
                            backgroundColor: colors.whitee7, width: "25%",
                            height: 30
                        }]
                    }  */}
                <View style={{
                    width: isRtl ? "80%" : "55%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <TextComp children={isRtl ? "عرض عادي" : "Grid"} fontSize={14} color={viewType === "grid" ? colors.purple : colors.black} />

                    <Icon children={<EventGridSvg />} containerStyle={
                        viewType === "grid" && [verticalCenteredFlex, horizontalCenteredFlex, {
                            backgroundColor: colors.whitee7,
                            bottom: 3
                        }]} onPress={() => setViewType("grid")} />

                </View>


                {/* <TouchableOpacity style={viewType === "list" && [
                    spaceBetweenItems, horizontalCenteredFlex, rowStyle,
                    { width: "25%", height: 30, backgroundColor: colors.whitee7, paddingTop: 5 }
                ]} onPress={() => setViewType("list")}>
                    <Icon
                        children={<EventListSvg />}
                    // imageStyle={{ width: 25, height: 25, bottom: 3 }} source={ListImg} 
                    />
                </TouchableOpacity> */}

                {/* <TouchableOpacity style={viewType === "Grid" && [
                    verticalCenteredFlex, horizontalCenteredFlex, rowStyle,
                    { width: "25%", height: 30, backgroundColor: colors.whitee7, paddingTop: 5 }
                ]} onPress={() => setViewType("list")}> */}


                {/* </TouchableOpacity> */}

            </View>
            {viewType === "grid" && <ScrollView style={{
                padding: 10,
                marginBottom: data.length < 11 ?
                    moderateScale(-150, 1) :
                    -400
            }} >
                {Imag}
            </ScrollView>
            }
            {viewType === "list" && <ScrollView style={{ marginBottom: 0 }} >
                {ImageView}
            </ScrollView>}

            {plus && <PlusView navigation={navigation} onPress={handleNavigateAdd} style={{
                marginBottom: 70,
                marginTop: 70

            }} />}
        </View>
    );
}


EventInfoSection.defaultProps = {
    plus: true
}
export default memo(EventInfoSection)


