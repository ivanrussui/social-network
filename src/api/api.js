import * as axios from "axios";

// создаем instance сущность объекта, настраиваем и к нему потом обращаемся
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true, // для кросс-доменных запросов передаем что мы авторизованы
    headers: {
        'API-KEY': 'c34375ee-6aa1-48d6-a921-47103a0c7e23'
    }
})

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
}

export const profileAPI = {
    getProfile(profileId = 2) {
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
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}
