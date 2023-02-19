import profileReducer, { addPostActionCreator, deletePostActionCreator } from './profileReducer';

let state = {
    posts: [
        {id: 1, message: 'Hello world!', count: 10},
        {id: 2, message: 'React it\'s cool', count: 15}
    ]
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('ivanrussui');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('ivanrussui');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[2].message).toBe('ivanrussui');
});

test('count of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('ivanrussui');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[2].count).toBe(0);
});

test('after deleting length of posts should be decremented', () => {
    // 1. test data
    let action = deletePostActionCreator(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

test('after deleting length of posts shouldn\'t be decremented if id is incorrect', () => {
    // 1. test data
    let action = deletePostActionCreator(100);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});