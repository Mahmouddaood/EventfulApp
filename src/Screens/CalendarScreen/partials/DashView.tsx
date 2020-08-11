import React from 'react'
import {
    View
} from 'react-native'
import styles from '../styles'
import TextComp from '../../../components/Text'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors'
import { UserEvent } from 'src/utilities/LogicScreens/Profile/interfaces/index.interface'
const {
    horizontalCenteredFlex,
    verticalCenteredFlex,
    spaceBetweenItems,
    rowStyle,
    fullWidth,
} = registeredStyles
const {
    memo,
    useState
} = React
const BackGround = {
    backgroundColor: colors.flowerColor
}

const DashView: React.FC<UserEvent> = ({
    formatted_time,
    formatted_date,
    name,
    address,
    open,
    id
}): JSX.Element => {

    const [selected] = useState<number>(1)
    const checkStatus = selected === open

    const duration = parseInt(formatted_time.slice(11, 16)) - parseInt(formatted_time.slice(0, 6))
    const finalDuration = duration.toString().startsWith("-") ?
        `${duration.toString().slice(1)}${formatted_time.slice(6, 8)}` :
        `${duration}${formatted_time.slice(6, 8)}`
    return (
        <View style={[
            rowStyle,
            styles.dashItemStyle,
            fullWidth
        ]}
            key={id}
        >
            <View style={styles.dateStyle}>
                <TextComp
                    children={formatted_date.slice(0, 2)}
                    textStyle={styles.dayStyle}
                    fontSize={25}
                    color={checkStatus ? colors.flowerColor : colors.lightPlacehold}
                />
                <TextComp
                    children={formatted_date.slice(2, 6)}
                    fontSize={12}
                    color={checkStatus ? colors.flowerColor : colors.lightPlacehold}
                    center
                />
            </View>
            <View style={[
                styles.dashStyle,
                horizontalCenteredFlex
            ]}>
                {open ? <View style={[
                    styles.selectedCircleStyle,
                    horizontalCenteredFlex,
                    verticalCenteredFlex
                ]}>
                    <View style={[styles.innerCircleStyle, BackGround]} />
                </View> :
                    <View style={styles.innerCircleStyle} />

                }
                <View style={styles.dashLineStyle} />
            </View>
            <View style={styles.eventDetStyle}>
                <TextComp
                    children={name}
                    color={colors.black}
                    fontSize={17}
                />
                <View style={[
                    styles.detailDashStyle,
                    rowStyle,
                    fullWidth,
                    spaceBetweenItems
                ]}>
                    <TextComp
                        children={formatted_time.slice(0, 8)}
                        fontSize={14}
                        color={colors.placeholder}
                    />
                    <TextComp
                        children={address.slice(0, 25)}
                        fontSize={14}
                        color={colors.placeholder}
                        textStyle={{
                            marginLeft: 5,
                            marginRight: 5
                        }}
                    />
                    <TextComp
                        children={finalDuration}
                        fontSize={14}
                        color={colors.placeholder}
                    />
                </View>
            </View>

        </View>

    );
}

export default memo(DashView)