import isLoggedInReducer from "./isLoggedIn";
import isMentorSignupReducer from "./isMentorSignup";
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    isLoggedIn: isLoggedInReducer,
    isMentorSignup: isMentorSignupReducer,
})

export type RootState = ReturnType<typeof rootReducer>