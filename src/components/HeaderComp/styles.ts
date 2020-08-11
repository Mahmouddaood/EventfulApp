import { StyleSheet, Dimensions } from 'react-native'
const { width: devWidth } = Dimensions.get('window')

export default StyleSheet.create({
    HeaderStyle: {
        height: 85,
        width: devWidth
    },
    viewHeadStyle: {
        width: "93%",
        marginLeft: 15
    },
    titleStyle: {
        marginRight: 18,
        fontSize: 22,
        marginTop: 2,
        lineHeight: 32,
        fontFamily: "CoconÆ Next Arabic light",
    }
})