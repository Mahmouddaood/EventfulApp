import { TextStyle, StyleProp } from 'react-native'


export default interface TextProps {
    center?: boolean,
    error?: boolean,
    textStyle?: StyleProp<TextStyle | TextStyle[] | any>
    onPress?: () => void,
    children?: string | number | any,
    color?: string,
    isRtl?: boolean,
    numberOfLines?: number,
    fontSize?: number
}