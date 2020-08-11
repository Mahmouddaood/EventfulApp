import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'

export default StyleSheet.create({
    flatViewStyle: {
        height: 70
    },
    buttonContainerStyle: {
        width: 112,
        height: 48,
        borderRadius: 25,
        marginRight: 15,
        elevation: 1,
        shadowOffset: {
            width: 5,
            height: 2
        },
        shadowRadius: 0.5
    },
    selectedButtonStyle: {
        backgroundColor: colors.purple,
    },
    buttonTxtStyle: {
        color: colors.shadowGrey,
        fontSize: 16
    },
})