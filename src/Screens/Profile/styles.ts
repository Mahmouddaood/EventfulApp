import { StyleSheet, Platform } from 'react-native'
import colors from '../../utilities/colors'
import { responsiveHeight, moderateScale, responsiveWidth, screenWidth } from '../../utilities/Context/responsive'


export default StyleSheet.create({
    loginImgStyle: {
        // bottom: 260
        height: responsiveHeight(31),
        // resizeMode: "stretch",
        // left: 5,
        width: responsiveWidth(104),
        // top: -100,
        // rotation: 7,
        // // marginRight: 50,
        // alignSelf: "center"
        // right: 0

        // top: 100

    },
    logoStyle: {
        // left: 150,
        // rotation: 0.2,
        // marginTop: Platform.select({ ios: 35, android: 10 }),
        // flexDirection: "row",
        width: "96%",
        marginTop: "2%",
        alignSelf: "center",
        height: "20%",
        alignItems: "center",
        paddingHorizontal: "3%",
        // paddingTop: "10%",
        justifyContent: "space-between",
        // paddingTop: 10,
        // backgroundColor: "#000",
        // alignSelf: "center",
        // marginHorizontal: 10,
        // rotation: 0,
        // marginTop: 250,
        // marginLeft: 0
        // paddingHorizontal: 10,

    },
    logoTxtStyle: {
        fontSize: 24,
    },
    txtStyle: {
        // marginTop: 3,
        fontSize: 18
    },
    iconContainerStyle: {
        // marginRight: 0,
        top: -67,
        marginLeft: 60
        // marginRight: 80
        // marginLeft: 30
    },
    rtlLogoStyle: {
        // right: Platform.select({
        //     ios: -150,
        //     android: 40
        // }),
        // // ...Platform.select({
        // //     ios: {
        // //         right: -140
        // //     },
        // //     android: {
        // //         right: 40
        // //     }
        // // }),
        // marginTop: 20,
        // rotation: 0.2,
        // alignSelf: "center",
        // width: Platform.select({
        //     ios: "50%",
        //     android: "65%"
        // }),
        // justifyContent: "space-between"
    },
    rtlIconStyle: {
        alignSelf: "center",
        top: Platform.select({
            ios: -40,
            android: -55
        }),
        right: Platform.select({
            ios: 300,
            android: 25
        }),
        // top: -15,
        // right: -140,
        // position: "absolute"
        // left: 120,
        // top: 150
    },
    contentStyle: {
        // height: 350,
        // bottom: 500
    },
    headViewStyle: {
        width: "92%",
        marginStart: 12,
        height: 90,
        marginBottom: 27
    },
    rcommendStyle: {
        fontSize: 24,
        color: colors.black,
        marginHorizontal: 15
    },
    seeAlStyle: {
        fontSize: 16,
        top: 5,
        color: colors.purple
    },
    recentlyContentStyle: {
        height: 240,

        // backgroundColor: colors.black,
        // marginBottom: -130


    },
    recentlyHeadViewStyle: {
        width: "92%",
        marginStart: 12,
        height: 30,
        marginBottom: 20
    },
    rtlViewStyle: {
        paddingRight: 15,
    },
    rtlSearchIconStyle: {
        position: "absolute",
        top: Platform.select({
            ios: 20,
            android: -10
        }),
        left: Platform.select({
            ios: -70,
            android: 60
        })
    },
    searchIconStyle: {
        marginLeft: Platform.select({
            ios: 360,
            android: 310
        }),
        top: -200
    },
    recommendedSectionStyle: {
        bottom: 250,
        marginBottom: 0,
        marginTop: 50,
        height: 360,
        // backgroundColor: colors.flowerColor
    },
    headTextStyle: {
        height: 55,
        width: "93%",
        marginHorizontal: 10,
        bottom: 355,
        position: "absolute"
    },
    recommendedImgStyle: {
        height: "35%",
        width: "100%",
        top: 180
        // paddingLeft: 75
    },
    paginationStyle: {
        width: "10%",
        height: 20,
        position: "absolute",
        top: 270,
        marginBottom: 50,
    },
    paginationItemStyle: {
        width: 7,
        height: 7,
        borderRadius: 7,
        top: 5,
        backgroundColor: colors.whitee7
    },
    selectedPaginationItemStyle: {
        backgroundColor: colors.purple,
        width: 12
    },
    headSearchStyle: {
        textAlign: "left",
        marginLeft: 20,
        marginBottom: 15,
        marginTop: 20,

    },
    rtlHeadSearchStyle: {
        textAlign: "right",
        right: 20
    },
    titleSearchStyle: {
        textAlign: "left",
        right: 25
    },
    rtltitleSearchStyle: {
        right: 0
    },
    modalStyle: {
        top: 60,
        height: 490,
        backgroundColor: colors.white,
        width: "93%",
        elevation: 5,
        zIndex: 1000,
        borderRadius: 20,
        padding: 40,
    },
    secItemStyle: {
        width: "115%",
        paddingHorizontal: 10
    },
    searchButStyle: {
        width: "90%",
        height: 40,
        backgroundColor: colors.purple,
        borderRadius: 10,
    },
    selectItemStyle: {
        width: "93%",
        borderRadius: 12,
    },
    selectContentStyle: {
        width: "93%",
        borderRadius: 10
    },
    slider: {
        marginTop: 8,
        overflow: 'visible'
    },
    sliderContentContainer: {
        paddingVertical: 10,
        paddingTop: 10 // for custom animation

    },
    paginationContainer: {
        paddingVertical: 8,
        marginTop: "2%",
        // position: "absolute",
        // top: "32%",
        alignSelf: "center",
        // bottom: "75%",
        // marginBottom: 30
    },
    paginationDot: {
        width: 14,
        height: 14,
        borderRadius: 9,
        // marginHorizontal: 8
    },
    rtlScrollStyle: {
        transform: [{ scaleX: -1 }],
        marginRight: 20
    },
    scrollStyle: {
        top: -20
    },
    closeViewStyle: {
        width: "110%",
        marginHorizontal: 10,
    },
    modalScrollStyle: {
        width: "120%",
        marginTop: 30
    },
    singleModalStyle: {
        width: "85%",
        // backgroundColor: colors.black,
        minHeight: 100,
        maxHeight: 400,
        top: 130,
        // borderRadius: 15,
        elevation: 3,
        zIndex: 1000,
        paddingTop: 10,
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    backButStyle: {
        width: 70,
        height: 35,
        bottom: 8,
        backgroundColor: colors.purple
    },
    modalSearchStyle: {
        width: "80%",
        height: 75,
        // backgroundColor: "#000",
        paddingLeft: 12,
        marginBottom: 15
    },
    underLineStyle: {
        minWidth: "40%",
        maxWidth: "60%",
        backgroundColor: colors.flowerColor,
        height: 1
    },
    alterVStyle: {
        height: 50,
        minWidth: 120,
        marginBottom: 45,
    },
    secondModalStyle: {
        width: "80%",
        minHeight: 75,
        maxHeight: 115,
        paddingLeft: 12,
        marginBottom: 15
    }


})