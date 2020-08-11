import { StyleSheet } from 'react-native'
import colors from '../../../../utilities/colors'

export default StyleSheet.create({
    imgViewStyle: {
        marginHorizontal: 15,
        width: "95%",
        marginBottom: 10

    },
    avatarStyle: {
        width: "75%",
        height: 210,
        marginRight: 10,
        borderRadius: 25,

    },
    plusViewStyle: {
        width: 55,
        height: 55,
        marginLeft: 50,
        borderRadius: 30,
        alignSelf: "flex-end",
        marginBottom: 25,
        marginRight: 15,
        bottom: 50,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.mainColor

    },
    plusImgStyle: {
        width: 15,
        height: 14,
        color: colors.white,
    },












    iconVStyle: {
        width: 25,
        height: 30,
        alignSelf: "flex-end",
        margin: 5
    },
    innerStyle: {
        width: 4,
        height: 4.5,
        backgroundColor: colors.white,
        margin: 2
    },
    edtNStyle: {
        height: "56%",
        borderRadius: 8,
        padding: 6,
        width: "70%",
        opacity: 3
    },
    editTxtStyle: {
        padding: 12,
        marginLeft: 3
    },
    delTxtStyle: {
        padding: 4,
        marginLeft: 13
    },
    fadeVStyle: {
        height: "54%",
        borderRadius: 5,
        padding: 3,
        bottom: -74,
        width: "100%",
        marginLeft: 0,
        backgroundColor: colors.white,
        opacity: 3
    },
    locStyle: {
        width: 15,
        height: 15,
        marginRight: 8
    }
})