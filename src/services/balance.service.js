import axios from 'axios';
import authHeader from './auth-header';
import configs from '../configs/local'
class BalanceService {

    getBalances() {
        console.log('came in get Balances.........')
        return axios.get(configs.API_URL+'/api/getBalances', { headers: authHeader() }, { timeout: 5000 });
    }
    updateBalance(balanceData) {
        return axios({
            method: 'POST',
            data: balanceData,
            url: '/api/updateBalance',
            headers: authHeader()
        })
    }
    updateBalanceFromRequest(balanceData) {
        return axios({
            method: 'POST',
            data: balanceData,
            url: '/api/updateBalanceFromRequest',
            headers: authHeader()
        })
    }
    addBalance(balanceData) {
        return axios({
            method: 'POST',
            data: balanceData,
            url: '/api/addBalance',
            headers: authHeader()
        })
    }
    deleteBalance(balanceData) {
        return axios({
            method: 'POST',
            data: balanceData,
            url: '/api/deleteBalance',
            headers: authHeader()
        })
    }
    getBalance(balanceId) {
        return axios.get(`/api/getBalance/${balanceId}`, { headers: authHeader() }, { timeout: 5000 });
    }

}

export default new BalanceService();