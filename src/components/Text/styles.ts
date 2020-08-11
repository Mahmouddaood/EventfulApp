import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'
// import {
//     responsiveFontSize
// } from '../../utilities/Context/responsive'


export default StyleSheet.create({
    textStyle: {
        fontSize: 18,
        fontFamily: "coconnextarabic-light",
        color: colors.white,
    },
    centerStyle: {
        textAlign: "center"
    },
    errorStyle: {
        color: colors.error
    },
    rtlStyle: {
        textAlign: "right",
        writingDirection: "rtl"
    }
})