// обернули в переменные action.type из actionCreator
const SET_USER_DATA = 'SET_USER_DATA';
const SET_HEADER_USER_PROFILE = 'SET-HEADER-USER-PROFILE';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  avatar: null,
  profile: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:   // получить у юзера дэйта
      return {
        ...state,   // поверхностное копирование
        ...action.data, // в data будут сидеть id, email, login
        isAuth: true
      };
    case SET_HEADER_USER_PROFILE: { // получаем профиль юзера
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
export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login} });
export const setUserHeader = (profile) => ({type: SET_HEADER_USER_PROFILE, profile});

export default authReducer;