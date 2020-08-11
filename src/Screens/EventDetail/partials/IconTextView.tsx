
import React from 'react'
import {
    View,
} from 'react-native'
import styles from '../styles'
import { IconTxtProps } from '../index.interface'
import Icon from '../../../components/Icon'
import TextComp from '../../../components/Text'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors'

import TicketIcon from '../../../components/TicketIcon'
import TimeIcon from '../../../components/TimeIcon'
import Avatar from '../../../components/Avatar'
import NoDataPlaceHolder from '../../../components/NoDataPlaceHolder'

const { memo } = React
const {
    rowStyle,
    horizontalCenteredFlex,
    rtlRowStyle
} = registeredStyles


const textStyle = {
    color: colors.placeholder,
    fontSize: 14,
}

const IconTextView: React.FC<IconTxtProps> = ({
    icon,
    image,
    firstText,
    secondText,
    imageStyle,
    loading,
    isRtl,
    firstStyle,
    secondStyle,
    itemStyle
}): JSX.Element =>

    <View style={[
        styles.iconViewStyle,
        horizontalCenteredFlex,
        rowStyle,
        isRtl && [
            rtlRowStyle, {
                direction: "rtl",
                left: 235
            }],
        itemStyle

    ]}>

        <Icon children={icon} containerStyle={styles.iconContentStyle} />
        <Avatar source={image} imageStyle={[styles.imageStyle, imageStyle]} />
        <View >
            <NoDataPlaceHolder loading={loading} containerStyle={{ paddingRight: 35 }}>
                <TextComp
                    children={firstText} {...textStyle} textStyle={firstStyle} />
                {secondText && <TextComp
                    children={secondText} {...textStyle} textStyle={secondStyle} />}
            </NoDataPlaceHolder>
        </View>
    </View>


export default memo(IconTextView)