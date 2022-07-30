// обернули в переменные action.type из actionCreator
const SET_USER_DATA = 'SET_USER_DATA';
// const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false // не забудь реализовать
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:   // получить у юзера дэйта
      return {
        ...state,   // поверхностное копирование
        ...action.data // в data будут сидеть id, email, login
      };
    // case TOGGLE_IS_FETCHING: // тоглим isFetching
    //   return {
    //     ...state,
    //     isFetching: action.isFetching
    //   }
    default:
      return state;
  }
}

// наши actionCreator
export const setUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login} });
// export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default authReducer;