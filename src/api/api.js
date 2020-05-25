import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f57c9cb3-d026-4f04-b5f2-533d0c26d865'
    }

})

export const authAPI = {
    authMe() {
        return instance.get(`auth/me` ).then(response => response.data);
    }
}

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
}

export const profileAPI = {
    showUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    }
}

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}
// export const getUsers = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
// }

// export const authMe = () => {
//     return instance.get(`auth/me` ).then(response => response.data);
// }

// export const showUserProfile = (userId) => {
//     return instance.get(`profile/${userId}`).then(response => response.data);
// }

// export const follow = (id) => {
//     return instance.post(`follow/${id}`).then(response => response.data);
// }

// export const unfollow = (id) => {
//     return instance.delete(`follow/${id}`).then(response => response.data);
// }