import { StyleProp, ViewStyle } from "react-native";

export default interface NoDataPlaceHolderProps {
    noData?: boolean,
    loading?: boolean,
    children?: React.ReactNode,
    containerStyle?: StyleProp<ViewStyle> | any
}