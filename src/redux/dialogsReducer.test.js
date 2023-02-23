import dialogsReducer, { cancelMessageCreator, sendMessageCreator } from './dialogsReducer';

let state = {
    dialogs: [
        {id: 1, name: 'Ivan'}, {id: 2, name: 'Anna'}, {id: 3, name: 'Melissa'}, {id: 4, name: 'Kristina'},
        {id: 5, name: 'Vladimir'}, {id: 6, name: 'Alexandra'}
    ],
    messages: [
        {id: 1, message: 'Hi!'}, {id: 2, message: 'My name is Ivan'}, {id: 3, message: 'And you'},
        {id: 4, message: 'I am Fine'}, {id: 5, message: 'It s cool'}
    ]
};

test('length of messages should be incremented', () => {
    let action = sendMessageCreator('programmer');
    let newState = dialogsReducer(state, action);
    expect(newState.messages.length).toBe(6);
});

test('text of new message should be correct', () => {
    let action = sendMessageCreator('programmer');
    let newState = dialogsReducer(state, action);
    expect(newState.messages[5].message).toBe('programmer');
});

test('id of new message should be correct', () => {
    let action = sendMessageCreator('programmer');
    let newState = dialogsReducer(state, action);
    expect(newState.messages[5].id).toBe(6);
});

test('after deleting length of messages should be decremented', () => {
    let action = cancelMessageCreator(3);
    let newState = dialogsReducer(state, action);
    expect(newState.messages.length).toBe(4);
});

test('after deleting length of messages shouldn\'t be decremented if id is incorrect', () => {
    let action = cancelMessageCreator(50);
    let newState = dialogsReducer(state, action);
    expect(newState.messages.length).toBe(5);
});