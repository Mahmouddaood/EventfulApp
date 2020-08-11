import { StyleSheet } from 'react-native'
import colors from "../../utilities/colors";

export default StyleSheet.create({
    headTitStyle: {
        height: 50,
        top: 10,
        justifyContent: 'flex-end',
        paddingStart: 20,
        marginBottom: 40
    },
    langButStyle: {
        marginBottom: 12,
        marginLeft: 20,
        backgroundColor: colors.purple,
        width: 144,
        borderRadius: 6,
        padding: 8,
        height: 40,
        justifyContent: "space-around"
    },
    animatedLangButStyle: {
        width: 105,
        left: 3,
        backgroundColor: colors.grey,
        opacity: 1
    }
})