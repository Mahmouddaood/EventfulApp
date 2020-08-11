import React, { useState } from 'react'
import FlatView from './FlatView'
import {
    CommonInterface,
    EventItem
} from '../index.interface'
import styles from '../styles'


const {
    useCallback,
    memo
} = React

const CommonSection: React.FC<CommonInterface<EventItem>> = ({
    data,
    onPress,
    DetailView,
    headTitle,
    commendStyle,
    headViewStyle,
    seeAllStyle,
    contentStyle,
    isRtl,
    loading,
    isAllVisible
}): JSX.Element => {
    const handleOnePress = useCallback((item: EventItem) => onPress(item), [onPress])
    const itemMap = useCallback((item: EventItem) =>
        <DetailView key={item.id} onPress={handleOnePress(item)} item={item} loading={loading} isRtl={isRtl} />
        , [handleOnePress])
    return <FlatView
        isAllVisible={isAllVisible}
        isRtl={isRtl}
        data={data}
        renderItem={itemMap}
        headTitle={headTitle}
        headTitleStyle={[styles.rcommendStyle, commendStyle]}
        headViewStyle={[styles.headViewStyle, headViewStyle]}
        seeAllStyle={[styles.seeAlStyle, seeAllStyle]}
        contentStyle={[styles.contentStyle, contentStyle]}
    />

}
export default memo(CommonSection)
