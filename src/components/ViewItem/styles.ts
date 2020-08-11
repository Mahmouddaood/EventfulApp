import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'



export default StyleSheet.create({
    walletItemStyle: {
        width: "90%",
        height: 85,
        borderRadius: 10,
        elevation: 1,
        zIndex: 1000,
        marginBottom: 15,
        paddingHorizontal: 15,
        shadowRadius: 15,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 6,
            height: 5
        },
        shadowColor: colors.placeholder
    },
    firstContentStyle: {
        width: "60%"

    },
    avatarStyle: {
        width: 42,
        height: 42
    },
    nameStyle: {
        fontSize: 16,
        color: colors.black,
        width: "90%"
    },
    circleImgStyle: {
        position: "absolute",
        top: -8,
        right: -65,

    },
    lastTxtStyle: {
        fontSize: 14,
        color: colors.placeholder,
        top: 6
    },
    detailStyle: {
        bottom: 4,
        width: "68%",
        margin: 25,
        // backgroundColor: colors.black,

    },
})