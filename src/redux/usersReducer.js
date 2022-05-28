// обернули в переменные action.type из actionCreator
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    {id: 1, imgSrc: 'https://cdn-icons-png.flaticon.com/512/149/149452.png', followed: false, name: 'Ivan', status: 'Hello World', location: {country: 'Russia', city: 'Moscow'}},
    {id: 2, imgSrc: 'https://cdn-icons-png.flaticon.com/512/149/149452.png', followed: false, name: 'Dmitry', status: 'Yo Yo Yo', location: {country: 'Belarus', city: 'Minsk'}},
    {id: 3, imgSrc: 'https://cdn-icons-png.flaticon.com/512/149/149452.png', followed: true, name: 'Fedor', status: 'I am programmer', location: {country: 'Moldova', city: 'Kishinev'}},
    {id: 4, imgSrc: 'https://cdn-icons-png.flaticon.com/512/149/149452.png', followed: true, name: 'Vasily', status: 'Hi Developers', location: {country: 'USA', city: 'New York'}}
  ]
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