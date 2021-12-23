const negativeIncrementReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_NEGATIVE":
      return state + 1;
    default:
      return state;
  }
};
  

export default negativeIncrementReducer;