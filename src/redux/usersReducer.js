// обернули в переменные action.type из actionCreator
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  // currentPage: 4120,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
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
      };
    case SET_TOTAL_COUNT: // получить общее количество юзеров с сервера
      return {
        ...state,
        totalCount: action.count
      };
    case TOGGLE_IS_FETCHING: // тоглим isFetching
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOGGLE_FOLLOWING_PROGRESS: // disable активного юзера во время запроса
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId] // true добавляем нужный id в массив
          : state.followingInProgress.filter(id => id !== action.userId) // false фильтруем и убираем нужный id
      };
    default:
      return state;
  }
}

// наши actionCreator  userId нужен чтобы понимать с каким юзером взаидойствовать
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, count: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});


// Thunk


export default usersReducer;