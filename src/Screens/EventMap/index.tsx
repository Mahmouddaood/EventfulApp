import React from 'react';
import MapView, { Marker, MapEvent, Region, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import RNSettings from 'react-native-settings'
import { StyleSheet, View, Alert, ScrollView, TouchableOpacity, Linking, Dimensions } from 'react-native';
import TextComp from "../../components/Text";
import Geolocation from '@react-native-community/geolocation';
import Permissions from 'react-native-permissions';
import Button from '../../components/Button';
import { NavigationProps } from '../../utilities/generalInterface';
import MainContext from '../../utilities/Context/context'
import Avatar from '../../components/Avatar';
import colors from '../../utilities/colors';
import Icon from '../../components/Icon'
import MapsIcon from '../../components/MapsIcon'
import {
    EventfulDataProps, EventItem
} from '../Profile/index.interface'
import useFetchEventsRequest from '../../utilities/LogicScreens/Home/hooks/useFetchEventsRequest'
import LocProps from '../Localization/index.interface';
import {
    isObjHasData, isArrayHasData
} from '../../utilities/infastructure/validator/isThereData'
import BottomTab from '../../components/BottomTab'
import usePrevious from '../../utilities/infastructure/Hooks/usePrevious';
import LocationMapIcon from '../../components/LocationMapIcon';
import { event } from 'react-native-reanimated';
const LocImg = require("../../assests/eventfulAssests/images/LocImg.png")
const MapImg = require("../../assests/eventfulAssests/images/pin.png")

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const ASPECT_RATIO = screenWidth / screenHeight;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const {
    useState,
    useEffect,
    useRef,
    memo,
    useCallback,
    Fragment,
    useContext,
    useMemo
} = React
interface MapProps extends NavigationProps {

}
interface LocStateProps {
    loc: LocationProps,
    initialRegion: LocationProps,
    selevtedEvent: EventItem
}
interface LocationProps {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
}

const EventMap: React.FC<MapProps> = ({ navigation }): JSX.Element => {
    const [state, updateState] = useState<LocStateProps | any>({
        loc: {
            latitude: undefined,
            longitude: undefined,
            latitudeDelta: undefined,
            longitudeDelta: undefined,
        },
        selectedEvent: {},
        initialRegion: {
            latitude: undefined,
            longitude: undefined,
            latitudeDelta: undefined,
            longitudeDelta: undefined
        },
        accuracy: undefined
    })
    const {
        selectedEvent,
        initialRegion,
        loc
    } = useMemo(() => state, [state])
    const prevRegion = usePrevious(initialRegion)
    const regionChanged = useMemo(() => prevRegion !== initialRegion, [prevRegion, initialRegion])
    const { state: globalState, setContext } = useContext(MainContext)
    const { token, lang, langType, locationOpened, lat, lng } = useMemo(() => globalState, [state])
    const locPrev = usePrevious(locationOpened)
    const locChanged = locPrev !== locationOpened
    const locOpen = useMemo(() => locationOpened === true, [locationOpened])
    const isRtl = useMemo(() => langType === "ar", [langType])
    const {
        data: eventData
    } = useFetchEventsRequest(isRtl, isRtl ? "name_ar" : "name_en")
    // const [initialRegion, setInitialRegion] = useState<any>(null)
    const getLatLng = useCallback(() => {


        // Geolocation.watchPosition((res: any) => console.log("loc op", res), (err: any) => console.log("loc no", err))
        // if (locationOpened) {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude, accuracy } = position.coords;
                console.log("cca=>", latitude, longitude)
                // const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
                // const circumference = (40075 / 360) * 1000;

                // let latDelta = accuracy * (1 / (Math.cos(latitude) * circumference));
                // let lonDelta = (accuracy / oneDegreeOfLongitudeInMeters);


                //   latitudeDelta: Math.max(0, latDelta),
                //   longitudeDelta: Math.max(0, lonDelta)
                updateState({
                    ...state,
                    loc: {
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        // latitudeDelta: Math.max(0, latDelta),
                        // longitudeDelta: Math.max(0, lonDelta)
                    },
                    initialRegion: {
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        // latitudeDelta: Math.max(0, latDelta),
                        // longitudeDelta: Math.max(0, lonDelta)
                    },
                    accuracy
                }

                )
                // setContext({
                //     ...globalState,
                //     // deviceLocation: {
                //     lat: latitude,
                //     lng: longitude
                //     // }
                // })


            },
            (error) => {
                console.log(JSON.stringify(error))
                // Alert.alert("turn you Localtion")
                // setContext({
                //     ...globalState,
                //     locationOpened: !locationOpened,

                // })
            }, { enableHighAccuracy: true, timeout: 6000, maximumAge: 6000 }
        );
        // } else {
        // Geolocation.watchPosition((position: any) => {
        //     updateState({
        //         ...state,
        //         loc: {
        //             latitude: position.coords.latitude,
        //             longitude: position.coords.longitude,
        //             latitudeDelta: LATITUDE_DELTA,
        //             longitudeDelta: LONGITUDE_DELTA,
        //             // latitudeDelta: Math.max(0, latDelta),
        //             // longitudeDelta: Math.max(0, lonDelta)
        //         },
        //         initialRegion: {
        //             latitude: position.coords.latitude,
        //             longitude: position.coords.longitude,
        //             latitudeDelta: LATITUDE_DELTA,
        //             longitudeDelta: LONGITUDE_DELTA,
        //         }
        //     })
        // })
        // // }


    }, [
        // updateState,
        // Geolocation,
        // globalState,
        // setContext,
        // state

        // state
    ])
    const _requestPermission = useCallback(() => {
        Permissions.request('android.permission.ACCESS_FINE_LOCATION').then((response: any) => {
            console.log("0000 00 ", response)
            getLatLng()
            // if (
            //     response === 'denied'
            //     // response === 'undetermined' ||
            //     // response === 'denied'
            // ) {
            //     Alert.alert("turn you Localtion")
            //     // _requestPermission();
            // } else {
            //     getLatLng();
            // }
        });
    }, [
        getLatLng,

    ])

    useEffect(() => {
        // if (locChanged) {
        // _requestPermission()
        // if (lat !== undefined) {
        //     updateState({
        //         ...state,
        //         loc: {
        //             latitude: lat,
        //             longitude: lng,
        //             latitudeDelta: 0.0922,
        //             longitudeDelta: 0.0421,
        //             // latitudeDelta: Math.max(0, latDelta),
        //             // longitudeDelta: Math.max(0, lonDelta)
        //         },
        //         initialRegion: {
        //             latitude: lat,
        //             longitude: lng,
        //             latitudeDelta: 0.0922,
        //             longitudeDelta: 0.0421,
        //             // latitudeDelta: Math.max(0, latDelta),
        //             // longitudeDelta: Math.max(0, lonDelta)
        //         },



        //     }

        //     )
        // } else {
        Permissions.request('android.permission.ACCESS_FINE_LOCATION').then((response: any) => {
            RNSettings.getSetting(RNSettings.LOCATION_SETTING).then((result: any) => {
                if (result == RNSettings.ENABLED) {
                    console.log('location is enabled', result);
                    getLatLng()
                } else {
                    Alert.alert("Open your location", "", [
                        {
                            text: "open", onPress: () => {
                                RNSettings.openSetting(RNSettings.ACTION_LOCATION_SOURCE_SETTINGS).then(
                                    (result: any) => {
                                        console.log('location is on open', result);

                                        if (result === RNSettings.ENABLED) {
                                            getLatLng()
                                        }
                                    })
                            }
                        },
                    ], { cancelable: true })
                }
            });
        })
        // }
    }, [getLatLng, locChanged])

    const longPress = useCallback((e: MapEvent) => {
        updateState({
            ...state,
            loc: {

                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            initialRegion: {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }


        })
    }, [
        updateState,
        state
    ])


    const changeLocation = useCallback((event: EventItem) => () => {

        // const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
        // const circumference = (40075 / 360) * 1000;

        // const latDelta = state.accuracy * (1 / (Math.cos(event.lat) * circumference));
        // const lonDelta = (state.accuracy / oneDegreeOfLongitudeInMeters);


        //   latitudeDelta: Math.max(0, latDelta),
        //   longitudeDelta: Math.max(0, lonDelta)
        updateState({
            ...state,
            // loc: {
            //     latitude: Number(event.lat),
            //     longitude: Number(event.lng),
            //     latitudeDelta: 0.0922,
            //     longitudeDelta: 0.0421
            //     // latitudeDelta: 0.0043,
            //     // longitudeDelta: 0.0034
            //     // latitudeDelta: Math.max(0, latDelta),
            //     // longitudeDelta: Math.max(0, lonDelta)
            // },
            initialRegion: {
                latitude: Number(event.lat),
                longitude: Number(event.lng),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
                // latitudeDelta: 0.0043,
                // longitudeDelta: 0.0034
                // latitudeDelta: Math.max(0, latDelta),
                // longitudeDelta: Math.max(0, lonDelta)
            },
            selectedEvent: event


        })




    }, [
        updateState,
        state
    ])
    console.log("loc =>", loc, initialRegion, eventData.length)


    const RenderMap = useMemo(() => loc.latitude !== undefined && isArrayHasData(eventData) && <MapView
        style={[{ ...StyleSheet.absoluteFillObject }, {
            top: 0,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            // height: 450
        }]}
        // ref={(m: any) => useRef}


        provider={PROVIDER_GOOGLE}
        rotateEnabled={false}
        loadingEnabled
        region={initialRegion}

        // onRegionChange={(region: Region) => {
        //     console.log("region", region)
        //     updateState({
        //         ...state,
        //         initialRegion: region,
        //         loc: region
        //     })
        // }}
        onLongPress={event => longPress(event)}
    >

        {loc.latitude !== undefined && <Marker
            coordinate={loc}
        />}

        {loc.latitude !== undefined && eventData.map((item: EventfulDataProps) => {
            return item.events.map((event: EventItem, idx: number) => {

                console.log("event => ", event, item.events.length)
                return <Marker key={event.id} coordinate={{
                    latitude: Number(event.lat),
                    longitude: Number(event.lng),
                }}
                    children={
                        <Fragment>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("EventDetail", {
                                    data: event
                                })}
                                style={{
                                    width: 240,
                                    height: 115,
                                    // borderWidth: 0

                                }}>
                                <TouchableOpacity onPress={() => navigation.navigate("EventDetail", {
                                    data: event
                                })} style={{
                                    width: 240,
                                    height: 80,
                                    backgroundColor: colors.background,
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexDirection: "row",
                                    borderRadius: 10,
                                    paddingHorizontal: 7,
                                    borderWidth: 1.5,
                                    borderColor: colors.placeholder,
                                    // bottom: 3
                                }}>
                                    {/* <View style={{
                            width: "90%",
                            flexDirection: "row",
                            height: "55%",
                            // backgroundColor: "#000",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}> */}

                                    <Avatar
                                        source={{
                                            uri:
                                                // selectedEvent.lat !== undefined ?
                                                //     selectedEvent.photo_url :
                                                event.photo_url
                                        }}
                                        imageStyle={{
                                            width: "43%",
                                            height: 70,
                                            borderRadius: 13,
                                            borderColor: "#ced4e2",
                                            borderWidth: 1

                                        }}
                                    />

                                    {/* </View> */}
                                    <View style={{
                                        width: "70%",
                                        height: "100%",
                                        marginTop: 5,
                                        paddingRight: 40,
                                        // paddingTop: ,
                                        // backgroundColor: "#000",
                                        marginStart: 10
                                    }}
                                    >
                                        <TextComp children={
                                            // selectedEvent.lat !== undefined ?
                                            //     selectedEvent.name :
                                            event.name
                                        }
                                            fontSize={15}
                                            color={colors.mainColor}
                                            textStyle={{
                                                textAlign: "right"
                                            }}
                                        />


                                        <TextComp
                                            children={
                                                // selectedEvent.lat !== undefined ?
                                                // selectedEvent.address :
                                                event.address
                                            }
                                            color={"green"}
                                            fontSize={
                                                event.address.length > 25 ? 8 : 13
                                            }
                                            textStyle={{
                                                marginVertical: 3,
                                                width: "100%",
                                                bottom: 2,
                                                // selectedEvent.address.length > 25 ? 2 : 8,
                                                textAlign: "right"
                                            }}
                                        />
                                        <View style={{
                                            flexDirection: "row-reverse",
                                            justifyContent: "space-between",
                                        }}>
                                            <TextComp
                                                textStyle={{
                                                    textAlign: "right",
                                                    bottom: 2

                                                }}
                                                children={
                                                    // selectedEvent.lat !== undefined ?
                                                    // selectedEvent.formatted_date :
                                                    event.formatted_date
                                                }
                                                color={colors.black}
                                                fontSize={11}

                                            />
                                            <View style={{
                                                top: 5
                                            }}>
                                                <TextComp children={"To Maps"}
                                                    fontSize={13}
                                                    color={colors.mainBlueSky}
                                                    textStyle={{
                                                        textAlign: "right",
                                                        fontWeight: "bold"
                                                    }}
                                                />
                                                <View style={{
                                                    width: 45,
                                                    height: 1,
                                                    backgroundColor: "green"
                                                }}>
                                                </View>

                                            </View>
                                        </View>


                                        {/* <Button onPress={() => navigation.navigate("EventDetail", {
                                data: selectedEvent
                            })} title={"go to event"} /> */}
                                    </View>


                                </TouchableOpacity>


                                <Avatar source={MapImg} imageStyle={[{
                                    width: 35,
                                    height: 35,
                                    position: "absolute",
                                    // alignSelf: "center"
                                }, Number(event.lat) !== undefined && {
                                    bottom: 0,
                                    alignSelf: "center"
                                }]} />
                            </TouchableOpacity>
                            <Callout style={{
                                width: 20,
                                height: 20,
                                // backgroundColor: "#000"
                            }} onPress={() => Linking.openURL(`https://www.google.com/maps/place/${event.address}/@${event.lat},${event.lng},15z`)}>
                                <Icon children={<MapsIcon height={21} width={22} iconStyle={{
                                    left: 0,
                                    bottom: 2
                                }} />} onPress={() => Linking.openURL(`https://www.google.com/maps/place/${event.address}/@${event.lat},${event.lng},15z`)} />

                            </Callout>
                        </Fragment>
                    }

                />
            })
        })}


        {/* } */}
    </MapView >

        , [
            longPress,
            initialRegion,
            loc,
            state,
            isRtl,
            navigation,
            selectedEvent,
            eventData,
            updateState
        ])

    return (

        <Fragment>
            {RenderMap}

            {/* <Button containerStyle={{
                width: 55,
                top: 5,
                right: 15,
                height: 30,
                marginLeft: 25,
                // bottom: 150,
                backgroundColor: "green",

            }} textStyle={{ fontSize: 12 }} title={lang.Save} onPress={() => navigation.goBack()} /> */}
            <View style={{
                // backgroundColor: colors.black,
                width: "100%",
                height: 75,
                alignSelf: "flex-end",
                marginTop: 12

            }}>
                <ScrollView horizontal >
                    {eventData.map((item: EventfulDataProps) => {
                        return item.events.map((event: EventItem) =>
                            <TouchableOpacity style={{
                                width: 150,
                                height: "100%",
                                marginHorizontal: 5,
                                backgroundColor: colors.white,
                                borderRadius: 10,
                                elevation: 1,
                                padding: 8,
                                zIndex: 500,
                                borderWidth: 2,
                                borderColor: "#ced4e2"
                            }}
                                onPress={changeLocation(event)}
                            >
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}>
                                    <Icon
                                        onPress={() => Linking.openURL(`https://www.google.com/maps/place/${event.address}/@${event.lat},${event.lng},15z`)}
                                        children={<MapsIcon height={18} width={20} onPress={() => Linking.openURL(`https://www.google.com/maps/@${event.lat},${event.lng},15z`)}
                                        />} />
                                    <TextComp children={event.name} color={colors.mainColor} />
                                </View>

                                <View style={{
                                    width: "100%",
                                    height: "55%",
                                    // marginTop: 5,
                                    // justifyContent: "space-between",
                                    alignItems: "center",
                                    flexDirection: "row",
                                }}>
                                    <Icon children={<LocationMapIcon iconStyle={{
                                        top: 3
                                    }} />} />
                                    <TextComp
                                        center
                                        children={event.address}
                                        color={colors.main}
                                        fontSize={event.address.length > 25 ? 9 : 12}
                                        textStyle={{
                                            // backgroundColor: "#000",
                                            textAlign: "left",
                                            width: "80%"
                                        }}
                                    />

                                </View>
                            </TouchableOpacity>
                        )

                    })}
                </ScrollView>

            </View>



            <BottomTab
                selectedTab={"EventMap"}
                navigation={navigation}
            // bottomViewStyle={styles.bottomViewStyle}
            />
        </Fragment >
    );

}
export default memo(EventMap)
