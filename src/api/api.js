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
    deleteUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    postUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    // updateStatus() {
    //     return instance.update(`profile/status`, { status: status })
    // }
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}
