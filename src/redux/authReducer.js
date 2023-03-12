import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS';
// const SET_USER_LOGIN = 'SET_USER_LOGIN';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, // если null, то captcha не обязательна
    // password: null,
    // avatar: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

// наши actionCreator
export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});


// ThunkCreator
export const getAuthUserDataThunk = () => async (dispatch) => {
    const data = await authAPI.getAuthMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const getAuthLoginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await authAPI.postAuthLogin(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunk());
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrlThunk());
        }
        let messages = data.messages.length > 0 ? data.messages[0] : 'Some Error';
        dispatch(stopSubmit('login', {_error: messages}));
    }
};

export const getAuthLogoutThunk = () => async (dispatch) => {
    const data = await authAPI.deleteAuthLogout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export const getCaptchaUrlThunk = () => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};


export default authReducer;