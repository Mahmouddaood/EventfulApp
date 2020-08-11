import { StyleSheet, Platform } from 'react-native'
import colors from '../../utilities/colors'
import { moderateScale, responsiveHeight } from '../../utilities/Context/responsive'


export default StyleSheet.create({
    dragStyle: {
        height: 200,
        width: "91%",
        borderRadius: 20,
        bottom: moderateScale(82, 1),
        // top: -350,
        zIndex: 1000,
        elevation: 1
    },
    rtlIconStyle: {
        position: "absolute",
        rotation: -4,
        top: Platform.select({ ios: -25, android: -20 }),
        right: Platform.select({ ios: 40, android: 270 })
    },
    rtlLogoStyle: {
        // left: Platform.select({ ios: 75, android: 55 }),
        // // marginTop: 5,
        // width: "30%",
        // alignSelf: "center",
        backgroundColor: "#000",
        bottom: 20,
        // paddi
        // justifyContent: "flex-start"

    },
    locImgStyle: {
        width: 19,
        height: 23,
    },
    loginImgStyle: {
        height: responsiveHeight(29)
    },
    screenNameStyle: {
        fontSize: 24,
    },
    secondTxtStyle: {
        fontSize: 18,
        // width: "100%"
    },
    iconStyle: {
        top: -80,
        padding: 3,
        rotation: -4,
        left: -30,
        width: 95,
        paddingLeft: 25,
        paddingTop: 10,
        height: 35,

        // backgroundColor: "#000"
        // alignSelf: "center",
        // backgroundColor: colors.black
    },
    logoStyle: {
        // paddingTop: 30,
        // marginTop: 270,
        // paddingHorizontal: 30,
        // marginHorizontal: 20,
        // alignItems: "flex-end",
        // flexDirection: "row-reverse",
        // justifyContent: "space-between",
        width: "95%",
        height: "22%",
        // justifyContent: "space-between",
        paddingHorizontal: "4%",
        alignSelf: "center",
        paddingTop: "14%"
        // left: 170,
        // top: 280,
        // rotation: 0.1,
    },
    ViewInputStyle: {
        width: "93%",
        minHeight: 500,
        marginLeft: 5,
        paddingTop: 5,
        bottom: moderateScale(80, 1),
        marginBottom: -180
    },
    inputStyle: {
        height: 52
    },
    textAreaStyle: {
        height: 110,
        paddingBottom: 50
    },
    selectStyle: {
        height: 52,
        borderRadius: 8,
    },
    catStyle: {
        marginBottom: 25
    },
    locationViewStyle: {
        minHeight: 50,
        paddingLeft: 0,
        paddingBottom: 12,
        margin: 5
    },
    SelectTxtViewStyle: {
        minHeight: 120,
        paddingTop: 13,
    },
    buttonStyle: {
        bottom: 80,
        marginRight: 10,
        backgroundColor: colors.purple
    },
    mapContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        minHeight: "80%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    multiImageStyle: {
        width: 65,
        height: 60,
        marginBottom: 10,
        marginRight: 10,
        borderRadius: 15
    },
    plusStyle: {
        position: "absolute",
        bottom: -20,
        right: -75
    }

})