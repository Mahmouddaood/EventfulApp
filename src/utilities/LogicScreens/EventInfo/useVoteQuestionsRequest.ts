import useRequest from '../../infastructure/Hooks/useRequest'
import EventInfo from '../../infastructure/apis/EventInfo'
import QuestionDataProps from './interfaces/index.interface'

const { getVoteQuestions } = EventInfo

const useVoteQuestionsRequest = (): QuestionDataProps => {
    const { data, loading }: QuestionDataProps = useRequest(getVoteQuestions)
    return {
        data,
        loading
    }
}

export default useVoteQuestionsRequest