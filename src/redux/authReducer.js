import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
// const SET_USER_LOGIN = 'SET_USER_LOGIN';

let initialState = {
    id: null,
    email: null,
    login: null,
    password: null,
    isAuth: false,
    avatar: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:   // получить у юзера дэйта
            return {
                ...state,   // поверхностное копирование
                ...action.payload, // в payload будут сидеть id, email, login
            };
        default:
            return state;
    }
}

// наши actionCreator
export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});


// ThunkCreator
export const getAuthMeThunk = () => (dispatch) => {
    authAPI.getAuthMe().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const getAuthLoginThunk = (email, password, rememberMe) => (dispatch) => {
    authAPI.postAuthLogin(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthMeThunk());
        }
    })
}

export const getAuthLogoutThunk = () => (dispatch) => {
    authAPI.deleteAuthLogout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}


export default authReducer;