import { StyleSheet } from 'react-native'
import colors from '../../../../utilities/colors'

export default StyleSheet.create({
    scrollStyle: {
        paddingTop: 30,
        // marginBottom: 50
    },
    headVStyle: {
        // top: 12,
        height: 70,
        width: "86%",
        bottom: 5
        // marginBottom: 15
    },

    firstTextStyle: {
        color: colors.black,
        fontSize: 18
    },
    endTextStyle: {
        // width: 170,
        // textAlign: "center",
        color: colors.black,
    },

    firstContentStyle: {
        width: "90%"
    },
    nameStyle: {
        fontSize: 20,
        marginBottom: 7,
        textAlign: "left"
    },
    itemStyle: {
        zIndex: 0,
        elevation: 0,
    },
    avatarStyle: {
        width: 82,
        height: 82,
        borderRadius: 40
    },
    descStyle: {
        fontSize: 14,
        left: 3
    },
    anthorProfileStyle: {
        // top: 10,
        paddingLeft: 18,
        height: 90,
        // marginBottom: 5
    },
    infoStyle: {
        height: 45,
        // top: 10,
        paddingLeft: 10
    },
    infoItemStyle: {
        minWidth: 77,
        height: 45,
        elevation: 1,
        borderRadius: 5,
        shadowRadius: 15,
        paddingTop: 6,
        paddingHorizontal: 5,
        marginRight: 12
    },
    infoTxtStyle: {
        fontSize: 14,
        color: colors.black
    },
    iconContainerStyle: {
        width: "99%",
        height: 35,
        marginLeft: 18,
        top: 20,
        alignItems: "center"
    },
    lastViewStyle: {
        height: 100,
        width: "90%",
        marginLeft: 8,
        alignItems: "flex-end",
        marginBottom: 100,
        bottom: 40
    },
    iconTxtStyle: {
        width: "85%"
    },
    changePassStyle: {
        bottom: 5,
        marginEnd: 6
    },
    interstStyle: {
        marginEnd: 12
    },
    modalViewStyle: {
        width: "92%",
        marginHorizontal: 8,
        minHeight: 200,
        marginTop: 120,
        backgroundColor: colors.background
    },
    headPassStyle: {
        width: "97%",
        margin: 10
    },
    passTxtStyle: {
        margin: 8
    },
    iconImgStyle: {
        width: 23,
        height: 22
    },
    savePassButStyle: {
        fontSize: 11,
        width: "48%",
        backgroundColor: colors.purple,
        height: 39,
        borderRadius: 15,
        margin: 12,
        color: colors.whitee7,
        textAlign: "center"
    },
    rtlNameStyle: {
        textAlign: "right", left: 15
    }

})