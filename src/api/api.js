import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/';

export const getUsers = (currentPage = 1, pageSize = 5) => {
    return axios.get(baseUrl + `1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
        .then(response => response.data);

};

export const unfollowUser = (id) => {
    return axios.delete(baseUrl + `1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            'API-KEY': 'f46c8a87-f5e7-4a08-b342-9cddf97694b1'
        }
    })
        .then(response => response.data);
};

export const followUser = (id) => {
    return axios.post(baseUrl + `1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            'API-KEY': 'f46c8a87-f5e7-4a08-b342-9cddf97694b1'
        }
    })
        .then(response => response.data);
}