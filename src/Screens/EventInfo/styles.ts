import { StyleSheet, Platform } from 'react-native'
import colors from '../../utilities/colors'
import { responsiveWidth } from '../../utilities/Context/responsive'

export default StyleSheet.create({
    scrollStyle: {
        top: -215
    },
    iconContentStyle: {
        width: responsiveWidth(28),
        // alignSelf: "center",
        height: 100,
        top: Platform.select({ ios: 190, android: 15 }),
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 40,
        paddingLeft: 6,
        // right: 45,
        rotation: 0,
        position: "absolute",
        left: 20,
        // position: "absolute",
        // top: 260,
        // height: 50,
        // paddingTop: 10,
        // marginLeft: 4,
        // width: "60%",
        // rotation: -3,
    },
    shadowImgStyle: {
        top: -160,
        width: 500,
        alignSelf: "center",
        height: 400,
        marginBottom: 50,
        opacity: 0.8,
        borderBottomRightRadius: 400,
        borderBottomLeftRadius: 1600,
        overflow: "hidden",

        left: -65,
        rotation: 0.6



        // width: 500,
        // height: 320,
        // top: 0,
        // marginBottom: 250,
        // // borderWidth: 1,
        // alignSelf: "center",
        // left: 0,
        // rotation: 10,
        // borderBottomRightRadius: 100,
        // overflow: "hidden",
        // // borderTopLeftRadius: 20,
        // // borderBottomLeftRadius: 100,
        // // rotation: 8
        // transform: [{ rotate: "0" }]


    },
    itemStyle: {
        zIndex: 0,
        elevation: 0,
        marginRight: 5,
        marginBottom: 35,
        marginTop: 15
    },
    firstContentStyle: {
        width: "90%",
        justifyContent: "space-evenly"
    },
    leftViewStyle: {
        width: 55,
        height: 50,
        bottom: 10,
        right: 8,
        paddingBottom: 3
    },
    avatarStyle: {
        width: 69.46,
        height: 69.46,
        borderRadius: 40
    },
    descStyle: {
        fontSize: 13,
        marginTop: 5,
        lineHeight: 13,
        // backgroundColor: colors.main,
        width: "100%"
    },
    nameStyle: {
        fontSize: 24,
        minWidth: "80%",
        top: 2,
        marginBottom: 5,
        // backgroundColor: colors.purple,
        textAlign: "left",

    },
    likeStyle: {
        width: 320,
        marginLeft: 140,
        marginTop: 10,
        marginBottom: 25,
        textAlign: "left",
    },
    emotionItemStyle: {
        height: 80,
        width: "80%",
        marginBottom: 30,
        marginEnd: 35
    },
    recommendedStyle: {
        width: 52
    },
    textAreaStyle: {
        height: 144,
        borderRadius: 10,
        marginTop: 35,
        paddingBottom: 90,
        marginBottom: 20
    },
    lastButStyle: {
        top: -75,
        height: 60,
        backgroundColor: colors.purple,
        marginBottom: 30
    },
    rtlTxtStyle: {
        marginRight: 40,
        marginTop: 10,
        marginBottom: 25,
        width: 320,
        textAlign: "right",
        backgroundColor: "red",
        alignSelf: "flex-start"

    }
})