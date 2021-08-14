import isLoggedInReducer from "./isLoggedIn";
import isMentorSignupReducer from "./isMentorSignup";
import { combineReducers } from "redux";
import setJwtTokenReducer from "./jwtToken";
import signupSchedule from './signupSchedule'


export const rootReducer = combineReducers({
    isLoggedIn: isLoggedInReducer,
    isMentorSignup: isMentorSignupReducer,
    jwtToken: setJwtTokenReducer,
    signupSchedule: signupSchedule
})

export type RootState = ReturnType<typeof rootReducer>