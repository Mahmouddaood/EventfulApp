import baseFetch from '../../base'


class EventInfo {
    async addReaction(
        question1: string,
        question2: string,
        comment: string,
        event_id: number,
        // form: FormData,
        token: string
    ) {
        // console.log(
        //     "forKey", form
        // )
        try {
            const response = await baseFetch.post("/vote", {
                question1,
                question2,
                event_id,
                comment
            }, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    // 'Content-Type': 'multipart/form-data',
                    Accept: "application/json"
                }
            })
            console.log("answerRes =>", response)
            return response
        } catch (error) {
            console.log("answererr=>", error.response)

            return error
        }
    }

    async getVoteQuestions() {
        try {
            const response = await baseFetch.get("/questions")
            console.log("questions Res =>", response)
            return response
        } catch (error) {
            return error
        }
    }
}

export default new EventInfo()