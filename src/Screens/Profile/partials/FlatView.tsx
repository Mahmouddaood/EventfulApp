import React from 'react'
import {
    View,
    ScrollView,
} from 'react-native'
import styles from '../styles'
import { FLatProps } from '../index.interface'
import TextComp from '../../../components/Text'
import registeredStyles from '../../../utilities/registeredStyles'
const { memo } = React
const {
    shadow,
    spaceBetweenItems,
    rowStyle,
    rtlRowStyle
} = registeredStyles
const FlatView: React.FC<FLatProps<T>> = ({
    data,
    renderItem,
    headTitle,
    contentStyle,
    headViewStyle,
    isRtl,
    isAllVisible
}): JSX.Element => {
    return <View style={[styles.contentStyle, contentStyle,]}>
        <View style={[rowStyle, spaceBetweenItems, styles.headViewStyle, shadow, isRtl && [styles.rtlViewStyle, rtlRowStyle], headViewStyle]}>
            <TextComp children={headTitle} textStyle={[styles.rcommendStyle]} />
            {/* {isAllVisible && <TextComp children={isRtl ? "تابع الكل" : 'see all'} textStyle={[styles.seeAlStyle]} />} */}
        </View>
        {/* <View style={{ transform: [{ scaleX: -1 }] }}> */}

        <ScrollView
            // contentContainerStyle={{ flexDirection: "row-reverse" }}
            // directionalLockEnabled={isRtl && true}
            scrollEnabled horizontal
            showsHorizontalScrollIndicator={false}
            style={[
                styles.scrollStyle,
                isRtl && styles.rtlScrollStyle,
                shadow
            ]}
        >
            {data.map(renderItem)}
        </ScrollView>
    </View>
}
export default memo(FlatView)
