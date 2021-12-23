import positiveIncrementReducer from "./positiveIncrementReducer.js";
import negativeIncrementReducer from "./negativeIncrementReducer.js";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    positiveIncrement: positiveIncrementReducer,
    negativeIncrement: negativeIncrementReducer,
})

export default allReducers;