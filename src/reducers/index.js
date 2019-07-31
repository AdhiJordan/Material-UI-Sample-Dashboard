import {combineReducers} from "redux";
import userReducers from "./userReducers.js";

const rootReducer = combineReducers({
	customer: userReducers
});

export default rootReducer;

