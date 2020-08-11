import React from 'react';
import MapView, { Marker, MapEvent } from "react-native-maps";
import { StyleSheet, View, Alert } from 'react-native';
import TextComp from "../../../components/Text";
import Geolocation from '@react-native-community/geolocation';
import Permissions from 'react-native-permissions';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import { NavigationProps } from '../../../utilities/generalInterface';
import MainContext from '../../../utilities/Context/context'
import useEditEventRequest from '../../../utilities/LogicScreens/EditEvent/hooks/useEditEventRequest'
import Avatar from '../../../components/Avatar';

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
    onChangeLoc?: (latitude: string | number, longitude: number | string) => void,
    longitude?: string,
    latitude?: string,
    setMap: (map: boolean) => void
}

const Map: React.FC<MapProps> = ({ navigation }): JSX.Element => {
    const [loc, setLoc] = useState<any>(null)
    const [event, setEvent] = useState({
        name: "",
        img: ""
    })
    const [initialRegion, setInitialRegion] = useState<any>(null)
    const { state, setContext } = useContext(MainContext)
    const { token, lang, langType } = useMemo(() => state, [state])
    const isRtl = useMemo(() => langType === "ar", [langType])
    // const {

    //     setEventInput,
    //     eventInputs,

    // } = useEditEventRequest(
    //     token,
    //     isRtl,
    //     {},
    //     {}
    // )
    // const { longitude, latitude } = eventInputs
    // console.log("events => ", eventInputs)

    const getLatLng = useCallback(() => {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude, accuracy } = position.coords;
                const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
                const latDelta = accuracy / oneDegreeOfLatitudeInMeters;
                const longDelta = accuracy / (oneDegreeOfLatitudeInMeters * Math.cos(latitude * (Math.PI / 180)));
                setContext({
                    ...state,
                    region: {
                        latitudeDelta: latDelta,
                        longitudeDelta: longDelta
                    }
                })
                console.log("cca=>", latitude, longitude)
                setInitialRegion({
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: latDelta,
                    longitudeDelta: longDelta,
                })
                setLoc(
                    {
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }
                )
                // setEventInput({
                //     ...eventInputs,
                //     lat: latitude,
                //     lng: longitude

                // })
            }
        ), { enableHighAccuracy: true, timeout: 2000, maximumAge: 2000 };
    }, [
        setLoc,
        setContext,
        setInitialRegion
    ])
    const _requestPermission = useCallback(() => {
        Permissions.request('android.permission.ACCESS_FINE_LOCATION').then((response: any) => {
            console.log("0000 00 ", response)
            if (
                response === 'denied' ||
                response === 'undetermined' ||
                response === 'denied'
            ) {
                Alert.alert("turn you Localtion")
                // _requestPermission();
            } else {
                getLatLng();
            }
        });
    }, [
        getLatLng
    ])
    useEffect(() => {
        const longitude = navigation.getParam("longitude")
        const latitude = navigation.getParam("latitude")
        setEvent({
            name: navigation.getParam("name"),
            img: navigation.getParam("img")
        })
        if (longitude || latitude) {
            setLoc({
                latitude: Number(latitude),
                longitude: Number(longitude),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            })
            setInitialRegion({
                latitude: Number(latitude),
                longitude: Number(longitude),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            })
        } else {
            _requestPermission();
        }
        // if (navigation.getParam("longitude") && navigation.getParam("latitude")) {

        // }
    }, [_requestPermission, setLoc, setInitialRegion, setEvent])
    console.log("paa", navigation.getParam("onChangeLoc"), loc)

    const onChangeLoc = navigation.getParam("onChangeLoc")


    // console.log("loc=>", loc)
    // console.log("ini=>", initialRegion)


    const longPress = useCallback((e: MapEvent) => {
        setLoc(
            {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        )

        // setEventInput({
        //     ...eventInputs,
        //     lat: e.nativeEvent.coordinate.latitude,
        //     lng: e.nativeEvent.coordinate.longitude
        // })

        onChangeLoc(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude)


    }, [
        setLoc,
        onChangeLoc
        // setEventInput
        // onChangeLoc
    ])

    // const handleChangeLocation = useCallback((latitude: string, longitude: string) => {
    //     console.log("lat laon", latitude, longitude)
    //     setEventInput({
    //         ...eventInputs,
    //         lat: latitude,
    //         lng: longitude
    //     })
    // }, [
    //     eventInputs,
    //     setEventInput
    // ])
    console.log("loc =>", loc)


    return (
        // <View style={{ flex: 1 }} >
        /* <TextComp children={"lcate map"} />
        <View style={{ flex: 1 }} > */
        /* <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10000 }}>

            </View> */
        // <ScrollView>
        /* <View style={{
            // top: -350,
            top: 0,
            // position: "absolute",
            alignSelf: "center",
            height: 150,
            flexDirection: "row",
            width: "90%",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <TextComp center children={"locate map"} color={"#000"} textStyle={{
                // top: 12,
            }} />
            <Button containerStyle={{
                width: 135,
                height: 35,
                marginLeft: 25,
                backgroundColor: "green",

            }} textStyle={{ fontSize: 12 }} title={"Back to Create Event"} onPress={() => setMap(false)} />
        </View> */
        // <Fragment>
        /* <ScrollView style={{ top: -250 }}> */
        /* <TextComp children={"Sssssssssss"} color={"#000"}></TextComp> */
        <Fragment>
            <MapView
                style={[{ ...StyleSheet.absoluteFillObject }, {
                    top: 0,
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // height: 450
                }]}
                provider="google"
                rotateEnabled={false}
                loadingEnabled
                initialRegion={initialRegion}
                onLongPress={event => longPress(event)}
            >
                {loc && <Marker coordinate={loc} />}
            </MapView >
            <Button containerStyle={{
                width: 55,
                top: 5,
                right: 15,
                height: 30,
                marginLeft: 25,
                // bottom: 150,
                backgroundColor: "green",

            }} textStyle={{ fontSize: 12 }} title={lang.Save} onPress={() => navigation.goBack()} />
        </Fragment >
        /* </ScrollView> */

        // </Fragment>

        // </ScrollView>
    );

}
export default memo(Map)
// }
// import React, { useCallback } from 'react'
// import {
//     View, TouchableOpacity
// } from 'react-native'
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import { StyleSheet } from 'react-native';
// import TextComp from '../../../components/Text'
// import Geolocation from '@react-native-community/geolocation';
// import Permissions from 'react-native-permissions';
// import styles from '../styles'
// import { isObjHasData } from '../../../utilities/infastructure/validator/isThereData';
// import colors from '../../../utilities/colors';

