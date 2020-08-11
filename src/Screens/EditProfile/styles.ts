import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'

export default StyleSheet.create({
    profImgStyle: {
        width: 105,
        height: 92,
        marginBottom: 25,
        borderRadius: 40

    },
    titleStyle: {
        paddingBottom: 3
    },
    scrollStyle: {
        paddingTop: 25
    },
    textStyle: {
        marginLeft: 12,
        marginBottom: 15
    },
    profShadowStyle: {
        position: "absolute",
        width: 105,
        top: 52,
        height: 48,
        backgroundColor: colors.black,
        borderBottomRightRadius: 46,
        borderBottomLeftRadius: 46,


    },
    editViewStyle: {
        width: "90%",
        marginLeft: 20,
        marginBottom: 8
    },
    saveButStyle: {
        backgroundColor: colors.purple,
        width: "91%",
        top: -110,
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 50
    },
    bottomViewStyle: {
        marginTop: 60
    }
})