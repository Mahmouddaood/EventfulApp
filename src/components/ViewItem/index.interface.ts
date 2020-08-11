import { ViewStyle, StyleProp, TextStyle, ImageStyle, ImageURISource } from "react-native";
import { FastImageSource } from "react-native-fast-image";

export default interface ViewItemProps {
    itemStyle?: ViewStyle | (ViewStyle | any)[],
    detailView?: React.ReactNode,
    firstContentStyle?: ViewStyle | (ViewStyle | any)[],
    valueStyle?: StyleProp<TextStyle>,
    circle?: boolean,
    descStyle?: StyleProp<TextStyle>,
    leftView?: React.ReactNode,
    avatarStyle?: ViewStyle | ImageStyle | any,
    nameStyle?: StyleProp<TextStyle>,
    name?: string | any,
    image?: string | FastImageSource | ImageURISource | any,
    description?: string | any,
    key?: string | any,
    value?: string | any,
    isRtl?: boolean,
    loading?: boolean,
    onPressDetail?: () => void,
    detailStyle?: ViewStyle | ViewStyle[] | any,
    onPressItem?: (() => void) | any,
    eventInfo?: boolean
}