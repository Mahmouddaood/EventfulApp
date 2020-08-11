import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'

export default StyleSheet.create({
    contentStyle: {
        marginBottom: 20
    },
    selectViewStyle: {
        width: "93%",
        height: 50,
        borderWidth: 0.4,
        borderColor: colors.placeholder,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 5,
        // bottom: 5,
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    selectContentStyle: {
        minHeight: 85,
        bottom: 6,
        width: "93%",
        borderRadius: 3,
        borderColor: colors.placeholder,
        borderTopColor: colors.placeholder,
        borderWidth: .2,
        marginHorizontal: 15,
        marginBottom: 5,
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal: 10,
    },
    itemStyle: {
        height: 30,
        marginBottom: 5,
        borderRadius: 5,
        borderColor: "#fff",
        borderWidth: .1,
        width: 50

    },
    iconStyle: {
        marginTop: 7,

    },
    selectedTextStyle: {
        paddingRight: 10,
        fontWeight: "bold"
    },
    multiSelectViewStyle: {
        height: 50,
        paddingLeft: 7,
        marginTop: 10
    },
    selectedItemStyle: {
        minWidth: 82,
        height: 36,
        marginRight: 8,
        borderWidth: 0.5,
        borderRadius: 8
    },
    selectedTextItemStyle: {
        marginRight: 8,
        paddingLeft: 8

    }
})