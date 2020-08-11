import { RequestProps } from '../../../generalInterface'


export default interface QuestionDataProps extends RequestProps<QuestionsProps[]> { }

export interface QuestionsProps {
    id: number,
    title_ar: string,
    title_en: string,
    answers: AnswerProps[]
}


export interface AnswerProps {
    id: number,
    title_ar: string,
    title_en: string,
    emotion: string,
    question_id: number
}

export interface QuestionState {
    question1: string,
    question2: string,
    comment: string
}