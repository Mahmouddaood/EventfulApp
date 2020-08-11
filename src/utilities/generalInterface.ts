import { NavigationStackProp } from 'react-navigation-stack'
import { ViewStyle } from 'react-native'

export interface NavigationProps {
    navigation: NavigationStackProp
}

export interface IconProps {
    width?: number,
    height?: number,
    color?: string,
    onPress?: () => void,
    iconStyle?: ViewStyle | (ViewStyle | any)[],
    transform?: string,
    child?: React.ReactNode
}

export interface RequestProps<T> {
    data: T,
    loading: boolean | any
}