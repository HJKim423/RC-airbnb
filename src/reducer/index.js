import { combineReducers } from "redux";
import userReducer from "./userReducer";
import LoginReducer from "./LoginReducer";

const rootReducer = combineReducers({
    userReducer,
    LoginReducer,
});

export default rootReducer;
