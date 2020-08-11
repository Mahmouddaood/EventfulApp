import {
    GestureResponderEvent,
    ViewStyle,
    TextStyle
} from 'react-native'

export default interface ButtonProps {
    title: string | number,
    onPress?: (event: GestureResponderEvent) => void,
    containerStyle?: ViewStyle | (ViewStyle | any)[],
    textStyle?: TextStyle | TextStyle[],
    center?: boolean,
    disabled?: boolean
}