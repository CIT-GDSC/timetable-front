import axios from "axios";


const register = async (userData) => {
    const response = await axios.post("http://localhost:5000/auth/register", userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
} 

//FIXME: change the 'user' in local storage to match 'cookie variable'
const login = async (userData) => {
    const response = await axios.post("http://localhost:5000/auth/login", userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

const logOut = async () => {
    localStorage.removeItem('user')
}


const authService = {
    login,
    logOut,
    register
}

export default authService;
