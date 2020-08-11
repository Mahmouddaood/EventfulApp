import React, { useCallback } from 'react'
import {
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors'
import styles from '../styles'
import Icon from '../../Icon'
import TextComp from '../../Text'
import DeleteIcon from '../../DeleteIcon'
import { isArrayHasData } from '../../../utilities/infastructure/validator/isThereData'
import { InterestProps, CData } from '../../../utilities/LogicScreens/Profile/interfaces/index.interface'
import { CategoryProps, TagsProps } from '../../../utilities/LogicScreens/CreateEvent/interfaces/index.interface'
const { memo } = React
const {
    rowStyle,
    spaceBetweenItems,
    horizontalCenteredFlex,
    fullWidth,
    selfCentered,
    verticalCenteredFlex
} = registeredStyles

interface Props {
    selectedItems: InterestProps[] | string[] | CategoryProps[] | any,
    onDeleteItem: (i: InterestProps | CategoryProps | TagsProps) => void,
    isRtl?: boolean
}

const SelectedItems: React.FC<Props> = ({ selectedItems, onDeleteItem, isRtl }): JSX.Element => {

    const onDelete = useCallback((i: InterestProps | CategoryProps | TagsProps) => () => onDeleteItem(i), [onDeleteItem])

    return <ScrollView horizontal style={[rowStyle, fullWidth, selfCentered, styles.multiSelectViewStyle,]}>
        {selectedItems && isArrayHasData(selectedItems) && selectedItems.map((item: InterestProps | TagsProps | CategoryProps | string | any, idx: number) => {
            if (item !== undefined && (!isRtl ? (item.title_en ? item.title_en : item.name_en ? item.name_en : item.name ? item.name : item) :
                (item.title_ar ? item.title_ar : item.name_ar ? item.name_ar : item.name ? item.name : item)
            )) {
                console.log("hearer")
                return <TouchableOpacity key={idx}
                    style={[horizontalCenteredFlex, verticalCenteredFlex, spaceBetweenItems, styles.selectedItemStyle, rowStyle]}>
                    <TextComp
                        children={isRtl ?
                            (item?.title_ar ? item.title_ar : item.name_ar)
                            : (item?.title_en ? (!item?.title_en ? "" : item?.title_en) : item.name_en)
                        }
                        color={colors.black}
                        center
                        fontSize={14}
                        textStyle={styles.selectedTextItemStyle} />
                    <Icon
                        children={<DeleteIcon onPress={onDelete(item)} />}
                    />
                </TouchableOpacity>
            }
        }
        )}
    </ScrollView>

}


export default memo(SelectedItems)