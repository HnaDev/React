import axios from './api.customize';

const getAllUsers = () => {
    const URL_API = '/api/v1/user'
    return axios.get(URL_API)
}

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

const updateUserAPI = (_id, fullname, phone) => {
    const URL_API = '/api/v1/user'
    const data =
    {
        _id: _id,
        fullName: fullname,
        phone: phone
    }
    return axios.put(URL_API, data)
}

const deleteUserAPI = (id) => {
    const URL_API = `/api/v1/user/${id}`
    return axios.delete(URL_API)
}

export { createUserAPI, getAllUsers, updateUserAPI, deleteUserAPI } 