import React from 'react'
import { Text } from 'react-native'
import TextProps from './index.interface'
import styles from './styles'
// import {
//     responsiveFontSize
// } from '../../utilities/Context/responsive'

const TextComp: React.FC<TextProps> = (
    {
        center,
        error,
        textStyle,
        children,
        onPress,
        isRtl,
        numberOfLines,
        color,
        fontSize
    }): JSX.Element =>
    <Text style={[
        styles.textStyle,
        center && styles.centerStyle,
        error && styles.errorStyle,
        color && { color: color },
        fontSize && { fontSize: fontSize },
        isRtl && styles.rtlStyle,
        textStyle
    ]}
        numberOfLines={numberOfLines}
        ellipsizeMode="tail"
        onPress={onPress}
    >
        {children}
    </Text>

export default React.memo(TextComp)