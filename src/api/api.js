import * as axios from "axios";

// создаем instance сущность объекта, настраиваем и к нему потом обращаемся
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true, // для кроссдоменных запросов передаем что мы авторизованы
    headers: {
        'API-KEY': 'f46c8a87-f5e7-4a08-b342-9cddf97694b1'
    }
})

// делаем объект для users и в нем уже будут методы с запросами
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    deleteUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    postUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(profileId = 2) {
        return instance.get(`profile/${profileId}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}
