import { StyleSheet } from 'react-native'
import colors from '../../utilities/colors'


export default StyleSheet.create({

    CalendarViewStyle: {
        width: "92%",
        elevation: 1,
        zIndex: 1000,
        top: -350,
        height: 350,
        borderColor: colors.placeholder,
        borderRadius: 25,
        borderWidth: 0.4,
        rotation: 0.3
    },
    dashGroupStyle: {
        width: "90%",
        marginLeft: 8,
        minHeight: 150,
        top: -310,
    },
    dashItemStyle: {
        paddingHorizontal: 5
    },
    eventDetStyle: {
        width: "65%",
        marginLeft: 0,
        paddingLeft: 0,
        paddingTop: 3,
    },
    dayStyle: {
        marginLeft: 14
    },
    dateStyle: {
        width: "18%"
    },
    dashStyle: {
        width: "10%",
        paddingTop: 10,
        marginBottom: 5
    },
    selectedCircleStyle: {
        width: 17,
        height: 17,
        borderRadius: 17,
        borderColor: colors.flowerColor,
        backgroundColor: colors.white,
        borderWidth: 1
    },
    innerCircleStyle: {
        width: 12,
        height: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.grey,
        backgroundColor: colors.white
    },
    dashLineStyle: {
        width: 1,
        marginTop: 6,
        height: 49,
        backgroundColor: colors.grey,
    },
    detailDashStyle: {
        marginTop: 5,
        paddingRight: 8
    },
    plusViewStyle: {
        backgroundColor: colors.purple,
        bottom: 150,
        marginBottom: 0,
        marginRight: 25
    }

})