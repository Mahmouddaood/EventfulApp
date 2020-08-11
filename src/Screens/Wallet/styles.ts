import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'

export default StyleSheet.create({

    walletBackImgStyle: {
        width: "90%",
        height: 130,
        top: 10
    },
    imgContentStyle: {
        width: "60%",
        marginLeft: 40,
        marginBottom: 10
    },
    underLineStyle: {
        height: 0.5,
        top: 40,
        backgroundColor: colors.grey
    },
    itemStyle: {
        height: 65
    },
    walletItemStyle: {
        width: "92%",
        height: 65,
        borderRadius: 10,
        elevation: 1,
        zIndex: 1000,
        marginBottom: 15,
        paddingHorizontal: 12,
        shadowRadius: 15,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 6,
            height: 5
        },
        shadowColor: colors.placeholder
    },
    firstContentStyle: {
        width: "46%",
        paddingHorizontal: 8,
    },
    avatarStyle: {
        width: 42,
        height: 42
    },
    nameStyle: {
        fontSize: 16,
        color: colors.black,
        width: "90%",
    },
    valueStyle: {
        fontSize: 18,
        top: 0
    },
    walletViewStyle: {
        top: 100,
        marginBottom: 200
    },
    flatStyle: {
        top: 80
    }














    // imgTxtViewStyle: {
    //     top: 50,
    //     height: 100,
    //     backgroundColor: colors.black
    // },
    // conImgStyle: {
    //     width: 79,
    //     height: 80,
    //     marginEnd: 4,
    //     marginBottom: 10
    // },
    // contactTxtStyle: {
    //     fontSize: 16
    // },
    // inputViewStyle: {
    //     top: 140
    // },
    // logButStyle: {
    //     backgroundColor: colors.purple,
    //     top: 110,
    //     height: 48,
    //     width: "92%",
    //     marginLeft: 18
    // }

})