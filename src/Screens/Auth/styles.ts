import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'
import { moderateScale } from '../../utilities/Context/responsive'


export const styles = StyleSheet.create({
    loginImgStyle: {
        width: 730,
        height: 450,
        top: -240,
        left: -190,
        rotation: 3
    },
    inputViewStyle: {
        bottom: moderateScale(50, 1),
        height: 150
    },
    fgPassStyle: {
        textAlign: "right",
        bottom: 9,
        marginEnd: 40,
        fontSize: 14,
        color: colors.placeholder
    },
    rtlForgotStyle: {
        marginLeft: 20
    },
    buttonStyle: {
        backgroundColor: colors.purple,
        bottom: moderateScale(57, 1),
        marginBottom: 50
    },
    logoStyle: {
        top: 290,
        paddingLeft: 50
    },
    loginTxtStyle: {
        fontSize: 40,
        rotation: -3.5
    },
    txtStyle: {
        fontSize: 18,
        rotation: -3,
        marginStart: 8
    },
    lastTxtStyle: {
        // marginEnd: 80,
        minWidth: "70%",
        alignSelf: "center",
        bottom: moderateScale(61, 1),
    },
    registerInputStyle: {
        bottom: moderateScale(60, 1),
        minHeight: 300,
        // backgroundColor: colors.flowerColor,
    },
    radioStyle: {
        width: "55%"
    }
})