// const {
//     memo,
//     useState,
//     useEffect
// } = React

// interface MapProps {
//     onChangeLoc?: (latitude: string, longitude: string) => void,
//     longitude: string,
//     latitude: string,
//     setMap: (map: boolean) => void
// }

// const Map: React.FC<MapProps> = ({ onChangeLoc, longitude, latitude, setMap }): JSX.Element => {
//     const [loc, setLoc] = useState<any>({
//         latitude,
//         longitude
//     })
//     const [initialRegion, setInitialRegion] = useState<any>(null)

//     const getLatLng = useCallback(() => {
//         Geolocation.getCurrentPosition(
//             (position: any) => {
//                 console.log("pos =>")
//                 const { latitude, longitude } = position.coords;
//                 console.log("pos =>", longitude, latitude)
//                 setInitialRegion({
//                     latitude: latitude,
//                     longitude: longitude,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 })
//                 setLoc(
//                     {
//                         latitude: latitude,
//                         longitude: longitude,
//                         latitudeDelta: 0.0922,
//                         longitudeDelta: 0.0421,
//                     }
//                 )
//                 if (onChangeLoc) {
//                     onChangeLoc(latitude, longitude);
//                 }

//             },
//             (error: any) => {
//                 getLatLng();
//             },
//         );
//     }, [
//         onChangeLoc,
//         setLoc,
//         setInitialRegion
//     ])


//     const _requestPermission = useCallback(() => {
//         Permissions.request('android.permission.ACCESS_COARSE_LOCATION').then((response: any) => {
//             console.log("0000 00 ", response)
//             getLatLng()
//             if (
//                 response === 'denied' ||
//                 response === 'undetermined' ||
//                 response === 'denied'
//             ) {
//                 _requestPermission();
//             } else {
//                 getLatLng();
//             }
//         });
//     }, [
//         getLatLng
//     ])

//     // useEffect(() => {
//     //     _requestPermission();
//     // }, [
//     //     _requestPermission
//     // ])

//     const longPress = useCallback((e: any) => {
//         setLoc(
//             {
//                 latitude: e.nativeEvent.coordinate.latitude,
//                 longitude: e.nativeEvent.coordinate.longitude,
//                 latitudeDelta: 0.0922,
//                 longitudeDelta: 0.0421,
//             }
//         )

//         if (onChangeLoc) {
//             onChangeLoc(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);
//             setTimeout(() => setMap(false), 1000)
//         }
//     }, [
//         onChangeLoc,
//         setLoc,
//         setMap
//     ])
//     console.log(" loc =>", loc)


//     return (
//         <View style={styles.mapContainer} >

//             <MapView
//                 style={{ ...StyleSheet.absoluteFillObject }}
//                 provider={PROVIDER_GOOGLE}
//                 rotateEnabled={false}
//                 loadingEnabled
//                 initialRegion={initialRegion ? initialRegion : {
//                     latitude: 37.78825,
//                     longitude: -122.4324,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 }}
//                 onPress={(event: any) => longPress(event)}
//             >
//                 <Marker coordinate={loc ? loc : {
//                     latitude: 37.78825,
//                     longitude: -122.4324
//                 }} />
//             </MapView >
//         </View>
//     );
// }

// export default memo(Map)