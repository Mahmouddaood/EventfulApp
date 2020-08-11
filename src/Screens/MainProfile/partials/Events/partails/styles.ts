import { StyleSheet } from 'react-native'
import colors from '../../../../../utilities/colors'

export default StyleSheet.create({
    imgViewStyle: {
        marginHorizontal: 0,
        width: "100%",
        marginTop: 5,
        alignSelf: "center",
        justifyContent: "center"

    },
    avatarStyle: {

        borderRadius: 15,
        width: "100%",
        height: 150,
        margin: 12,
        alignSelf: "center",
        overflow: "hidden",

        // aspectRatio: 1
        // marginBottom: 25

    },
    plusViewStyle: {
        width: 55,
        height: 55,
        marginLeft: 50,
        borderRadius: 30,
        alignSelf: "flex-end",
        marginBottom: 25,
        marginRight: 15,
        marginTop: 60,
        backgroundColor: colors.flowerColor
    },
    plusImgStyle: {
        width: 15,
        height: 16,
        color: colors.white,
    },

    iconVStyle: {
        width: 25,
        height: 30,
        alignSelf: "flex-end",
        margin: 3,
        position: "absolute"
    },
    innerStyle: {
        width: 4,
        height: 4.5,
        backgroundColor: colors.white,
        margin: 2
    },
    edtNStyle: {
        height: "50%",
        borderRadius: 8,
        padding: 6,
        width: "80%",
        opacity: 3,
        top: 30,
        backgroundColor: colors.white

    },
    rtlEditTxtStyle: {
        padding: 8,
        marginHorizontal: 3,
        textAlign: "center"
    },
    editTxtStyle: {
        padding: 8,
        marginRight: 10,
        width: "110%",


    },
    delTxtStyle: {
        padding: 0,
        marginHorizontal: 13,

    },
    fadeVStyle: {
        opacity: 6,
        height: 165,
        padding: 13,
        // bottom: -100,
        borderRadius: 5,
        elevation: 1,
        zIndex: 1000,
        // -150
        width: "100%",
        paddingTop: 20
        // backgroundColor: colors.black,


    },
    locStyle: {
        width: 14,
        height: 17.5,
        // width: 15,
        // height: 18,
        marginEnd: 5,
        top: 4

    },
    listImgStyle: {
        width: "50%",
        height: "97%",
        borderRadius: 15,
        overflow: "hidden",
        aspectRatio: 1

    },
    flatButStyle: {
        marginTop: 40
    },
    headDisplayStyle: {
        width: "30%",
        padding: 2,
        margin: 15,
        height: 30,

    },
    listStyle: {
        width: "50%",
        marginEnd: 6
    },
    iconListStyle: {
        backgroundColor: colors.whitee7,
        bottom: 4,
        padding: 10
    },
    itemStyle: {
        elevation: 5,
        backgroundColor: "#ced4e2",
        height: 146,
        marginRight: 10,
        width: "44%",
        borderRadius: 15,
    },
    deleteModalStyle: {
        width: "80%",
        height: 120,
        backgroundColor: colors.whitee7,
        marginTop: 150,
        borderRadius: 25,
        padding: 25,
        zIndex: 1000,
        elevation: 1,
    },
    chooseStyle: {
        marginTop: 25, width: "60%"
    },
    chooseButStyle: {
        width: 50,
        height: 35,
        borderRadius: 10,
    },
    detailImgStyle: {
        width: "53%",
        height: 130,
        paddingTop: 0
        // paddingRight: 12,
    },
    locAddressStyle: {
        height: 50,
        bottom: 3,
        paddingHorizontal: 10,
        minWidth: "60%",
    },
    timeViewStyle: {
        width: "100%",
        paddingTop: 13,
        height: 70,
        paddingHorizontal: 10
    },
    gridItemStyle: {
        width: "45%",
        marginEnd: 12,


    },
    timeDescStyle: {
        height: 50,
        marginBottom: 15,
        marginTop: 15,
    },
    addressStyle: {
        marginTop: 8
    },
    detailViewStyle: {
        backgroundColor: colors.white,
        minHeight: 60,
        padding: 6,
        top: 92,
        // borderRadius: 5
    }
})