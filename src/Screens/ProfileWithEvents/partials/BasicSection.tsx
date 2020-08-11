import React, { Fragment } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import styles from '../styles'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors'
import TextComp from '../../../components/Text'
import Avatar from '../../../components/Avatar'
import Icon from '../../../components/Icon'
import EditIcon from '../../../components/EditIcon'
import PlusView from '../../../Screens/MainProfile/partials/Events/partails/PlusView'
import { NavigationProps } from '../../../utilities/generalInterface'
const ProfileImg = require('../../../assests/eventfulAssests/images/ProfileImg.png')

const { selfCentered } = registeredStyles
const { memo } = React

interface BasicProps extends NavigationProps {
    name: string,
    image: string,
    bio: string,
    isGuest?: boolean,
    setBioModal: (b: boolean) => void,
    bioModal?: boolean,
    isRtl?: boolean
}
const BasicSection: React.FC<BasicProps> = ({
    image,
    name,
    bio,
    navigation,
    isGuest,
    setBioModal,
    bioModal,
    isRtl
}): JSX.Element =>
    <Fragment>
        <View style={{
            width: 83, height: 83, justifyContent: "center", alignItems: "center",
            elevation: 5, top: 15, borderRadius: 40, backgroundColor: colors.background, alignSelf: "center",
            marginBottom: 25
        }}>
            <Avatar source={{ uri: image }} imageStyle={[styles.profileImgStyle, selfCentered]} />

        </View>
        {/* <Icon children={<EditIcon />} containerStyle={styles.editIconStyle} /> */}
        <PlusView
            navigation={navigation}
            style={{
                position: "absolute",
                width: 38,
                height: 38,
                top: 20,
                right: 2
            }}
            onPress={() => navigation.navigate("CreateEvent")}
        />
        <TextComp children={name} center fontSize={24} color={colors.black} />

        {/* <TextComp children='' center color={colors.black} /> */}
        {!bioModal ? <Fragment><View style={[styles.aboutStyle, {
            marginBottom: -45,
            // backgroundColor: "#000"
        }, selfCentered]}>
            <TextComp numberOfLines={bio && bio.length > 50 ? 6 : 2}
                fontSize={16} color={colors.placeholder}
                children={bio &&
                    bio.length > 60 ? bio.slice(0, 100) : bio
                } center />
        </View>
            <View style={{
                bottom: 20,
                // flexDirection: "row",
                // alignItems: "flex-start",
                marginHorizontal: 10
            }}>
                {bio && bio.length > 100 && <TouchableOpacity onPress={() => setBioModal(true)} style={{
                    backgroundColor: colors.purple,
                    width: 67,
                    top: 55,
                    height: 35,
                    borderRadius: 12,
                    alignSelf: "flex-start",
                    // marginLeft: 20,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <TextComp children={isRtl ? "اقرأ المزيد" : "ReadMore"} fontSize={15} />
                </TouchableOpacity>
                }
            </View>

        </Fragment>
            :
            <TouchableOpacity onPress={() => setBioModal(false)} style={{
                width: "94%",
                padding: 15,
                elevation: 1,
                borderRadius: 20,
                alignSelf: "center",
                minHeight: 150,
                marginBottom: 10,
                borderWidth: 1,
                borderColor: colors.black,
                backgroundColor: colors.background,

            }}>
                <ScrollView>
                    <TextComp children={bio} color={colors.placeholder} />
                </ScrollView>
            </TouchableOpacity>
        }
    </Fragment>
export default memo(BasicSection)  