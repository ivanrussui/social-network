import { usersAPI } from "../api/api";
import { updateObjectInArray } from '../utils/objectHelpers';

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
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 0
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:   // подписаться
            return {
                ...state,   // поверхностное копирование
                users: updateObjectInArray(state.users, action.userId, ['id'], {followed: true})
            };
        case UNFOLLOW:  // отписаться
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, ['id'], {followed: false})
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

// Наши actionCreator. userId нужен, чтобы понимать с каким юзером взаимодействовать
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, count: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});


// ThunkCreator
export const getUsersThunk = (currentPage, pageSize) => {
    return async dispatch => {
        dispatch(toggleIsFetching(true)); // spinner = true
        dispatch(setCurrentPage(currentPage)); // меняется активная кнопка при переключении пагинации

        // получаем юзеров с сервера
        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false)); // spinner = false
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    }
};

// общий мето для подписки/отписки
const followUnfollowFlow = async (userId, dispatch, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};

// ThunkCreator подписываемся на юзера
export const followThunk = (userId) => {
    return async dispatch => {
        await followUnfollowFlow(userId, dispatch, usersAPI.postUser.bind(usersAPI), followSuccess);
    }
};

// ThunkCreator отписываемся от юзера
export const unfollowThunk = (userId) => {
    return async dispatch => {
        await followUnfollowFlow(userId, dispatch, usersAPI.deleteUser.bind(usersAPI), unfollowSuccess);
    }
};

export default usersReducer;