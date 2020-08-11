import React from 'react'
import {
    ImageBackground,
    View,
    TouchableOpacity
} from 'react-native'
import registeredStyles from '../../../../utilities/registeredStyles'
import TextComp from "../../../../components/Text";
import Icon from '../../../../components/Icon'
import styles from './DetailShadowStyles'
import LocationIcon from '../../../../components/LocationIcon'
import DateIcon from '../../../../components/DateIcon'
import { ItemProps } from '../../index.interface'
import ForwardIcon from '../../../../components/ForwardIcon';
import { IMAGE_BASE_URL } from '../../../../utilities/infastructure/config';
import NoDataPlaceHolder from '../../../../components/NoDataPlaceHolder';
const ShadowImg = require('../../../../assests/eventfulAssests/images/ShadowImg.png')

const { memo } = React
const {
    rowStyle,
    fullWidth,
    spaceBetweenItems,
    selfCentered,
    verticalCenteredFlex,
    horizontalCenteredFlex
} = registeredStyles

const DetailedShadowItem: React.FC<ItemProps> = ({ onPress, item, loading }): JSX.Element =>
    <NoDataPlaceHolder loading={loading}>
        <TouchableOpacity key={item.id} onPress={onPress}>
            <ImageBackground
                source={{
                    uri: IMAGE_BASE_URL + item.img
                }}
                key={item.id}
                style={[styles.imageStyle]} >
                <ImageBackground
                    source={ShadowImg}
                    style={[
                        styles.descDetailStyle,
                        rowStyle,
                        fullWidth,
                        verticalCenteredFlex,
                        horizontalCenteredFlex,
                        spaceBetweenItems,
                        selfCentered
                    ]}>
                    <View>
                        <TextComp
                            children={item.event_subscription}
                            textStyle={styles.statuStyle}
                        />
                        <TextComp
                            children={item.name}
                            textStyle={[
                                styles.nameStyle,
                                fullWidth
                            ]}
                        />
                        <View
                            style={[styles.locDateStyle, rowStyle]}>
                            <View style={[rowStyle, { width: "45%" }]}>
                                <Icon children={<LocationIcon />} />
                                <TextComp children={item.address} textStyle={styles.locStyle} />
                            </View>
                            <View style={[rowStyle, { width: "30%" }]}>
                                <Icon children={<DateIcon />} />
                                <TextComp children={item.formatted_date} textStyle={styles.dateStyle} />
                            </View>
                        </View>

                    </View>
                    <View style={[
                        verticalCenteredFlex,
                        horizontalCenteredFlex,
                        styles.iconImgStyle
                    ]}>
                        <Icon children={<ForwardIcon />} />
                    </View>

                </ImageBackground>
            </ImageBackground >
        </TouchableOpacity>
    </NoDataPlaceHolder>

export default memo(DetailedShadowItem)