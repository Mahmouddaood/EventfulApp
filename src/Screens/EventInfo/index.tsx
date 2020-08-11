import React from 'react'
import {
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import styles from './styles'
import EventInfoProps, { eventInfo } from './index.interface'
import Icon from '../../components/Icon'
import LaughingIcon from '../../components/LaughingIcon'
import EmotionIcon from '../../components/EmotionIcon'
import AngryIcon from '../../components/AngryIcon'
import TextComp from '../../components/Text'
import registeredStyles from '../../utilities/registeredStyles'
import colors from '../../utilities/colors'
// import TextIcon from './partials/TextIcon'
import ButtonComp from '../Auth/SignUpScreen/ButtonComp'
import Input from '../../components/Input'
import EventInformation from './partials/EventInformation'
import EventImgView from './partials/EventImgView'
import ImageModal from '../EventDetail/partials/ImageModal'
import MainContext from '../../utilities/Context/context'
import useAddEventReactionRequest from '../../utilities/LogicScreens/EventInfo/useAddEventReactionRequest'
import {
    AnswerProps,
    QuestionsProps
} from '../../utilities/LogicScreens/EventInfo/interfaces/index.interface'
import useVoteQuestionsRequest from '../../utilities/LogicScreens/EventInfo/useVoteQuestionsRequest'
import { isArrayHasData } from '../../utilities/infastructure/validator/isThereData'
import NoDataPlaceHolder from '../../components/NoDataPlaceHolder'
import Avatar from '../../components/Avatar'
const ProfileImg = require('../../assests/eventfulAssests/images/ProfileImg.png')

const {
    memo,
    useMemo,
    useContext,
    useCallback,
    Fragment,
    useState
} = React
const {
    fullWidth,
    flexStyle,
    rowStyle,
    selfCentered,
    spaceBetweenItems,
    fullHeight
} = registeredStyles

const EventInfo: React.FC<EventInfoProps> = ({
    navigation,
    eventInfo
}): JSX.Element => {
    const { goBack, navigate, getParam } = useMemo(() => navigation, [navigation])
    const navigateBack = useCallback(() => goBack(), [goBack])
    const handlePressProfile = useCallback(() => navigate("MainProfile"), [navigate])
    const handlePressContact = useCallback(() => {
        navigate("Contact")
    }, [navigate])
    const { state: { token, lang, langType } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const {
        questions: userQuestions,
        setQuestions,
        handleAddReaction,
        toastMsg
    } = useAddEventReactionRequest(token)

    const handlePressReaction = useCallback(() => {
        handleAddReaction
        return navigate("ProfileEvents")
    }, [navigate, handleAddReaction])

    const handleReact = useCallback((stateName: string, answer: string) => () => {
        console.log("status =>", answer, stateName)
        setQuestions({
            ...userQuestions,
            [stateName]: answer
        })
        // if (status === "liked") {
        //     setLiked(selected)
        // } else if (status === "recommended") {
        //     setRecommended(selected)
        // }
    }, [
        setQuestions,
        userQuestions
    ])

    const eventDetail = getParam("eventDetail")
    const {
        img_url,
        owner_name,
        owner_bio_ar,
        owner_bio_en,
        owner_logo,
        id,
        youtube_url,
        event_subscription
    } = useMemo(() => eventDetail, [eventDetail])
    const briefEventInfo = useMemo(() => getParam("briefEventData"), [getParam])
    const [imageModal, setImageModal] = useState<boolean>(false)

    const {
        data: questions,
        loading
    } = useVoteQuestionsRequest()

    console.log("questions=>", questions)

    return (
        <ScrollView
            style={[
                flexStyle,
                { marginBottom: -110 }
            ]}
            scrollEnabled
            shouldRasterizeIOS
        >
            {/* <EventImgView
                isRtl={isRtl}
                onNavigateBack={navigateBack}
                onNavigateProfile={handlePressProfile}
            /> */}

            <EventImgView
                onLine={event_subscription === "online" || event_subscription === "اون لاين"}
                setImageModal={setImageModal}
                navigation={navigation}
                eventImage={{ uri: img_url }}
                onNavigateBack={navigateBack}
                onNavigateProfile={handlePressProfile}
                eventId={id}
            />
            {imageModal ? <ImageModal
                setImageModal={setImageModal}
                image={{ uri: img_url }}
            />
                : <Fragment />}

            <ScrollView style={styles.scrollStyle} >

                <EventInformation
                    eventInfo={true}
                    youtube={youtube_url}
                    isRtl={isRtl}
                    onPressDetail={handlePressProfile}
                    onPressContact={handlePressContact}
                    // onPressShare={onSharing}
                    eventName={owner_name}
                    image={owner_logo === "http://eventful.sa/public/uploads" ? ProfileImg : { uri: owner_logo }}
                    key={id}
                    eventDescription={
                        isRtl ? owner_bio_ar : owner_bio_en
                    }
                />
                <NoDataPlaceHolder loading={loading}>
                    {questions.map((question: QuestionsProps) =>
                        <Fragment key={question.id}>
                            {/* <NoDataPlaceHolder loading={loading} containerStyle={!loading && {
                            paddingRight: 180
                        }}> */}
                            {/* <NoDataPlaceHolder loading={loading} > */}
                            <View style={{
                                // backgroundColor: "red",
                                width: "90%",
                                marginHorizontal: 10,
                                marginBottom: 35,
                                marginTop: 25,
                                alignSelf: "center",

                            }}>
                                <TextComp
                                    children={isRtl ? question.title_ar : question.title_en}
                                    // 'Did you like this event?' 
                                    color={colors.black}

                                    fontSize={16}
                                    textStyle={{ textAlign: isRtl ? "right" : "left" }}
                                />
                            </View>


                            <View style={[fullWidth, rowStyle, spaceBetweenItems, selfCentered, styles.emotionItemStyle]}>
                                {question.answers.map((answer: AnswerProps, answerIdx: number) =>
                                    <View key={answer.id} style={[fullHeight, spaceBetweenItems, { alignItems: "center" }]}>
                                        <NoDataPlaceHolder loading={loading}>
                                            <TouchableOpacity onPress={handleReact(question.id === 1 ? "question1" : "question2",
                                                question.id === 1 ? (answer.id === 1 ? "Yes Alot" : answer.id === 2 ? "Not Bad" : "Don't Like It") :
                                                    (answer.id === 4 ? "Sure" : answer.id === 5 ? "Maybe" : "No")

                                            )}>
                                                <Avatar source={{
                                                    uri: answer.emotion
                                                }}
                                                    imageStyle={{
                                                        width: 48,
                                                        height: 48,
                                                        marginLeft: 25
                                                    }} />
                                            </TouchableOpacity>
                                        </NoDataPlaceHolder>
                                        <NoDataPlaceHolder containerStyle={!loading && {
                                            marginTop: 25,
                                            paddingLeft: 25,

                                        }} loading={loading}><TextComp children={
                                            isRtl ? answer.title_ar : answer.title_en
                                        } center fontSize={16} color={question.id === 1 ?
                                            (answer.title_en === userQuestions.question1 ? colors.flowerColor : colors.black)
                                            :
                                            answer.title_en === userQuestions.question2 ? colors.flowerColor : colors.black
                                        } />
                                        </NoDataPlaceHolder>
                                    </View>
                                )}
                            </View>
                        </Fragment>
                    )}
                </NoDataPlaceHolder>
                {/* <TextComp
                    children={lang.WillRecommend} 
                    // 'Will you recommend this event to your friends?'
                    color={colors.black}
                    fontSize={16}
                    textStyle={isRtl ? styles.rtlTxtStyle : styles.likeStyle}
                />
                <View style={[fullWidth, rowStyle, spaceBetweenItems, selfCentered, styles.emotionItemStyle]}>

                    {[0, 1, 2].map((idx: number) =>
                        <View key={idx} style={[fullHeight, spaceBetweenItems, styles.recommendedStyle]}>
                            <Icon children={
                                !idx ? <LaughingIcon onPress={() => handleReact("sure", "recommended")} />
                                    : idx === 1 ? <EmotionIcon onPress={() => handleReact("maybe", "recommended")} />
                                        : idx === 2 && <AngryIcon
                                            onPress={() => handleReact("no", "recommended")}
                                            iconStyle={{ right: 6 }} />
                            } />
                            <TextComp children={
                                !idx ? `${lang.Sure}`
                                    // "Sure"
                                    : idx === 1 ? `${lang.MayBe}`
                                        // "Maybe"
                                        : idx === 2 && `${lang.No}`
                                // "No"
                            } center fontSize={16} color={colors.black} />
                        </View>
                    )}
                </View>
                <TextIcon items={reactions} /> */}
                {/* <TextIcon items={recommendions} /> */}
                <Input
                    placeholder={lang.LoveToHearFromYu}
                    isRTL={isRtl}
                    // "We would love to hear from you….."
                    inputStyle={styles.textAreaStyle}
                    value={userQuestions.comment}
                    onChange={e => setQuestions({
                        ...userQuestions,
                        comment: e
                    })}
                    fontSize={14}
                />

                <ButtonComp
                    title={lang.Submit}
                    // "Submit"
                    onPress={handleAddReaction(id)}
                    style={styles.lastButStyle}
                />
                <TextComp
                    children={toastMsg}
                    color={"green"}
                    fontSize={23}
                    center

                />
            </ScrollView>
        </ScrollView>
    )
}

export default memo(EventInfo)

EventInfo.defaultProps = {
    eventInfo: eventInfo
}
