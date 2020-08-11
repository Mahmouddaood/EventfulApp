import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import Avatar from '../../../../../components/Avatar'
import Icon from '../../../../../components/Icon'
import CreateEventIcon from '../../../../../components/CreateEventIcon'
import styles from '../styles'
import registeredStyles from '../../../../../utilities/registeredStyles'
import { ImageStyle } from 'react-native-fast-image'
import { NavigationProps } from '../../../../../utilities/generalInterface'

const AddImg = require('../../../../../assests/eventfulAssests/images/AddImg.png')

const { horizontalCenteredFlex, verticalCenteredFlex } = registeredStyles
const { memo } = React
interface PlusProps extends NavigationProps {
    style?: ViewStyle | any,
    onPress?: () => void,
    plusImgStyle?: ImageStyle | any,
    AnthorIcon?: React.ReactNode
}

const PlusView: React.FC<PlusProps> = ({ style, onPress, plusImgStyle, AnthorIcon, navigation }): JSX.Element =>

    <TouchableOpacity onPress={() => navigation.navigate("CreateEvent")} style={[
        styles.plusViewStyle,
        horizontalCenteredFlex,
        verticalCenteredFlex,
        style
    ]}>

        <Icon
            onPress={() => navigation.navigate("CreateEvent")}
            children={<CreateEventIcon onPress={onPress} width={15} height={12} iconStyle={{
                top: 6,
                left: 5,
            }} />} />

        {/* {AnthorIcon ? AnthorIcon : <Avatar source={AddImg} imageStyle={[styles.plusImgStyle, plusImgStyle]} />} */}
    </TouchableOpacity>

export default memo(PlusView)