import { StyleProp, ViewStyle } from 'react-native'
import { InterestProps, CData } from '../../utilities/LogicScreens/Profile/interfaces/index.interface'
import { CategoryProps, TagsProps } from '../../utilities/LogicScreens/CreateEvent/interfaces/index.interface'


export interface StateProps {
    visible: boolean,
    data: string[] | InterestProps[] | CData[] | TagsProps[] | CategoryProps[] | any,
    selected: string | string[] | InterestProps[] | CData[] | TagsProps[] | CategoryProps[] | any,
    style: StyleProp<ViewStyle>,
    newItem: any
}

export default interface SelectProps {
    items: string[] | InterestProps[] | CData[] | CategoryProps[] | TagsProps[] | any,
    selectStyle?: ViewStyle | any,
    selecteditems?: string[] | InterestProps[] | CData[] | CategoryProps[] | TagsProps[] | string | any,
    color?: string,
    multiSelect?: boolean,
    onChangeSelected?: (sel: string | InterestProps | CData | CategoryProps | TagsProps | any) => void,
    isRtl?: boolean,
    onUpcomindDeleteItem?: (item: InterestProps | CategoryProps | TagsProps) => void,
    err?: string,
    selectContentStyle?: ViewStyle | any,
    onAddTag?: (item: any) => void,
    tagAdded?: boolean
}


export interface AddItemProps {
    item: any,
    addNewItem?: () => void,
    isRtl?: boolean,
    changeTags?: (item: any) => void
}