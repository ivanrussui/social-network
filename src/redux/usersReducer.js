const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  users: [
    {id: 1, followed: false, name: 'Ivan', status: 'Hello World', location: {country: 'Russia', city: 'Moscow'}},
    {id: 2, followed: false, name: 'Dmitry', status: 'Yo Yo Yo', location: {country: 'Belarus', city: 'Minsk'}},
    {id: 3, followed: true, name: 'Fedor', status: 'I am programmer', location: {country: 'Moldova', city: 'Kishinev'}},
    {id: 4, followed: true, name: 'Vasily', status: 'Hi Developers', location: {country: 'USA', city: 'New York'}}
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
    default:
      return state;
  }
}

export const followActionCreator = () => ({type: FOLLOW});
export const unfollowActionCreator = () => ({type: UNFOLLOW});

export default usersReducer;