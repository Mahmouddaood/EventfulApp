import { StyleSheet, Platform } from 'react-native'
import colors from '../../../utilities/colors'

export default StyleSheet.create({
    addTxtViewStyle: {
        padding: 20,
        marginTop: 10
    },
    inputStyle: {
        width: "93%"
    },
    searchViewStyle: {
        marginTop: 40,
        height: 45,
        width: "70%",
        alignSelf: "center",
        borderWidth: 0.3,
        borderRadius: 10,
        borderColor: colors.placeholder
    },
    searchInputStyle: {
        width: "80%",
        borderRadius: 10,
        paddingLeft: 15,
        // marginLeft: 30,
    },
    searchIconStyle: {
        right: 0,
        marginTop: 5,
        position: "absolute"
    },
    offerStyle: {
        height: 46,
        width: "20%",
        right: 20,
        bottom: 5,
        borderRadius: 10,
        paddingLeft: 8,
        borderWidth: 0.2
    },
    forwardIconStyle: {
        left: 18,
        top: 10
    },
    recordStyle: {
        height: 30,
        padding: 16,
        margin: 12
    },
    itemStyle: {
        backgroundColor: "#eee",
        width: "93%",
        marginHorizontal: 12,
        height: 100,
        borderRadius: 25,
        borderWidth: 0.3,
        padding: 20,
        marginBottom: 15
    },
    firstSecStyle: {
        width: "100%",
        height: 30,
        marginHorizontal: 10,
    },
    lineStyle: {
        width: "100%",
        height: 1,
        left: 2,
        backgroundColor: colors.placeholder
    },
    buttonStyle: {
        width: 200,
        height: 40,
        // marginTop: 15,
        backgroundColor: colors.purple,
    },
    paidViewStyle: {
        marginBottom: 60
    },
    paidItemStyle: {
        bottom: 10,
    },
    titleViewStyle: {
        width: "70%",
    },
    rtlIdStyle: {
        width: "40%",
        left: -60
    },
    idStyle: {
        width: "45%",
        // marginRight: 5
        // top: 5,
        // backgroundColor: "red"
    },
    indicatorStyle: {
        // paddingLeft: 40
    },
    rtlTitleStyle: {
        marginRight: 62,
        width: Platform.select({ android: "180%", ios: "240%" }),
        textAlign: "right"
    },
    titleStyle: {
        width: "100%",
        // backgroundColor: "green",
    },
    secondSectionStyle: {
        width: "30%",
        // right: 65,
        // justifyContent: "flex-start",
        // paddingRight: 25,
    },
    rtlCostStyle: {
        minWidth: 95,
        left: -30,
        top: 8
    },
    costStyle: {
        width: "100%",
        // backgroundColor: "green"
        // right: -5,
    },
    rtlTotalStyle: {
        left: 25,
        width: 20
    },
    totalStyle: {
        width: 20
    },
    anthorItemStyle: {
        width: "95%",
        marginTop: 5
    },
    payTextStyle: {
        fontSize: 15,
        lineHeight: 15
    },
    addAccountStyle: {
        width: "93%",
        marginBottom: 80,
        marginTop: 0,
        backgroundColor: colors.purple,
    }
})
