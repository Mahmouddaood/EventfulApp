import { StyleSheet, Platform } from 'react-native'
import colors from '../../../../utilities/colors'
import { createDrawerNavigator } from 'react-navigation-drawer';

export default StyleSheet.create({
    imageStyle: {
        minWidth: "105%",
        margin: 3,
        height: "103%",
        borderRadius: 15,
        resizeMode: "contain",
        aspectRatio: 1,

    },
    shadowContainStyle: {
        // shadowColor: 'rgba(0,0,0, .7)',
        // shadowOffset: { height: 0, width: 0 },
        // shadowOpacity: 1,
        // shadowRadius: 5,
        // elevation: 5
        bottom: 15

    },
    shadowUpperStyle: {
        width: 140,
        margin: 6,
        borderRadius: 10,
        height: "75%",
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: 1,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 1,
                    height: 1
                },
                shadowRadius: 3,
                shadowOpacity: 0.5,
                shadowColor: "#ced4e2"
            },
            android: {
                backgroundColor: "#ced4e2",
                borderColor: "#ced4e2",
                position: 'relative',

                elevation: 15,
                borderRadius: 10,

                shadowOffset: {
                    width: 1,
                    height: 1
                },
                shadowRadius: 3,
                shadowOpacity: 0.5,
                shadowColor: "#ced4e2",

            }
        })
    },
    shadowBoxStyle: {
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 1,
                    height: 1
                },
                shadowRadius: 3,
                shadowOpacity: 0.5,
                shadowColor: "#ced4e2"
            },
            android: {
                backgroundColor: "#ced4e2",
                elevation: 1,

            }
        }),
        width: "96%",
        margin: 10,
        height: "94%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: 1,
        // shadowColor: colors.black,
        // shadowOffset: {
        //     width: 1,
        //     height: 1
        // }
    },
    eventDetailStyle: {
        // minHeight: 150,
        // width: 120,
        // top: -4,
        backgroundColor: colors.black

    },
    nameStyle: {
        fontSize: 17,
        color: colors.purple,
        marginBottom: 3,
        marginTop: 2
    },
    iconStyle: {
        top: 7,
        left: 3
    },
    locationStyle: {
        fontSize: 14,
        right: 4,
    },
    timeStyle: {
        fontSize: 14
    },
    timeViewStyle: {
        backgroundColor: "#5cb85c",
        borderRadius: 5,
        width: 45,
        height: 20,
        position: "absolute",
        top: 8,
        right: 10,
        paddingBottom: 2
    },
    locImgStyle: {
        width: 14,
        height: 17.2,
        marginRight: 10,
        top: 3
    },
    detailEventStyle: {
        minHeight: 80,
        // maxHeight: 200,
        width: 150,
        position: "absolute",
        top: 120,
        padding: 5,
        // backgroundColor: colors.black,
    },
    rtlDetailEventStyle: {
        transform: [{ rotateY: '180deg' }],
        // backgroundColor: "#000"
    },
    locViewStyle: {

        justifyContent: "space-between",
        width: "46%",
        marginTop: 2,
        // marginBottom: 3,
        height: 25,
        // paddingHorizontal: 10,
        // backgroundColor: colors.flowerColor

    },
    addressStyle: {
        textAlign: "left",
        right: 2,


        // backgroundColor: "#000"

    },
    rtlAdressStyle: {
        textAlign: "right",
        right: 18,

    },
    nameTxtStyle: {
        textAlign: "left",
        width: 145,
        // backgroundColor: colors.black
    },
    rtlNameTxtStyle: {
        textAlign: "right",
        right: -12,
        width: 126,
    },
    ImageContentStyle: {
        width: 145,
        height: 100,
        marginHorizontal: 4,
        borderRadius: 5,
        elevation: 5,
        zIndex: 1000,
        backgroundColor: "#ced4e2",
        bottom: 28,
        overflow: "hidden"
        // paddingHorizontal: 10
    },
    scaleImgStyle: {
        // borderRadius: 10,
        width: "97%",
        height: "97%",
        // backfaceVisibility: "hidden",
        // overflow: ."hidden",
        // flex: 1,
        resizeMode: "stretch",

        // aspectRatio: 1.83,
        alignSelf: "center",
        marginTop: 2
    },
    calendarStyle: {
        width: 14.5,
        height: 16,
        top: 2,
        marginRight: 10
    },
    rtlDateStyle: {
        width: "110%",
        right: 26,
        textAlign: "right",
        paddingRight: 30


    }

})