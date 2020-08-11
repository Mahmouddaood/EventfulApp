import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'

export default StyleSheet.create({
    profImgStyle: {
        width: 95,
        height: 95,
        marginBottom: 25,
        borderRadius: 45

    },
    profShadowStyle: {
        position: "absolute",
        width: 95,
        top: 52,
        height: 47,
        backgroundColor: colors.black,
        borderBottomRightRadius: 46,
        borderBottomLeftRadius: 46
    },
})