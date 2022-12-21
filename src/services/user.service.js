import axios from 'axios';
import authHeader from './auth-header';
import configs from '../configs/local'
class UserService {

    getUsers() {
        console.log('came in get users.........')
        return axios.get(configs.API_URL+'/api/getUsers', { headers: authHeader() }, { timeout: 5000 });
    }
    updateUser(userData) {
        return axios({
            method: 'POST',
            data: userData,
            url: configs.API_URL+'/api/updateUser',
            headers: authHeader()
        })
    }
    addUser(userData) {
        return axios({
            method: 'POST',
            data: userData,
            url: '/api/addUser',
            headers: authHeader()
        })
    }
    deleteUser(userData) {
        return axios({
            method: 'POST',
            data: userData,
            url: '/api/deleteUser',
            headers: authHeader()
        })
    }
    getUser(userId) {
        return axios.get(`/api/getUser/${userId}`, { headers: authHeader() }, { timeout: 5000 });
    }
    // getUserByName(name) {
    //     return axios.get(`/api/getUserByName`,{name}, { headers: authHeader() }, { timeout: 5000 });
    // }

}

export default new UserService();