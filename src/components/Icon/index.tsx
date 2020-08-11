import React from 'react'
import { TouchableOpacity } from 'react-native'
import IconProps from './index.interface'
import { styles } from './styles'
import registeredStyles from '../../utilities/registeredStyles'
const { shadow } = registeredStyles
const Icon: React.FC<IconProps> = ({ containerStyle, onPress, children, showChildren = true }): JSX.Element =>
    <TouchableOpacity style={[
        styles.containerStyle,
        containerStyle
    ]}
        onPress={onPress}
    >
        {showChildren && children}
    </TouchableOpacity>




export default React.memo(Icon)
