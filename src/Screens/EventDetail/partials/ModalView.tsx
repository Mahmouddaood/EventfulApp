
import React, { Fragment, useCallback, useMemo } from 'react'
import {
    View,
    TouchableOpacity,
    Modal
} from 'react-native'
import styles from '../styles'
import { ModalProps } from '../index.interface'
import Input from '../../../components/Input'
import TextComp from '../../../components/Text'
import Icon from '../../../components/Icon'
import Avatar from '../../../components/Avatar'
import CreateEventIcon from '../../../components/CreateEventIcon'
import Button from '../../../components/Button'
import ViewItem from '../../../components/ViewItem'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors'
import useAddReviewRequest from '../../../utilities/LogicScreens/EventDetail/hooks/useAddReviewRequest'
import { ReviewItem } from '../../../utilities/LogicScreens/EventDetail/interfaces/index.interface'
const AddImg = require('../../../assests/eventfulAssests/images/AddImg.png')
const CloseImg = require('../../../assests/eventfulAssests/images/close.png')

const { memo } = React
const {
    horizontalCenteredFlex,
    verticalCenteredFlex,
    selfCentered,
    rowStyle,
    spaceBetweenItems,
    rtlRowStyle,
    fullWidth
} = registeredStyles


const textStyle = {
    color: colors.black,
    fontSize: 14,
}

const ModalView: React.FC<ModalProps> = ({
    token,
    eventId,
    isRtl,
    evenRates,
    rates,
    loading,
    reviewsLang,
    commentLang,
    addRevLang,
    navigate,
    item
    // modalVisible
}): JSX.Element => {

    const {
        toastMsg,
        comment,
        setComment,
        setRate,
        rate,
        handleAddReview,
        modalVisible,
        setVisible,
        setMsg,
        formError
    } = useAddReviewRequest(token, eventId)

    const handleSubmit = useCallback(() => {
        handleAddReview()
    }, [
        handleAddReview
    ])

    const reviewRenderer = useCallback(
        (item: ReviewItem, idx) =>
            <Fragment key={idx}>
                <View style={[styles.reviewDetailStyle, verticalCenteredFlex, selfCentered]}>
                    <ViewItem
                        loading={loading}
                        isRtl={isRtl}
                        name={item.name}
                        image={{ uri: item.image }}
                        avatarStyle={styles.followImageStyle}
                        nameStyle={[styles.nameStyle, { textAlign: isRtl ? "right" : "left" }]}
                        itemStyle={[styles.itemStyle, fullWidth]}
                        leftView={<Button title={item.rate} containerStyle={styles.buttonContentStyle} textStyle={{
                            fontSize: 12
                        }} />}
                    />
                    <TextComp
                        children={item.comment || "this is my comment"}
                        center
                        fontSize={14}
                        color={colors.greay}
                    />
                </View>
                {!idx && <View style={[styles.betweenLineStyle, selfCentered]} />}
            </Fragment>
        , [isRtl,
            evenRates,
            loading
        ])

    return <Fragment>
        {modalVisible &&
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={
                    [
                        styles.modalStyle,
                        verticalCenteredFlex,
                        horizontalCenteredFlex,
                        selfCentered
                    ]} >

                    <View style={[
                        verticalCenteredFlex,
                        horizontalCenteredFlex
                    ]}>
                        <View style={{
                            width: 290,
                            marginHorizontal: 10,
                        }}>
                            <TextComp
                                children={"Add Your Rating"}
                                fontSize={17}
                                textStyle={{ top: 18 }}
                                color={colors.white}
                            />
                            <TouchableOpacity onPress={() => {
                                setVisible(false)
                                navigate("EventInfo", {
                                    eventDetail: item
                                })
                            }}>
                                <Avatar
                                    source={CloseImg}
                                    imageStyle={{
                                        width: 20,
                                        height: 20,
                                        right: 0,
                                        top: 0,
                                        alignSelf: "flex-end"
                                        // position: "absolute"
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Input
                            placeholder="comment"
                            multi
                            onChange={(e: any) => setComment(e)}
                            value={comment}
                            inputStyle={styles.inputCommentStyle}
                            err={formError?.comment}
                        />
                        <Input
                            placeholder="rate"
                            onChange={(e: any) => setRate(e)}
                            value={rate}
                            err={formError?.rate}
                        />
                        <TouchableOpacity style={[
                            styles.closeModStyle,
                            verticalCenteredFlex,
                            horizontalCenteredFlex
                        ]}
                            onPress={handleSubmit}>
                            <TextComp
                                children="Submit"
                                fontSize={15}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                        {/* <TextComp
                            children={toastMsg}
                            color={colors.flowerColor}
                            fontSize={18}
                            center
                        /> */}
                    </View>
                </View >
            </Modal >
        }
        <View style={[
            styles.reviewStyle,
            rowStyle,
            spaceBetweenItems,
            selfCentered,
            isRtl && rtlRowStyle
        ]}>
            <TextComp children={reviewsLang} fontSize={20} color={colors.darkPlaceHolder} />
            <TextComp children={`${rates} ${commentLang}`} color={colors.placeholder} fontSize={14} />
        </View>
        {evenRates && evenRates.map(reviewRenderer)}

        <TouchableOpacity onPress={() => {
            navigate("EventInfo", {
                eventDetail: item
            })
            // setVisible(!modalVisible)
        }}
            style={[
                styles.addRevButStyle,
                selfCentered,
                rowStyle,
                verticalCenteredFlex,
                horizontalCenteredFlex
            ]}>
            <Icon children={<CreateEventIcon color={colors.purple} width={13} height={12} iconStyle={{
                top: 8,
                left: 5,
            }} />} />
            <TextComp children={addRevLang}
                // "Add Review" 
                fontSize={16}
                color={colors.lightPurp}
            />
        </TouchableOpacity>
        <TextComp
            children={toastMsg}
            color={colors.flowerColor}
            fontSize={18}
            center
        />
    </Fragment>
}





export default memo(ModalView)