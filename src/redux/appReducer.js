import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';
import { getAuthUserDataThunk } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

// actionCreator
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// ThunkCreator
export const initializedAppThunk = () => (dispatch) => {
    let promise = dispatch(getAuthUserDataThunk());
    // debugger;
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
};


export default appReducer;