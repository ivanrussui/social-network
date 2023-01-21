// обернули в переменные action.type из actionCreator
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_LOGIN = 'SET_USER_LOGIN';

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
                ...action.data, // в data будут сидеть id, email, login
                isAuth: true
            };

        case SET_USER_LOGIN:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

// наши actionCreator
// export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});
// export const setAuthUserLogin = (email, password, isAuth) => ({type: SET_USER_LOGIN, data: {email, password, isAuth}});


// ThunkCreator
export const getAuthMeThunk = () => (dispatch) => {
    authAPI.getAuthMe().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const getAuthLoginThunk = (email, password) => (dispatch) => {
    authAPI.postAuthLogin(email, password).then(data => {
        if (data.resultCode === 0) {
            // let {email, password} = data.data;
            dispatch(setAuthUserData());
            // dispatch(setAuthUserData(email, password, true));
        }
    })
}

// export const getAuthLoginThunk = () => (dispatch) => {
//     authAPI.postAuthLogin().then(data => {
//         if (data.resultCode === 0) {
//             let {email, password} = data.data;
//             dispatch(setAuthUserLogin(email, password));
//         }
//     })
// }


export default authReducer;