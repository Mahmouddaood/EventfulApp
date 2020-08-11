import { StyleSheet, Platform } from 'react-native'
import colors from '../../../../utilities/colors'

export default StyleSheet.create({
    itemStyle: {
        elevation: 0,
        zIndex: 0,
        width: "100%",
        height: 75,
        marginTop: 5
    },
    avatarStyle: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    leftViewStyle: {
        minWidth: 85,
        height: 37,
        borderWidth: 0.3,
        borderRadius: 7,
        borderColor: colors.lightPlaceHolder,
        elevation: 1,
        zIndex: 500,
        marginBottom: 5,
        bottom: 8


    },
    scrollStyle: {
        paddingTop: 20,
    },
    nameStyle: {
        width: "100%",
        color: colors.black,
        textAlign: "left",
        // marginEnd: 65
    },
    rtlNameStyle: {
        width: "100%",
        textAlign: "right",
        // right: Platform.select({ ios: 20, android: 28 })
    }
})