// обернули в переменные action.type из actionCreator
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 6
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
        users: action.users // перезаписываем юзеров
      };
    case SET_CURRENT_PAGE: // получить текущую страницу
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_COUNT: // получить общее количество юзеров с сервера
      return {
        ...state,
        totalCount: action.count
      }
    default:
      return state;
  }
}

// наши actionCreator               userId нужен чтобы понимать с каким юзером взаидойствовать
export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCountActionCreator = (totalCount) => ({type: SET_TOTAL_COUNT, count: totalCount});

export default usersReducer;