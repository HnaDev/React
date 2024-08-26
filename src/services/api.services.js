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

const uploadImgAPI = (data, folder) => {

    const URL_API = '/api/v1/file/upload'
    const config = {
        headers: {
            "content-type": "multipart/form-data",
            'upload-type': folder
        }
    }

    const bodyFormData = new FormData();
    bodyFormData.append('fileImg', data);

    return axios.post(URL_API, bodyFormData, config);
}

const UpdateAvatarUser = (_id, avatar, fullName, phone) => {
    const URL_API = '/api/v1/user';
    const data = { _id, avatar, fullName, phone };

    return axios.put(URL_API, data);
};

export { createUserAPI, getAllUsers, updateUserAPI, deleteUserAPI, uploadImgAPI, UpdateAvatarUser } 