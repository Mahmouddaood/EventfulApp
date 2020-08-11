import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'


export default StyleSheet.create({
    shadowBottomStyle: {
        bottom: 0,
        height: 52,
        elevation: 15,
        backgroundColor: colors.background,
        position: "absolute",
    },
    bottomViewStyle: {
        bottom: 0,
        position: "absolute",
        height: 50,
        backgroundColor: colors.white
    },
    backImgStyle: {
        left: 10,
        width: 50,
        top: 5,
        height: 90,
        padding: 32,
        justifyContent: "center",
        alignItems: "center"
        // backgroundColor: colors.black

    },
    backStyle: {
        // backgroundColor: colors.black,
        // position: "absolute",
        left: 20,
        width: 30,
        top: 5,
        height: 60,
        // padding: 32,
        justifyContent: "center",
        alignItems: "center"
    },
    imgContentStyle: {
        width: 140,
        height: 80,
        bottom: 35,
        position: "absolute",
        // backgroundColor: colors.black,
        left: -80,
        // marginEnd: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    pressedBackImgStyle: {
        width: 140,
        // marginRight: 75,
        bottom: -25,
        padding: 50,
        left: -15,
        borderWidth: 0,
        position: "absolute",
        overflow: "hidden",
    },
    innerImgStyle: {
        top: 2,
        width: 23,
        height: 22,
        // borderRadius: 12
        // left: 35,

    },
    contentTabStyle: {
        width: "78%",
        height: 70,
        paddingTop: 6,
        justifyContent: "space-around",
        // left: 93,
        borderTopLeftRadius: 30,
        // backgroundColor: colors.white
    },
    imageStyle: {
        width: 21,
        height: 21,
        // borderRadius: 4,
        // backgroundColor: colors.mainColor
    },
    groupImgStyle: {
        width: 4,
        height: 21
    },
    bottomContentStyle: {
        backgroundColor: colors.black
    },
    tabItemStyle: {
        width: 34,
        height: 34,
        borderRadius: 12,
        // backgroundColor: colors.black

    }
})