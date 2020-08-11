import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'
import { moderateScale } from '../../utilities/Context/responsive'

export default StyleSheet.create({
    payViewStyle: {
        height: 100,
        width: "94%",
        borderRadius: 20,
        bottom: moderateScale(80, 1),
        // top: -345,
        rotation: 0.3,
        elevation: 1,
        zIndex: 1000,
        paddingHorizontal: 10
    },
    chooseTxtStyle: {
        marginLeft: 16,
        marginTop: 18,
        marginBottom: 10
    },
    PromoCodeStyle: {
        height: 100,
        width: "90%",
        marginHorizontal: 20,
        // alignSelf: "center",
        bottom: moderateScale(70, 1),

    },
    inputStyle: {
        borderRadius: 7,
        elevation: 0.5,
        paddingHorizontal: 15,
        height: 55
    },
    applyButStyle: {
        backgroundColor: colors.flowerColor,
        width: 70,
        height: 55,
        borderRadius: 10,
        // marginRight: 500
        right: 70,
    },
    lastViewStyle: {
        width: "88%",
        marginHorizontal: 8,
        height: 120,
        bottom: moderateScale(60, 1),
        marginBottom: 10
    },
    itemStyle: {
        width: "96%",
        height: "50%",
        marginHorizontal: 8
    },
    payButStyle: {
        bottom: moderateScale(60, 1),
        backgroundColor: colors.purple,
        width: "92%",
        borderRadius: 16,
        marginBottom: -200
    }




})