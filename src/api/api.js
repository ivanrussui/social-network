import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/';

export const getUsers = (currentPage = 1, pageSize = 5) => {
  return axios.get(baseUrl + `1.0/users?page=${currentPage}&count=${pageSize}`, {
    withCredentials: true // для кроссдоменных запросов передаем что мы авторизованы
  })
    .then(response => response.data);
};

export const deleteUser = (id) => {
  return axios.delete(baseUrl + `1.0/follow/${id}`, {
    withCredentials: true,
    headers: {
      'API-KEY': 'f46c8a87-f5e7-4a08-b342-9cddf97694b1'
    }
  })
    .then(response => response.data);
};

export const postUser = (id) => {
  return axios.post(baseUrl + `1.0/follow/${id}`, {}, {
    withCredentials: true,
    headers: {
      'API-KEY': 'f46c8a87-f5e7-4a08-b342-9cddf97694b1'
    }
  })
    .then(response => response.data);
};

export const getProfile = (profileId = 2) => {
  return axios.get(baseUrl + `1.0/profile/${profileId}`).then(response => response.data);
}

export const getAuthMe = () => {
  return axios.get(baseUrl + `1.0/auth/me`, {
    withCredentials: true
  })
    .then(response => response.data);
};