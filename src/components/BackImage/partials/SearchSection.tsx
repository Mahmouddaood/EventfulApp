import React, { useState, useEffect, memo, Fragment } from "react";
import {
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import { SearchSecProps } from '../index.interface'
import styles from '../styles'
import TextComp from '../../Text'
import colors from '../../../utilities/colors'
import registeredStyles from '../../../utilities/registeredStyles'
import { CategoryProps } from "../../../utilities/LogicScreens/CreateEvent/interfaces/index.interface";
const {
    verticalCenteredFlex,
    fullWidth,
    selfCentered
} = registeredStyles


const SearchSection: React.FC<SearchSecProps> = ({
    selectedValue,
    categories,
    filterData,
    itemVisible,
    setVisible,
    isRtl
}): JSX.Element => {


    return itemVisible ? <TouchableOpacity style={[
        styles.selectedItemStyle,
        isRtl && styles.rtlSelectedItemStyle,
        verticalCenteredFlex
    ]}
        onPress={() => setVisible(false)}
    >
        <TextComp
            children={selectedValue}
            fontSize={20}
            center
            color={colors.black}
        />
    </TouchableOpacity>
        :
        <View style={[
            styles.itemViewStyle,
            isRtl && styles.rtlItemViewStyle
        ]}>
            {categories?.map((item: CategoryProps) =>
                <TouchableOpacity
                    key={item.id}
                    style={[
                        styles.itemStyle,
                        selfCentered,
                        fullWidth
                    ]}
                    onPress={() => {
                        setVisible(!itemVisible)
                        filterData(isRtl ? item.name_ar : item.name_en)
                    }}
                >
                    <TextComp
                        children={isRtl ? item.name_ar : item.name_en}
                        center
                        fontSize={20}
                        color={colors.black}

                    />
                </TouchableOpacity>
            )}
        </View>

}



export default memo(SearchSection)