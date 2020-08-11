import React from 'react'
import { TouchableOpacity } from 'react-native'
import ButtonProps from './index.interface'
import TextComp from '../Text'
import { styles } from './styles'
import registeredStyles from '../../utilities/registeredStyles'


const {
    horizontalCenteredFlex,
    verticalCenteredFlex
} = registeredStyles;


const Button: React.FC<ButtonProps> = ({
    textStyle,
    title,
    containerStyle,
    onPress,
    center,
    disabled
}): JSX.Element =>
    <TouchableOpacity style={[
        styles.container,
        horizontalCenteredFlex,
        verticalCenteredFlex,
        containerStyle
    ]}
        onPress={onPress}
        disabled={disabled}

    >
        <TextComp
            children={title}
            center={center}
            textStyle={[
                styles.textStyle,
                textStyle
            ]}
        />
    </TouchableOpacity>


export default Button
