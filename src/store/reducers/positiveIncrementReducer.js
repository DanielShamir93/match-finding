import { INCREMENT_POSITIVE } from '../actions/actionsTypes';

const positiveIncrementReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_POSITIVE:
      return state + action.payload;
    default:
      return state;
  }
};

export default positiveIncrementReducer;