let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hello world!', count: 10},
      {id: 2, message: 'Hello friend!', count: 15}
    ]
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Ivan'},
      {id: 2, name: 'Anna'},
      {id: 3, name: 'Melissa'},
      {id: 4, name: 'Kristina'},
      {id: 5, name: 'Vladimir'},
      {id: 6, name: 'Alexandra'}
    ],
    messages: [
      {id: 1, message: 'Hi!'},
      {id: 2, message: 'My name is Ivan'},
      {id: 3, message: 'And you'},
      {id: 4, message: 'I am Fine'},
      {id: 5, message: 'It s cool'}
    ]
  },
  sidebar: {
    friends: [
      {id: 1, name: 'Kristina'},
      {id: 2, name: 'Vladimir'},
      {id: 3, name: 'Alexa'}
    ]
  }
  // friends: [
  //   { id: 1, name: 'Kristina'},
  //   { id: 2, name: 'Vladimir' },
  //   { id: 3, name: 'Alexa' }
  // ]
};

export default state;