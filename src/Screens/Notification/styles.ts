import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'

export default StyleSheet.create({
    txtStyle: {
        height: 21,
        marginTop: 25,
        marginBottom: 15,
    },
    leftTxtStyle: {
        marginLeft: 25
    },
    rightTxtStyle: {
        marginRight: 25
    },
    circleImgStyle: {
        position: "absolute",
        right: -5,
        top: -8
    },
    lastTxtStyle: {
        fontSize: 14,
        top: 6
    },
    firstContentStyle: {
        width: "57%"
    },
    detailStyle: {
        bottom: 4
    },
    itemStyle: {
        height: 85
    },
    notificationViewStyle: {
        top: 10,
        marginBottom: 110
    },
    leftStyle: {
        backgroundColor: colors.flowerColor,
        borderRadius: 8,
        height: 30,
        minWidth: 40,
        marginTop: 20,
        right: -6,
        marginEnd: 10
    },
    leftContentStyle: {
        minWidth: 150,
        marginTop: 10,
    }
})