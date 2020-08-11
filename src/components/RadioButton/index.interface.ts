import { ViewStyle } from "react-native";

export default interface RadioProps {
    radioData?: string[],
    isRtl?: boolean,
    onChange?: (val: string | any) => void,
    selected?: string | string[] | any,
    titleFound?: boolean,
    radioStyle?: ViewStyle | any,
    radioTextStyle?: ViewStyle | any,
    multiRadio?: boolean
}

export const radioData: string[] = [
    "online",
    "offline"
]