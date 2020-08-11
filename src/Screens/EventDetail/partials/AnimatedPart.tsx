import React, { memo, useCallback } from 'react'
import {
    Animated,
    View,
    Linking,
    TouchableOpacity
} from 'react-native'
import styles from '../styles'
import TextComp from '../../../components/Text'
import Input from '../../../components/Input'
import Avatar from '../../../components/Avatar'
import FacebookIcon from '../../../components/FacebookIcon'
import Button from '../../../components/Button'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors'
import Icon from '../../../components/Icon'
import WhatsIcon from '../../../components/WhatsIcon'
import InstagramIcon from '../../../components/InstagramIcon'
import AlarmIcon from '../../../components/AlarmIcon'
import { IMAGE_BASE_URL } from '../../../utilities/infastructure/config'
import Share from 'react-native-share';


const {
    rowStyle,
    verticalCenteredFlex,
    horizontalCenteredFlex,
    fullWidth,
    selfCentered,
    spaceBetweenItems
} = registeredStyles

interface AnimatedPartProps {
    shareAnimated: any,
    owner_logo: string
}

const AnimatedPart: React.FC<AnimatedPartProps> = ({
    shareAnimated,
    owner_logo
}) => {
    const shareEventTo = useCallback((to: string, message: string) => () => {
        let url = `${to}://send?text=${message}&image=${{ uri: IMAGE_BASE_URL + owner_logo }}`;
        console.log('', to, message)
        Linking.openURL(url).then((data) => {
        }).catch(() => {
            console.log('App not installed')
        });

    }, [

    ])

    const onSharing = useCallback(() => {

        const url = `${IMAGE_BASE_URL}${owner_logo}`;
        const title = 'Awesome Event';
        const message = 'Please check this out.';
        const options = {
            title,
            subject: title,
            message: `${message} ${url}`,
            social: Share.Social.FACEBOOK,

        }


        Share.open(options);

    }, [

    ])


    return <Animated.View style={[fullWidth,
        styles.animatedStyle,
        { opacity: shareAnimated }]}>
        <View style={[styles.firstPartStyle, selfCentered]}>
            <View style={[rowStyle, selfCentered,]}>
                <Avatar source={{ uri: owner_logo }} imageStyle={styles.ownerLogoStyle} />
                <TextComp children={"You can share that event toany social media whatever you want"}
                    fontSize={15}
                    color={colors.black}
                    textStyle={styles.shareTxtStyle}
                />
                <Button title={"Share now"}
                    textStyle={{ fontSize: 14 }}
                    containerStyle={styles.shareButStyle} />
            </View>
        </View>
        <Input placeholder={"write somthing here"}
            multi
            inputStyle={[
                fullWidth,
                styles.inputStyle
            ]} />
        <View style={[fullWidth, styles.lineStyle]} />
        {[0, 1, 2, 3].map((id: number) =>
            <TouchableOpacity
                style={[
                    styles.itemShareStyle,
                    fullWidth,
                    selfCentered,
                    verticalCenteredFlex]}
                onPress={
                    // shareEventTo(!id ?
                    //     "facebook" :
                    //     id === 1 ?
                    //         "instgram" :
                    //         id == 2 ?
                    //             "whatsapp" :
                    //             "twitter",
                    //     "Look to That Event"
                    // )
                    onSharing
                }
            >

                <View style={[{ width: "70%" }, rowStyle, spaceBetweenItems, horizontalCenteredFlex]}>
                    <Icon children={!id ? <FacebookIcon /> : id === 1 ? <InstagramIcon /> : id === 2 ? <WhatsIcon /> : id === 3 && <AlarmIcon />} />
                    <TextComp children={`Share to ${!id ? 'Facebook' : id === 1 ? 'Instgram' : id === 2 ? 'Whatsapp' : 'Others'}`}
                        fontSize={16}
                        color={colors.darkerMain}
                        textStyle={{
                            width: "50%",
                        }}
                    />

                </View>
            </TouchableOpacity>
        )}

    </Animated.View>
}

export default memo(AnimatedPart)