import { TextStyle, StyleProp } from 'react-native'


export default interface InputProps {
    value?: string,
    inputStyle?: StyleProp<TextStyle | any>,
    onChange?: (value: string) => void;
    placeholder?: string,
    isRTL?: boolean,
    keyboardType?: string | any,
    fontSize?: number,
    color?: string,
    secure?: boolean,
    err?: string | any
    multi?: boolean,
    icon?: React.ReactNode
}