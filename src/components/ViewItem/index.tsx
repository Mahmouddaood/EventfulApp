import React from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'
import styles from './styles'
import ViewItemProps from './index.interface'
import Avatar from "../../components/Avatar";
import TextComp from '../../components/Text'
import registeredStyles from '../../utilities/registeredStyles'
import colors from '../../utilities/colors'
import NoDataPlaceHolder from '../NoDataPlaceHolder';
const { memo } = React
const {
    horizontalCenteredFlex,
    shadow,
    selfCentered,
    rowStyle,
    spaceBetweenItems,
    fullHeight,
    rtlRowStyle
} = registeredStyles
const CircleImg = require('../../assests/eventfulAssests/images/CircleImg.png')


const ViewItem: React.FC<ViewItemProps> = ({
    itemStyle,
    detailView,
    firstContentStyle,
    valueStyle,
    circle,
    descStyle,
    leftView,
    avatarStyle,
    nameStyle,
    name,
    image,
    description,
    key,
    value,
    isRtl,
    loading,
    onPressDetail,
    detailStyle,
    onPressItem,
    eventInfo
}): JSX.Element =>
    <NoDataPlaceHolder loading={loading}   >
        <TouchableOpacity
            key={key}
            onPress={!eventInfo && onPressItem}
            style={[
                styles.walletItemStyle,
                shadow,
                rowStyle,
                horizontalCenteredFlex,
                spaceBetweenItems,
                selfCentered,
                isRtl && rtlRowStyle,
                itemStyle
            ]}>
            <View style={[
                styles.firstContentStyle,
                rowStyle,
                horizontalCenteredFlex,
                fullHeight,
                spaceBetweenItems,
                isRtl && rtlRowStyle,
                firstContentStyle
            ]}>
                <TouchableOpacity onPress={onPressDetail}>
                    <Avatar source={image} imageStyle={[styles.avatarStyle, avatarStyle]} />
                </TouchableOpacity>

                {detailView ?
                    detailView :
                    <TouchableOpacity onPress={onPressDetail} style={[styles.detailStyle, detailStyle]}>
                        <TextComp children={name} color={colors.black} textStyle={nameStyle} />
                        {circle && <Avatar source={CircleImg} imageStyle={[
                            styles.circleImgStyle,
                            isRtl && { right: -12 }
                        ]} />}
                        <TextComp children={description} fontSize={16} textStyle={descStyle} color={colors.placeholder} />
                    </TouchableOpacity>
                }
            </View>
            {leftView ?
                leftView :
                <TextComp children={value} textStyle={[styles.lastTxtStyle, valueStyle]} />
            }
        </TouchableOpacity>
    </NoDataPlaceHolder>

export default memo(ViewItem)