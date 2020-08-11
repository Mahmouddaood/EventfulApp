import { ViewStyle } from "react-native";

export default interface DatePickerProps {
    startDate?: Date | any,
    onDateChanged?: ((date: string | any) => void),
    onError?: (error: string | any) => void,
    selected?: string,
    maxDate?: Date | undefined,
    minDate?: Date | undefined,
    modalButtonText?: string | any,
    isRtl?: boolean,
    dateFT?: string,
    err?: string,
    dateInputStyle?: ViewStyle | any
}


export interface DateStateProps {
    date: Date | any,
    showIOSModal: boolean,
    selectedData?: string
}