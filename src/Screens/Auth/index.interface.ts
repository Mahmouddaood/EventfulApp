import {
    ViewStyle,
    GestureResponderEvent,
    StyleProp,
    TextStyle
} from 'react-native'
import { NavigationProps } from '../../utilities/generalInterface'

export interface BCompProps {
    title: string,
    style?: ViewStyle | ViewStyle[],
    onPress?: (event: GestureResponderEvent) => void,
    disabled?: boolean
}


export interface HocProps extends NavigationProps {
    children: React.ReactNode,
    screenName: string,
    buttonTitle: string,
    logoText: string,
    checkStartText: string,
    checkEndText: string,
    onButtonPress?: (event: GestureResponderEvent) => void,
    onLinkPress?: () => void,
    buttonDisabled?: boolean,
    underLineStyle?: ViewStyle | any
}

export interface TVProps {
    underLineStyle?: ViewStyle | any
    startText: string,
    isRtl?: boolean,
    endText: string,
    containerStyle?: StyleProp<TextStyle>,
    textStyle?: StyleProp<TextStyle>,
    linkPress?: () => void
}


export const data: string[] = ['Male', 'Female']
