
import axios from "axios";
class AuthService {
    login(username, password) {
        console.log('LOGIN service...',username,password)
         return axios
            .post("http://localhost:8080/api/auth/signin", {
                username,
                password
            })
            .then(response => {
                if (response.data.role) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    return response.data;
                }
                else {
                    console.log('Invalid credentials returned',response.data)
                    return response.data;
                }
               
            }); 
    }

    logout() {
        localStorage.removeItem("user");
    }

    /* register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    } */

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();