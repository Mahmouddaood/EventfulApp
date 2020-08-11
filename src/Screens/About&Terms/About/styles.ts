import { StyleSheet } from 'react-native'
import colors from '../../../utilities/colors'

export default StyleSheet.create({
    aboutViewStyle: {
        top: 70
    },
    aboutImgStyle: {
        width: 137,
        height: 138,
        marginEnd: 10,
        marginBottom: 30
    },
    aboutTxtStyle: {
        fontSize: 16,
        width: 340,
        minHeight: 299,

    },
    slider: {
        marginTop: 15,
        overflow: 'visible'
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation

    },
    paginationContainer: {
        paddingVertical: 8,
        bottom: 160
        // backgroundColor: colors.black
    },
    paginationDot: {
        width: 14,
        height: 14,
        borderRadius: 9,
        // marginHorizontal: 8
    }

})