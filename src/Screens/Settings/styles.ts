import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'

export default StyleSheet.create({
    DetailViewSytle: {
        height: 47,
        width: "91%",
    },
    resViewStyle: {
        backgroundColor: colors.lightGrey,
        width: 70,
        borderRadius: 4,
        height: 30,
        paddingTop: 4,
        top: -3,
    },
    resTextStyle: {
        fontSize: 15
    },
    underLineStyle: {
        height: 0.4,
        width: 355,
        marginLeft: 25,
        marginTop: 10,
        backgroundColor: colors.placeholder
    },
    titleStyle: {
        paddingBottom: 5
    },
    profViewStyle: {
        height: 160,
        marginRight: 20
    },
    profImageStyle: {
        width: 65,
        height: 65,
        marginBottom: 12,
        borderRadius: 35,
        marginRight: 20
    }


})