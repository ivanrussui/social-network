// обернули в переменные action.type из actionCreator
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [{id: 1, message: 'Hello world!', count: 10}, {id: 2, message: 'React it\'s cool', count: 15}],
    newPostText: 'React SamuraiJS',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case ADD_POST: { // добавление постов Profile; ADD_POST это переменная action type из action creator
            let newPost = {
                id: 3,
                message: state.newPostText,
                count: 0
            };
            return {
                ...state,         // поверхностное копирование
                newPostText: '',
                posts: [...state.posts, newPost]    // глубокое копирование, вместо push сразу пишем
            };
        }
        case UPDATE_NEW_POST_TEXT: { // обновление ввода текста в посты Profile
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: { // получаем профиль юзера
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

// наши actionCreator
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


// ThunkCreator
export const getProfileThunk = (profileId) => dispatch => {
    profileAPI.getProfile(profileId).then(data => {
        dispatch(setUserProfile(data));
    });
}

export default profileReducer;