import axios from './api.customize';

const createUserAPI = (fullname, email, phone, password) => {
    const URL_API = '/api/v1/user'
    const data =
    {
        fullName: fullname,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_API, data)
}


const getAllUsers = () => {
    const URL_API = '/api/v1/user'
    return axios.get(URL_API)
}
export { createUserAPI, getAllUsers } 