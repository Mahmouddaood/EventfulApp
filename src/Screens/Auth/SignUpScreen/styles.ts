import { StyleSheet } from 'react-native'
import colors from '../../../utilities/colors'


export const styles = StyleSheet.create({
    imageStyle: {
        width: 180,
        height: 181,
        top: 50,
        marginEnd: 12,
        opacity: 2
    },
    buttonStyle: {
        marginStart: 9,
        height: 50,
        marginBottom: 15,
        borderRadius: 5
    },
    signStyle: {
        marginBottom: 20,
        backgroundColor: colors.flowerColor
    },
    loginStyle: {
        marginBottom: 20,
        backgroundColor: colors.purple
    },
    buttonContentStyle: {
        top: 90,
    },
    MarkImageStyle: {
        // position: "absolute",
        bottom: 0,
        borderColor: colors.red,
        height: 345
    },
    textStyle: {
        color: colors.placeholder,
        fontSize: 18
    },
    textViewStyle: {
        marginTop: 95,
        width: 120,

    },
    guestStyle: {
        width: "42%",
        marginHorizontal: 5,
        alignItems: "flex-start",
        // justifyContent: "flex-start"

    },
    underLineStyle: {
        borderWidth: 1,
        borderColor: colors.flowerColor,
        minWidth: "65%",
        bottom: 2,
    },
    ButtonViewStyle: {
        minHeight: 200,
        // marginTop: ,
        paddingTop: 55
    },
    joinStyle: {
        marginTop: 20,
        // minWidth: "40%"
    },
    modalItemStyle: {
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    radioViewStyle: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: colors.white,
        borderWidth: 1
    },
    selectedModalStyle: {
        width: 12,
        height: 12,
        borderRadius: 12,
        backgroundColor: "blue",
    },
    lineStyle: {
        backgroundColor: colors.graye2,
        height: 1,
    }

})