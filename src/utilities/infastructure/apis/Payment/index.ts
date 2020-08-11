import baseFetch from '../../base'


class Payment {
    async requestPayment(
        token: string,
        event_id: number,
        payment: string[] | string | any,
        promoCode: string
    ) {
        console.log("data=> ", event_id, payment)
        const code = promoCode !== undefined && { promo_code: promoCode }
        try {
            const response = await baseFetch.post(`/event/checkout/${event_id}`, {
                payment_type: payment,
                code
            }, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: "application/json"
                }
            }
            )
            console.log("response => r", response)
            return response
        } catch (error) {
            console.log("response => rerror", error)
            return error
        }
    }
}

export default new Payment()