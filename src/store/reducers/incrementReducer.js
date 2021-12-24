import { INCREMENT_POSITIVE, INCREMENT_NEGATIVE } from '../actions/actionsTypes';

const incrementReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_POSITIVE:
        return state + action.payload;
    case INCREMENT_NEGATIVE:
        return state + action.payload;
    default:
      return state;
  }
};

export default incrementReducer;