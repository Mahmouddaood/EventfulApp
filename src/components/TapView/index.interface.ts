import { ViewStyle } from "react-native";

export const tapData = (isRtl: boolean): TapDataProps[] => [
    {
        title: isRtl ? "بيانات الحساب" : "Profile",
        view: "Profile"
    },
    {
        title: isRtl ? "كل المناسبات" : "Events",
        view: "Events"
    },
    {
        title: isRtl ? "تابع" : "Follow",
        view: "Follow"
    }
]

export interface TapDataProps {
    title: string,
    view: string
}

export default interface TapProps {
    handlePress?: (type: string) => void | any,
    selected?: string | any,
    isRtl?: boolean | any,
    taps: (isRtl: boolean) => TapDataProps[],
    tabItemStyle?: ViewStyle | any,
    tabStyle?: ViewStyle | any
}


