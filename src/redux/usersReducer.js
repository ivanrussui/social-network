// обернули в переменные action.type из actionCreator
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: []
  // ninjaTurtles: [
  //   {id: 1, name: 'Leonardo', role: 'Leader', weapon: 'Ninjato swords', color: 'Blue'},
  //   {id: 2, name: 'Raphael', role: 'Strong', weapon: 'Sai daggers', color: 'Red'},
  //   {id: 3, name: 'Donatello', role: 'Genius', weapon: 'Bo pole', color: 'Violet'},
  //   {id: 4, name: 'Michelangelo', role: 'Funny', weapon: 'Nunchaku', color: 'Orange'},
  // ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:   // подисаться
      return {
        ...state,   // поверхностное копирование
        users: state.users.map(u => {   // делаем копию users, map возвращает новый массив
          if (u.id === action.userId) {    // если id совпадает, то
            return {...u, followed: true}  // возвращаем копию
          }
          return u;
        })
      };
    case UNFOLLOW:  // отписаться
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      };
    case SET_USERS: // получить юзеров
      return {
        ...state,
        users: [...state.users, ...action.users] // к существующим юзерам добавляем новых
      };
    default:
      return state;
  }
}

// наши actionCreator               userId нужен чтобы понимать с каким юзером взаидойствовать
export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;