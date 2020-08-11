import baseFetch from '../../base'

class Wallet {

    async fetchBankDetail(token: string) {
        try {
            const response = await baseFetch.get("/user/bank_account", {
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            })
            return response.data.data
        } catch (error) {
            return error
        }
    }

    async fetchBankList() {
        try {
            const response = await baseFetch.get("/banks")
            return response.data
        } catch (error) {
            return error
        }
    }

    async addBankAccount(
        bank_id: string | number,
        primary_account: string | number,
        account_number1: string | number,
        iban1: string | number,
        account_number2: string | number,
        iban2: string | number,
        token: string
    ) {
        try {
            const response = await baseFetch.post("/update_account", {
                bank_id,
                primary_account,
                account_number1,
                iban1,
                account_number2,
                iban2
            }, {

                headers: {
                    Authorization: 'Bearer ' + token,
                }
            })
            return response.data

        } catch (error) {
            return error

        }
    }
    async fetchRegisterationPaid(
        token: string,
    ) {
        try {
            const response = await baseFetch.get("/user/event_registrations_paid"
                , {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    }
                })
            return response.data

        } catch (error) {
            return error

        }
    }


}

export default new Wallet()