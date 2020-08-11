import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'

export default StyleSheet.create({
    scrollStyle: {
        top: -215,
        marginBottom: -100
    },
    iconViewStyle: {
        width: "30%",
        height: 40,
        marginBottom: 8,
        marginLeft: 30,

    },
    imageStyle: {
        width: 18,
        height: 18,
        left: -40
    },
    iconContentStyle: {
        width: "24%"
    },
    subDetailStyle: {
        width: "90%",
        marginBottom: 15,
        marginTop: 0,
        marginLeft: 12
    },
    detailStyle: {
        width: 350,
        marginTop: 15,
        marginLeft: 25
    },
    photoTextStyle: {
        marginLeft: 35,
        marginBottom: 20,
        marginTop: 10
    },
    rtlPhotoTextStyle: {
        marginRight: 35,
        marginBottom: 20,
        marginTop: 10
    },
    avatarStyle: {
        width: 98,
        height: 100,
        borderRadius: 17,
        marginHorizontal: 6,

    },
    imgViewStyle: {
        marginHorizontal: 10,
        marginTop: 15,

    },
    reviewStyle: {
        height: 60,
        width: "88%",
        alignItems: "center",
    },
    reviewDetailStyle: {
        height: 115,
        width: "85%",
        marginBottom: 7
    },
    buttonContentStyle: {
        width: 33,
        height: 33,
        backgroundColor: colors.purple,
    },
    itemStyle: {
        height: 65,
        zIndex: 0,
        elevation: 0,
    },
    nameStyle: {
        marginTop: 23,
        minWidth: "100%",
        fontSize: 16,


    },
    followImageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    betweenLineStyle: {
        height: 0.7,
        width: "90%",
        backgroundColor: colors.placeholder
    },
    addRevButStyle: {
        width: "90%",
        height: 55,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.purple,
        marginTop: 30,
        // marginBottom: -8
    },
    addImgStyle: {
        width: 17,
        height: 16,
        marginRight: 5,
        color: colors.purple,
    },
    joinStyle: {
        height: 52,
        width: "90%",
        marginBottom: 0,
        bottom: 8,
        // marginTop: 5,
        backgroundColor: colors.flowerColor
    },
    modalStyle: {
        backgroundColor: colors.lightPurp,
        borderRadius: 25,
        width: "94%",
        minHeight: 335,
        marginTop: 85,
        elevation: 1,
        padding: 8
    },
    inputCommentStyle: {
        height: 120,
        marginTop: 20,
        paddingBottom: 45
    },
    closeModStyle: {
        backgroundColor: colors.flowerColor,
        width: 80,
        height: 40,
        borderRadius: 15,
        marginBottom: 5,
        marginTop: 8
    },
    animatedStyle: {
        height: 360,
        // bottom: 85,
        elevation: 1,
        zIndex: 1000,
        backgroundColor: colors.lightPurple
        // position: "absolute",
    },
    firstPartStyle: {
        backgroundColor: colors.lightPurple,
        height: "25%",
        padding: 25,
        width: "90%",
        marginBottom: 12
    },
    ownerLogoStyle: {
        width: 55,
        height: 55,
        marginRight: 15,
        borderRadius: 10
    },
    shareTxtStyle: {
        width: "62%",
        marginRight: 10
    },
    shareButStyle: {
        width: 86,
        height: 40,
        backgroundColor: colors.flowerColor,
        borderRadius: 15,
    },
    inputStyle: {
        elevation: 0,
        zIndex: 0,
        backgroundColor: colors.background,
        height: 80,
        borderWidth: 0,
        borderRadius: 0,
        paddingBottom: 45,
        marginBottom: 0
    },
    lineStyle: {
        height: 0.5,
        backgroundColor: colors.placeholder,
    },
    itemShareStyle: {
        backgroundColor: colors.background,
        height: "12%",
        paddingLeft: 25,
    },
    contactIconStyle: {
        marginRight: 35,
        width: 16,
        height: 15,
        left: 15,
        marginBottom: 5,
        marginTop: 5
    },
    rtlContactIconStyle: {
        left: 0,
        marginLeft: 25
    },
    contactViewStyle: {
        width: "52%",
        left: 90,
        bottom: 8
    },
    descViewStyle: {
        width: "90%",
        bottom: 18,
        justifyContent: "flex-start",
        padding: 14,
        // backgroundColor: colors.black

    },
    ticketStyle: {
        width: "70%",
        padding: 4,
        margin: 6,
        // alignItems: "flex-end"
    },
    imageViewerStyle: {
        width: 330,
        height: 300,
        margin: 20,
        borderRadius: 15,
        alignSelf: "center"
    },
    closeButStyle: {
        backgroundColor: colors.purple,
        width: 70,
        height: 30,
        // top: 250
        bottom: 0
    }

})