import { ImageURISource, ViewStyle } from 'react-native'
import { NavigationProps } from '../../../../utilities/generalInterface'

export default interface EventSectionProps extends NavigationProps {
    plus?: boolean
}

export interface eventImageData {
    partyEvent: string | ImageURISource | any,
    MusicalEvent: string | ImageURISource | any,
    conertEvent: string | ImageURISource | any,
    culturalEvent: string | ImageURISource | any,
}

export interface EventInfoSectionProps extends NavigationProps {
    containerStyle?: ViewStyle | any,
    plus?: boolean
}