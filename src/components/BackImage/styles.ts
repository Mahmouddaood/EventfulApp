import { StyleSheet, Platform } from "react-native";
import colors from '../../utilities/colors'
import {
    responsiveWidth,
    screenWidth
} from '../../utilities/Context/responsive'
export default StyleSheet.create({
    loginImgStyle: {
        width: "100%",
        minHeight: 485,
        bottom: 220,
        alignSelf: "center",
        rotation: 4,
        // marginRight: "50%",
        // resizeMode: "contain"



        // top: -260,
        // width: "190%",
        // left: -190,
        // rotation: 2,
        // height: 472
    },
    loginTxtStyle: {
        fontSize: 40

    },
    txtStyle: {
        fontSize: 18,

    },
    logoStyle: {
        minWidth: "50%",
        height: 100,
        alignSelf: "center",
        marginTop: 280,
        rotation: -4,
        paddingTop: 10,
        marginLeft: 70,
        // paddingRight: 1,
        // alignItems: "flex-end",


        // top: 290,
        // paddingLeft: 50
    },



    ///// search View Style 

    selectedItemStyle: {
        backgroundColor: colors.white,
        width: "40%",
        height: 40,
        left: Platform.select({ ios: 25, android: 20 }),
        rotation: -3.5,
        opacity: 0.3,
        borderRadius: 15,
        top: Platform.select({
            ios: 10,
            android: -10
        })
    },
    rtlSelectedItemStyle: {
        // left: 450,
        rotation: -3,
        top: Platform.select({ ios: 10, android: -25 }),
        width: "65%",
        ...Platform.select({
            ios: {
                left: -100
            }, android: {

                right: 0
            }
        }),
        alignSelf: "center"
    },
    itemViewStyle: {
        width: "40%",
        left: 90,
        rotation: -3,
        minHeight: 100,
        backgroundColor: colors.white,
        borderRadius: 15,
        shadowColor: colors.mainColor,
        opacity: 1,
        paddingTop: 10,
        top: Platform.select({ ios: -30, android: -10 })
    },
    rtlItemViewStyle: {
        left: Platform.select({
            ios: -70,
            android: 150
        }),
        top: -35,
        width: "60%",
        // backgroundColor: colors.black,
        minHeight: 100,
        rotation: -3
    },
    itemStyle: {
        height: 25,
        marginBottom: 5,
        borderRadius: 5,
        borderColor: "#fff",
        borderWidth: .1,
        rotation: 1,



    }

})