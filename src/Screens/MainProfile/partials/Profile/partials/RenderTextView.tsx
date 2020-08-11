import React from 'react'
import {
    View
} from 'react-native'
import TextComp from '../../../../../components/Text'
import { RenderProps } from '../index.interface'
import registeredStyles from '../../../../../utilities/registeredStyles'
import colors from '../../../../../utilities/colors'
import styles from './styles'
import NoDataPlaceHolder from '../../../../../components/NoDataPlaceHolder'
const {
    spaceBetweenItems,
    rowStyle,
    selfCentered,
    horizontalCenteredFlex,
    rtlRowStyle
} = registeredStyles
const { memo } = React

const RenderTextView: React.FC<RenderProps> = ({
    headStyle,
    firstTextStyle,
    endTextStyle,
    title,
    value,
    onPress,
    endLine,
    isRtl,
    loading
}): JSX.Element =>

    <View style={[
        styles.headStyle,
        rowStyle,
        horizontalCenteredFlex,
        selfCentered,
        spaceBetweenItems,
        isRtl && rtlRowStyle,
        headStyle
    ]}>
        <TextComp children={title} fontSize={14} color={colors.lightGrey} textStyle={firstTextStyle} />
        <View style={{ bottom: 3 }}>
            <NoDataPlaceHolder loading={loading} >
                <TextComp children={value} color={colors.mainBlueSky} onPress={onPress} fontSize={14} textStyle={[styles.endTxtStyle, endTextStyle]} />
                {endLine && <View style={styles.textLineStyle} />}
            </NoDataPlaceHolder>
        </View>
    </View>

export default memo(RenderTextView)