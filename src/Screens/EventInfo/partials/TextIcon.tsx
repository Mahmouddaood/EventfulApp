import React from 'react'
import { View } from 'react-native'
import { textIconProps, TxtIconData } from '../index.interface'
import Icon from '../../../components/Icon'
import TextComp from '../../../components/Text'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors'
const {
    spaceBetweenItems,
    fullHeight,
    rowStyle,
    fullWidth,
    selfCentered,
    horizontalCenteredFlex
} = registeredStyles
const { memo } = React



const TextIcon: React.FC<textIconProps> = ({ items }) =>
    items.map((item: TxtIconData, idx: number) =>
        <View style={[fullWidth, rowStyle, spaceBetweenItems, selfCentered, {
            height: 80,
            width: "80%",
            marginBottom: 10
        }]}>
            <View style={[
                fullHeight,
                spaceBetweenItems,
                horizontalCenteredFlex
            ]}>
                {/* <Icon children={item.icon} /> */}
                <TextComp children={item.title} center fontSize={16} color={colors.black} />
            </View>
        </View>
    )

export default memo(TextIcon)