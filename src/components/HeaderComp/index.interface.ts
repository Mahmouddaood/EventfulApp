import { NavigationProps } from '../../utilities/generalInterface'
import { ImageStyle, ViewStyle, StyleProp, TextStyle } from 'react-native';

export default interface HeaderProps extends NavigationProps {
    isRtl?: boolean,
    rightIcon?: React.ReactNode,
    leftIcon?: React.ReactNode,
    screenTitle: string,
    tabView?: React.ReactNode,
    headerStyle?: ImageStyle | ViewStyle | any,
    titleStyle?: StyleProp<TextStyle>,
    pressDrawer?: boolean,
    rightView?: React.ReactNode,
    leftContainerStyle?: ViewStyle,
    leftView?: React.ReactNode
}