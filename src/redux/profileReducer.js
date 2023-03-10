import { profileAPI } from "../api/api";

// обернули в переменные action.type из actionCreator
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

// для моего изменения статуса
// const CHANGE_STATUS = 'CHANGE-STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', count: 10},
        {id: 2, message: 'React it\'s cool', count: 15}
    ],
    // newPostText: 'React SamuraiJS',
    profile: null,
    status: ''

    // для моего изменения статуса
    // statusText: `I'm JS Ninja`
};

const profileReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case ADD_POST: { // добавление постов Profile; ADD_POST это переменная action type из action creator
            let newPost = {
                id: 3,
                message: action.newPostText,
                count: 0
            };
            return {
                ...state,         // поверхностное копирование
                // newPostText: '',
                posts: [...state.posts, newPost]    // глубокое копирование, вместо push сразу пишем
            };
        }
        case SET_USER_PROFILE: { // получаем профиль юзера
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {  // получение статуса
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            };
        }
        // для моего изменения статуса
        // case CHANGE_STATUS: {  // изменение статуса
        //     return {
        //         ...state,
        //         statusText: action.statusText
        //     };
        // }
        default:
            return state;
    }
}

// наши actionCreator
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePostActionCreator = (id) => ({type: DELETE_POST, id});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

// для моего изменения статуса
// export const changeStatusText = (statusText) => ({type: CHANGE_STATUS, statusText});


// ThunkCreator
export const getProfileThunk = (profileId) => async dispatch => {
    const data = await profileAPI.getProfile(profileId);
    dispatch(setUserProfile(data));
};

export const getStatusThunk = (profileId) => async dispatch => {
    const data = await profileAPI.getStatus(profileId);
    dispatch(setStatus(data));
};

export const updateStatusThunk = (status) => async dispatch => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhotoThunk = (file) => async dispatch => {
    const data = await profileAPI.savePhoto(file);
    // response нужен тк тут в api нет .then
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
};

export const saveProfileThunk = (profile) => async dispatch => {
    const response = await profileAPI.saveProfile(profile);
    debugger
    // response нужен тк тут в api нет .then
    if (response.data.resultCode === 0) {
        // dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export default profileReducer;