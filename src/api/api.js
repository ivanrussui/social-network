import * as axios from "axios";

// создаем instance сущность объекта, настраиваем и к нему потом обращаемся
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true, // для кросс-доменных запросов передаем что мы авторизованы
    headers: {
        'API-KEY': 'fb5f73c1-add2-43ae-b773-e360c640feb1'
    }
});

// делаем объект для users и в нем уже будут методы с запросами
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    deleteUser(profileId) {
        return instance.delete(`follow/${profileId}`)
            .then(response => response.data);
    },
    postUser(profileId) {
        return instance.post(`follow/${profileId}`)
            .then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(profileId) {
    // getProfile(profileId = 2) { // хз зачем тут id 2 Димыча
        return instance.get(`profile/${profileId}`)
            .then(response => response.data);
    },
    getStatus(profileId) {
        return instance.get(`profile/status/${profileId}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
            .then(response => response.data);
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append('image', file);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data);
    }
};

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    postAuthLogin(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },
    deleteAuthLogout() {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    }
}
