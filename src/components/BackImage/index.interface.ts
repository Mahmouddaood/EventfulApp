import { ViewStyle, StyleProp, TextStyle, ImageSourcePropType } from "react-native";
import { CategoryProps } from "../../utilities/LogicScreens/CreateEvent/interfaces/index.interface";

export default interface BackImgProps {
    screenName?: string,
    logoText?: string,
    logoStyle?: ViewStyle | (ViewStyle | any)[],
    center?: boolean,
    logoTxtStyle?: StyleProp<TextStyle>,
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode,
    txtStyle?: StyleProp<TextStyle>,
    loginImgStyle?: ViewStyle | (ViewStyle | any)[] | any,
    anthorView?: React.ReactNode,
    source?: ImageSourcePropType | string | any,
    searching?: boolean,
    categories?: CategoryProps[],
    filterData?: ((val: string) => void) | any
    selectedValue?: string,
    isRtl?: boolean,
    onPressBack?: () => void,
    textViewStyle?: ViewStyle | any
}


export interface SearchSecProps {
    categories?: CategoryProps[],
    filterData?: ((val: string) => void) | any
    selectedValue: string,
    itemVisible: boolean,
    setVisible: (v: boolean) => void,
    isRtl?: boolean

}