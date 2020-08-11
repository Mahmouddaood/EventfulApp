import React, { memo, Fragment } from 'react'
import {
    View, ViewStyle,
} from 'react-native'
import styles from './styles'
import TextComp from '../../../../../components/Text'
import registeredStyles from '../../../../../utilities/registeredStyles'
import colors from '../../../../../utilities/colors'
import Button from "../../../../../components/Button";
import { UserEvent } from '../../../../../utilities/LogicScreens/Profile/interfaces/index.interface'


const {
    rowStyle,
    spaceBetweenItems,
    selfCentered,
    fullWidth
} = registeredStyles

interface DetailEventProps {
    item: UserEvent | any,
    isRtl: boolean,
}
const DetailEvent: React.FC<DetailEventProps> = ({
    item,
    isRtl,
}): JSX.Element => <View style={[
    styles.detailViewStyle,
    fullWidth,
]} >
        <TextComp children={item?.formatted_date_time}
            textStyle={{ width: "100%", marginBottom: 2 }}
            fontSize={9}
            color={"#1fb895"}

        />
        <TextComp
            children={item?.name}
            color={colors.black}
            fontSize={item?.name.length > 15 ? 13 : 17}
            textStyle={{ textAlign: isRtl ? "right" : "left", fontWeight: "bold" }} />

    </View >

export default memo(DetailEvent)