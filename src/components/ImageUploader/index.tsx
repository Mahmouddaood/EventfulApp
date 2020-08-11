import React from 'react'
import { TouchableOpacity, ImageURISource } from 'react-native'
import styles from './styles'
import Avatar from '../Avatar'
import TextComp from '../Text'
import registeredStyles from '../../utilities/registeredStyles'
import NoDataPlaceHolder from '../NoDataPlaceHolder'

const ProfShadow = require('../../assests/eventfulAssests/images/ProfShadow.png')

const {
    flexStyle,
    selfCentered,
    verticalCenteredFlex
} = registeredStyles

const {
    memo
} = React

interface ImageUploadProps {
    AnthorView?: React.FC<{ onChange?: () => void }>,
    photo?: string | ImageURISource | any,
    onChange?: () => void,
    onSubmit?: () => void,
    changeText?: string,
    loading?: boolean
}

const ImageUploader: React.FC<ImageUploadProps> = ({
    AnthorView,
    photo,
    onChange,
    onSubmit,
    changeText,
    loading
}): JSX.Element => {
    return AnthorView ? <AnthorView onChange={onChange} />
        : <TouchableOpacity onPress={onChange} style={flexStyle}>
            <NoDataPlaceHolder loading={loading}>
                <Avatar source={{
                    uri: photo,
                    cache: "cacheOnly"
                }}
                    imageStyle={[
                        styles.profImgStyle,
                        selfCentered
                    ]} />
                <Avatar source={ProfShadow}
                    imageStyle={[
                        selfCentered,
                        verticalCenteredFlex,
                        styles.profShadowStyle
                    ]}>
                    <TextComp children={changeText} center fontSize={14} onPress={onChange} />
                </Avatar>
            </NoDataPlaceHolder>
        </TouchableOpacity>

}

export default memo(ImageUploader)