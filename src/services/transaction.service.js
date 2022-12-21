//import axios from '../utils/axios.utils';

import authHeader from './auth-header';
import axios from "axios";
import configs from '../configs/local'
class TransactionService {

    getTransactions(filterObj) {
        console.log('came in get Transactions.........')
        return axios.get(configs.API_URL+'/api/getTransactions', { headers: authHeader() }, { timeout: 5000 });
    }
 
    addTransaction(TransactionData) {
        console.log('came to add Transaction.........', TransactionData)
        return axios({
            method: 'POST',
            url: configs.API_URL+'/api/addTransaction',
            data: TransactionData,
            headers: authHeader()
        });
    }
    editTransaction(TransactionData) {
        console.log('came to edit Transaction.........', TransactionData)
        return axios({
            method: 'POST',
            data: TransactionData,
            url:configs.API_URL+'/api/editTransaction',
            headers: authHeader()
        })
    }
    deleteTransaction(data) {
        return axios({
            method: 'POST',
            data,
            url: '/api/deleteTransaction',
            headers: authHeader()
        })
    }
    getAllTransactions() {
        console.log('get all transactions................')
        return axios.get(configs.API_URL+'/api/getAllTransactions');
    }
    getTransactionInfo(customerId) {
        return axios.get('/api/getTransactionInfo/' + customerId, { headers: authHeader() }, { timeout: 5000 });
    }


}

export default new TransactionService();