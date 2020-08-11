import React from 'react'
import { View, ScrollView } from 'react-native'
import { Calendar } from 'react-native-calendars'
import CalendarScreenProps, { dashData } from './index.interface'
import calStyles from './styles'
import styles from '../CreateEvent/styles'
import DashView from './partials/DashView'
import PlusView from '../MainProfile/partials/Events/partails/PlusView'
import BackImage from '../../components/BackImage'
import ArrowIcon from '../../components/ArrowIcon'
import Icon from '../../components/Icon'
import BottomTab from '../../components/BottomTab'
import registeredStyles from '../../utilities/registeredStyles'
import colors from '../../utilities/colors'
import MainContext from '../../utilities/Context/context'
import useGetUserEventsRequest from '../../utilities/LogicScreens/Profile/hooks/useGetUserEventsRequest'
import { UserEvent } from '../../utilities/LogicScreens/Profile/interfaces/index.interface'
import BackIcon from '../../components/BackIcon'

const {
    flexStyle,
    selfCentered,
    shadow
} = registeredStyles
const {
    memo,
    useCallback,
    useState,
    useContext,
    Fragment
} = React

const CalendarScreen: React.FC<CalendarScreenProps> = ({
    navigation,
    dashData
}): JSX.Element => {

    const [DateObj, updateDate] = useState<Date | string | any>(new Date())
    const { state: { token } } = useContext(MainContext)
    const navigateBack = useCallback(() => navigation.goBack(), [navigation])
    const dashMap = useCallback((item: UserEvent) => <DashView {...item} />, [dashData])

    const {
        data: eventData
    } = useGetUserEventsRequest(token, navigation.navigate, "")

    const handleChangeDate = useCallback((day: any) => {
        console.log("day", day)
        updateDate(day?.dateString)
    }, [
        updateDate,
        DateObj
    ])
    console.log("da", DateObj)

    return (
        <Fragment>
            <ScrollView
                style={flexStyle}
                scrollEnabled
                shouldRasterizeIOS
            >
                <BackImage
                    loginImgStyle={styles.loginImgStyle}
                    logoStyle={styles.logoStyle}
                    logoTxtStyle={styles.screenNameStyle}
                    txtStyle={styles.secondTxtStyle}
                    screenName='upcoming schedule!'
                    logoText='“Don’t go through life, grow through life.”'
                    leftIcon={
                        <Icon children={
                            <BackIcon
                            // height={33}
                            // width={35}
                            />}
                            containerStyle={styles.iconStyle}
                            onPress={navigateBack}

                        />}
                />

                <Calendar
                    current={DateObj}
                    style={[
                        calStyles.CalendarViewStyle,
                        shadow,
                        selfCentered,
                    ]}
                    markedDates={
                        { [DateObj]: { selected: true, selectedColor: colors.flowerColor } }
                    }
                    onDayPress={handleChangeDate}
                />

                <View style={[
                    calStyles.dashGroupStyle,
                    selfCentered,
                ]}>
                    {eventData?.map(dashMap)}
                </View>
                {/* <PlusView style={calStyles.plusViewStyle} /> */}
            </ScrollView>
            <BottomTab navigation={navigation} selectedTab={"Calendar"} />
        </Fragment>
    )
}
CalendarScreen.defaultProps = {
    dashData: dashData
}

export default memo(CalendarScreen)