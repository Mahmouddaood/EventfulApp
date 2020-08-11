import React from 'react'
import {
    FlatList,
    View,
    TouchableOpacity
} from 'react-native'
import styles from './styles'
import ListProps from './index.interface'
import TextComp from '../../components/Text'
import registeredStyles from '../../utilities/registeredStyles'
const { memo, useCallback, useState } = React
const {
    fullWidth,
    shadow,
    horizontalCenteredFlex,
    verticalCenteredFlex,

} = registeredStyles


const List: React.FC<ListProps<T>> = ({
    flatViewStyle,
    items,
    itemRenderer,
    onHandleSelect
}): JSX.Element => {
    const [selected, onSelect] = useState<string>("1")
    const changeSelected = useCallback((item: T) => () => {
        if (onHandleSelect) {
            onHandleSelect(item.title)
        }
        onSelect(item.key)
    }, [onSelect, onHandleSelect])

    const buttonRender = useCallback(({ item }: { item: T }) =>
        <TouchableOpacity
            key={item.key}
            onPress={changeSelected(item)}
            style={[
                styles.buttonContainerStyle,
                shadow,
                horizontalCenteredFlex,
                verticalCenteredFlex,
                selected === item.key && styles.selectedButtonStyle
            ]}>
            <TextComp children={item.title} textStyle={styles.buttonTxtStyle} />
        </TouchableOpacity>, [selected, changeSelected])

    return (
        <View style={[styles.flatViewStyle, fullWidth, flatViewStyle]}>
            <FlatList
                data={items}
                renderItem={itemRenderer ? itemRenderer : buttonRender}
                horizontal
                contentContainerStyle={{ marginStart: 18 }}

            />
        </View>

    );
}
export default memo(List)