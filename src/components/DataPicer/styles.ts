import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'



export default StyleSheet.create({
    contentStyle: {
        marginBottom: 20
    },
    imageStyle: {
        width: 20,
        height: 20,
        color: colors.white
    },
    dateInputStyle: {
        borderRadius: 5,
        borderWidth: 0.4,
        borderColor: colors.placeholder,
        width: "100%",
        minHeight: 52,
        marginLeft: 2,
        elevation: 1,
        zIndex: 1000,
        paddingHorizontal: 10
    },
    overlay: {
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,.3)"
    },
    modal: {
        backgroundColor: colors.white,
        height: 260
    },
    modalBtnContainer: {
        justifyContent: "flex-end",
        paddingHorizontal: 15,
        marginTop: 15
    }
});
