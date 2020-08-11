import { StyleSheet } from 'react-native'
import colors from '../../../../utilities/colors'

export default StyleSheet.create({
    imageStyle: {
        borderRadius: 45,
        width: 316,
        height: 256,
        margin: 20
    },
    descDetailStyle: {
        width: "96%",
        paddingTop: 5,
        height: 115,
        top: 140,
        opacity: 1.2,
        justifyContent: "space-around"
    },
    statuStyle: {
        marginLeft: 7,
        top: 15,
        marginBottom: 16,
        fontSize: 13
    },
    nameStyle: {
        marginBottom: 16,
        textAlign: "left",
        left: 5
    },
    locDateStyle: {
        width: "55%",
        height: "30%",
        bottom: 10,
        paddingLeft: 5,
        justifyContent: "space-between",
    },
    locStyle: {
        // marginRight: 16,
        fontSize: 8,
        right: 12,
        bottom: 2,
        width: "100%"
    },
    dateStyle: {
        marginLeft: 5,
        fontSize: 8,
        right: 12,
        width: "100%"
    },
    iconImgStyle: {
        height: 42,
        width: 42,
        borderRadius: 25,
        backgroundColor: colors.white,
        elevation: 1,
        zIndex: 500,
        paddingTop: 15,
        right: 5,
        paddingLeft: 17
    }
})