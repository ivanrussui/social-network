// обернули в переменные action.type из actionCreator
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
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
    default:
      return state;
  }
}

// наши actionCreator
export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login} });

export default authReducer;