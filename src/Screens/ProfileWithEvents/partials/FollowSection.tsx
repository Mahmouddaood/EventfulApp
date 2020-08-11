import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from '../styles'
import TextComp from '../../../components/Text'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors';
const {
    rowStyle,
    selfCentered,
    spaceBetweenItems,
} = registeredStyles
const { memo } = React
interface FollowSecProps {
    followers: number,
    following: number,
    setModal: (b: string) => void,
    followerTitle: string,
    followingTitle: string
}

const FollowSection: React.FC<FollowSecProps> = ({
    followers,
    following,
    setModal,
    followerTitle,
    followingTitle
}): JSX.Element =>
    <View style={[rowStyle, selfCentered, spaceBetweenItems, styles.followViewStyle]}>
        <TouchableOpacity onPress={() => { if (followers) { setModal("follower") } }}>
            <TextComp children={followerTitle} center fontSize={20} color={colors.placeholder} />
            <TextComp children={followers} center fontSize={20} color={colors.black} />
        </TouchableOpacity>
        <View style={[styles.verticalLineStyle, selfCentered]} />
        <TouchableOpacity onPress={() => { if (following) { setModal("following") } }}>
            <TextComp children={followingTitle} center fontSize={20} color={colors.placeholder} />
            <TextComp children={following} center fontSize={20} color={colors.black} />
        </TouchableOpacity>
    </View>

export default memo(FollowSection)  