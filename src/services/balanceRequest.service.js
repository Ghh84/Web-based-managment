//import axios from '../utils/axios.utils';

import authHeader from './auth-header';
import axios from "axios";
import configs from '../configs/local'
class BalanceRequestService {

    // getTransactions(filterObj) {
    //     console.log('came in get Transactions.........')
    //     return axios.get(configs.API_URL+'/api/getTransactions', { headers: authHeader() }, { timeout: 5000 });
    // }
    addRequest(RequestData) {
        console.log('came to add Request.........', RequestData)
        return axios({
            method: 'POST',
            url: configs.API_URL+'/api/addRequest',
            data: RequestData,
            headers: authHeader()
        });
    }
    updateBalanceReauest(RequestData) {
        console.log('came to update Request.........', RequestData)
        return axios({
            method: 'POST',
            url: configs.API_URL+'/api/updateBalanceReauest',
            data: RequestData,
            headers: authHeader()
        });
     }
    // editTransaction(TransactionData) {
    //     console.log('came to edit Transaction.........', TransactionData)
    //     return axios({
    //         method: 'POST',
    //         data: TransactionData,
    //         url:configs.API_URL+'/api/editTransaction',
    //         headers: authHeader()
    //     })
    // }
    // deleteTransaction(data) {
    //     return axios({
    //         method: 'POST',
    //         data,
    //         url: '/api/deleteTransaction',
    //         headers: authHeader()
    //     })
    // }
    getRequest() {
        console.log('get all requested................')
        return axios.get(configs.API_URL+'/api/getRequest');
    }
    // getTransactionInfo(customerId) {
    //     return axios.get('/api/getTransactionInfo/' + customerId, { headers: authHeader() }, { timeout: 5000 });
    // }


}

export default new BalanceRequestService();