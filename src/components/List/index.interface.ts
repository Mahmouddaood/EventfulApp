import { ViewStyle } from 'react-native'
export default interface ListProps<T> {
    flatViewStyle?: ViewStyle | (ViewStyle | any)[],
    items: T[],
    itemRenderer?: ({ item }: { item: T }) => JSX.Element,
    onHandleSelect?: ((item: string) => void) | any | undefined
}