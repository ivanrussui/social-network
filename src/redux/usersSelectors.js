import { createSelector } from 'reselect';

const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    // debugger
    return users.filter(user => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}