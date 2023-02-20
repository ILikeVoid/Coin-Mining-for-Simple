import {apiInstance} from "./axios";

export const depositApi = {
    getUsersCount: () => {
        return apiInstance.get('coin/get_users/')
    },
    getWithdrawsCount: () => {
        return apiInstance.get('coin/get_all_withdraws/')
    },
    getDepositsCount: () => {
        return apiInstance.get('coin/get_all_deposits/')
    },
    withDraw: (number, amount, currency, system) => {
        return apiInstance.post('coin/cashout/', {number, amount, currency, system}, {
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('access_token')
            }
        })
    },
    deposit: (amount, currency, system, term, comment='test') => {
        return apiInstance.post('coin/generate_address/', {amount, currency, system, term, comment}, {
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('access_token')
            }
        })
    }
}