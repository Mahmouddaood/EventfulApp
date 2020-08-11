import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'

export default StyleSheet.create({
    radioStyle: {
        height: "65%",
        width: "60%",
        justifyContent: "space-evenly",
        // backgroundColor: colors.black,
        left: 3

    },
    radioTextStyle: {
        width: "30%"
    },
    radioContentStyle: {
        height: 65,
        // backgroundColor: colors.blueGray,
        paddingLeft: 8,
        marginBottom: 10
    },
    selectedRadioItem: {
        width: 13,
        height: 13,
        backgroundColor: colors.purple,
        borderRadius: 20,
        marginTop: 0.5,
        marginLeft: 0.8
    },
    radioItemStyle: {
        width: 20,
        marginEnd: 6,
        height: 20,
        backgroundColor: colors.white,
        borderWidth: 0.3,
        borderColor: colors.placeholder,
        borderRadius: 15,

    }
})