import positiveIncrementReducer from "./positiveIncrementReducer.js";
import negativeIncrementReducer from "./negativeIncrementReducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    positiveIncrement: positiveIncrementReducer,
    negativeIncrement: negativeIncrementReducer,
})

export default rootReducer;