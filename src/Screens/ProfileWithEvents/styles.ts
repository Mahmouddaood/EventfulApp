import { StyleSheet, Platform } from 'react-native'
import colors from '../../utilities/colors'
import {
    moderateScale, responsiveHeight
} from '../../utilities/Context/responsive'

export default StyleSheet.create({
    scrollStyle: {
        // paddingTop: 30,
        marginBottom: -350,
        // paddingBottom: 500
        // top: -400
    },
    backImgStyle: {
        height: responsiveHeight(29)
    },
    iconContentStyle: {
        left: 25,
        top: 290,
        height: 50,
        paddingTop: 10,
        width: "90%",
        justifyContent: "space-around",
        rotation: -1.0
    },
    profileStyle: {
        // top: -605,
        // top: -525,
        // position: "absolute",

        bottom: moderateScale(85, 1),
        minHeight: 390,
        width: "92%",
        marginHorizontal: 10,
        borderRadius: 15,
        zIndex: 1000,
        elevation: 1,
    },
    profileImgStyle: {
        width: 80,
        height: 80,
        top: 20,
        marginBottom: 40,
        borderRadius: 55
        // shadowColor: colors.placeholder,
        // shadowOffset: {
        //     width: 15,
        //     height: 15
        // },
        // shadowOpacity: 10,
        // shadowRadius: 50
    },
    profilenameStyle: {
        fontSize: 20,
        color: colors.lightDark,
    },
    jobTxtStyle: {
        fontSize: 14,
        color: colors.placeholder,
    },
    aboutStyle: {
        width: "100%",
        minHeight: 65,
        marginTop: 5,
    },
    iconContainerStyle: {
        minWidth: 230,
        height: 25,
        marginBottom: 30,
        bottom: 10
    },
    followStyle: {
        width: 180,
        height: 43,
        backgroundColor: colors.flowerColor,
        borderRadius: 10,
        marginBottom: 15,
        marginLeft: 8
    },
    verticalLineStyle: {
        width: 0.3,
        height: 35,
        backgroundColor: colors.black,
        borderRadius: 3
    },
    followViewStyle: {
        marginLeft: 10,
        width: "70%",
        height: 50,
        marginBottom: 25
    },

    infoStyle: {
        width: "90%",
        height: 45,
        rotation: -0.08,
        top: 10,
        paddingLeft: 10
    },
    infoItemStyle: {
        width: "30%",
        height: 40,
        elevation: 1,
        borderRadius: 5,
        shadowRadius: 15,
        paddingTop: 6,
        marginRight: 10
    },
    infoTxtStyle: {
        fontSize: 16,
        color: colors.placeholder
    },
    // buttonContainerStyle: {
    //     width: 135,
    //     height: 52,
    //     borderRadius: 25,
    //     marginRight: 15,
    //     elevation: 1,
    //     shadowOffset: {
    //         width: 5,
    //         height: 2
    //     },
    //     shadowRadius: 0.5
    // },
    // selectedButtonStyle: {
    //     backgroundColor: colors.purple,
    // },
    // buttonTxtStyle: {
    //     color: colors.shadowGrey
    // },
    flatImgStyle: {
        width: 175,
        height: 175,
        borderRadius: 15,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    editIconStyle: {
        position: "absolute",
        right: 25,
        top: 15
    },
    flatStyle: {
        marginBottom: 20
    },
    imageFlatStyle: {
        height: 220,
    },
    plusViewStyle: {
        marginBottom: 70
    },
    detailImgStyle: {
        height: "40%",
        borderRadius: 5,
        padding: 3,
        bottom: 22,
        width: "83%",
        marginLeft: 1,
        backgroundColor: "white"
    },
    bottomSectionStyle: {
        marginTop: 5
    },
    locStyle: {
        width: 15,
        height: 15,
        marginRight: 8
    },
    contentStyle: {
        bottom: moderateScale(85, 1),

    },
    rtlArrowStyle: {
        right: -435,
        top: Platform.select({ ios: -40, android: -110 }),
        rotation: -13
    },
    arrowStyle: {
        // position: "absolute",
        // left: 150,
        // top: Platform.select({ ios: 0, android: 15 }),
        rotation: 0,
        marginHorizontal: 3
    },
    followModalStyle: {
        backgroundColor: colors.placeholder,
        height: "60%",
        width: "95%",
        top: 100,
        paddingBottom: 10,
        padding: 10,
        borderRadius: 15,
        elevation: 1,
        zIndex: 500
    },
    headStyle: {
        borderRadius: 5,
        backgroundColor: colors.purple,
        width: 120,
        height: 35,
        marginBottom: 10,
    },
    itemStyle: {
        width: "100%",
        height: 85,
    },
    detailStyle: {
        width: "95%",
        marginHorizontal: 5,
        marginTop: 30,
        alignItems: "flex-start"

    },
    rtlDetailStyle: {
        width: "95%",
        alignItems: "flex-end",
        // backgroundColor: "#000",
        marginEnd: 15
        // right: 14

    },
    avatarStyle: {
        width: 55,
        height: 55,
        borderRadius: 12,
        marginEnd: 5
    },
    leftStyle: {
        backgroundColor: colors.white,
        borderRadius: 5,
        height: 50,
        width: 80,
        marginTop: 20,
        right: -10
    }
})