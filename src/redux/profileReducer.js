import {profileAPI} from "../api/api";

// обернули в переменные action.type из actionCreator
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

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

// для моего изменения статуса
// export const changeStatusText = (statusText) => ({type: CHANGE_STATUS, statusText});


// ThunkCreator
export const getProfileThunk = (profileId) => dispatch => {
    profileAPI.getProfile(profileId).then(data => {
        dispatch(setUserProfile(data));
    });
}

export const getStatusThunk = (profileId) => dispatch => {
    profileAPI.getStatus(profileId).then(data => {
        // debugger
        dispatch(setStatus(data));
    });
}

export const updateStatusThunk = (status) => dispatch => {
    profileAPI.updateStatus(status).then(data => {
        // debugger
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;