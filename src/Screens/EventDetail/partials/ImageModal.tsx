
import React from 'react'
import {
    TouchableOpacity,
    Modal
} from 'react-native'
import styles from '../styles'
import { IconTxtProps } from '../index.interface'
import Icon from '../../../components/Icon'
import TextComp from '../../../components/Text'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors'

import TicketIcon from '../../../components/TicketIcon'
import TimeIcon from '../../../components/TimeIcon'
import Avatar from '../../../components/Avatar'
import NoDataPlaceHolder from '../../../components/NoDataPlaceHolder'

const { memo } = React
const {
    rowStyle,
    horizontalCenteredFlex,
    rtlRowStyle
} = registeredStyles


const textStyle = {
    color: colors.placeholder,
    fontSize: 14,
}

interface ImageModalProps {
    setImageModal: (b: boolean) => void,
    image: string | any
}

const ImageModal: React.FC<ImageModalProps> = ({
    setImageModal,
    image
}): JSX.Element =>

    <Modal transparent>
        <TouchableOpacity onPress={() => setImageModal(false)} style={{
            width: 338,
            padding: 15,
            elevation: 1,
            borderRadius: 20,
            alignSelf: "center",
            height: 340,
            borderWidth: 1,
            borderColor: "#ced4e2",
            // backgroundColor: colors.background,
            top: 185

        }}>
            <Avatar source={image} imageStyle={{
                width: "109%",
                alignSelf: "center",
                height: 340,
                bottom: 16,
                borderRadius: 20
                // aspectRatio: 1.6

            }} />
        </TouchableOpacity>
    </Modal>



export default memo(ImageModal)