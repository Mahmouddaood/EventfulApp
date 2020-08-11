import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { BCompProps } from '../index.interface'
import Button from '../../../components/Button'
import registeredStyles from '../../../utilities/registeredStyles'
const {
    verticalCenteredFlex,
    fullWidth
} = registeredStyles
const { memo } = React

const ButtonComp: React.FC<BCompProps> =
    ({
        title,
        style,
        onPress,
        disabled
    }): JSX.Element =>
        <View
            style={[
                styles.buttonContentStyle,
                fullWidth,
                verticalCenteredFlex
            ]}>
            <Button
                disabled={disabled}
                title={title}
                onPress={onPress}
                containerStyle={[
                    styles.buttonStyle,
                    style
                ]} />
        </View>

export default memo(ButtonComp)