import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/';

export const getUsers = (currentPage = 1, pageSize = 5) => {
    return axios.get(baseUrl + `1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
        .then(response => response.data);

};
