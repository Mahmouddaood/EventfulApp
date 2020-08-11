import { ImageURISource, ViewStyle, StyleProp, TextStyle } from "react-native"
import { NavigationProps } from '../../../../utilities/generalInterface'

export default interface ProfileSectionProps extends NavigationProps { }

export interface ProfileDataProps {
    name: string | any,
    job: string | any,
    image: string | ImageURISource | any,
    emailAddress: string | any,
    city: string | any,
    phone: string | any,
    interestedIn: string[] | any
}

export interface RenderProps {
    headStyle?: ViewStyle | ViewStyle[],
    firstTextStyle?: StyleProp<TextStyle>,
    endTextStyle?: StyleProp<TextStyle>,
    title?: string,
    value?: string | number,
    endLine?: boolean,
    onPress?: () => void,
    isRtl?: boolean,
    loading?: boolean
}


