const positiveIncrementReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_POSITIVE":
      return state + 1;
    default:
      return state;
  }
};

export default positiveIncrementReducer;