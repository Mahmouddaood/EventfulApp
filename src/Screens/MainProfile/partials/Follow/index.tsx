import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import TextComp from '../../../../components/Text'
import ViewItem from '../../../../components/ViewItem'
import colors from '../../../../utilities/colors'
import registeredStyles from '../../../../utilities/registeredStyles'
import MainContext from '../../../../utilities/Context/context'
import useUnfollowProfile from "../../../../utilities/LogicScreens/Profile/hooks/useUnfollowProfile";
import useGetUserFollowerRequest from '../../../../utilities/LogicScreens/Profile/hooks/useGetUserFollowerRequest'
import { FollowItem } from '../../../../utilities/LogicScreens/Profile/interfaces/index.interface'
import { NavigationProps } from '../../../../utilities/generalInterface'
const { flexStyle, shadow, verticalCenteredFlex, horizontalCenteredFlex } = registeredStyles
const {
    memo,
    useContext,
    useCallback,
    useMemo
} = React

const FollowSection: React.FC<NavigationProps> = ({ navigation }): JSX.Element => {

    const { state: { token, id, lang, langType } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const {
        data,
        loading
    } = useGetUserFollowerRequest(id)
    const {
        handleUnfollow,
        toastMsg
    } = useUnfollowProfile()
    const onPressUnFollow = useCallback((item: number) => () => handleUnfollow(item, token, isRtl, "un"), [handleUnfollow])
    const follwerMap = useCallback((item: FollowItem) =>
        <ViewItem
            onPressItem={() => navigation.navigate("ProfileEvents", {
                profileItemId: item.id
            })}
            loading={loading}
            isRtl={isRtl}
            itemStyle={styles.itemStyle}
            avatarStyle={styles.avatarStyle}
            firstContentStyle={{ width: "75%", }}
            key={item.id}
            detailStyle={[{ width: "80%", margin: 0, marginLeft: 12 }, isRtl && { marginRight: 8 }]}
            nameStyle={isRtl ? styles.rtlNameStyle : styles.nameStyle}
            // circle={item.pivot.relation === "follow"}
            name={item.name}
            image={{ uri: item.photo_url }}
            // description={item.address || item.email}
            leftView={<TouchableOpacity
                key={item.id}
                style={[
                    styles.leftViewStyle,
                    shadow,
                    verticalCenteredFlex,
                    horizontalCenteredFlex
                ]}
                onPress={onPressUnFollow(item.pivot.followable_id)}
            >
                <TextComp color={colors.lightBlack} children={lang.Unfollow} center fontSize={14} />
            </TouchableOpacity>}
        />
        , [
            isRtl,
            lang.Unfollow,
            onPressUnFollow,
            loading
        ])
    return <ScrollView
        style={[flexStyle, styles.scrollStyle]}
        scrollEnabled
        shouldRasterizeIOS
    >
        {data && data.map(follwerMap)}
        <TextComp
            children={toastMsg}
            color={colors.flowerColor}
            fontSize={18}
            center
        />
    </ScrollView>
}

export default memo(FollowSection)