import { INCREMENT_NEGATIVE } from '../actions/actionsTypes';

const negativeIncrementReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_NEGATIVE:
      return state + action.payload;
    default:
      return state;
  }
};
  

export default negativeIncrementReducer;