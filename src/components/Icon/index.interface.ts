import { GestureResponderEvent, ViewStyle } from 'react-native'

export default interface IconProps {
    containerStyle?: ViewStyle | (ViewStyle | any)[] | any,
    children?: React.ReactNode,
    onPress?: ((event: GestureResponderEvent) => void) | any,
    showChildren?: boolean
}
