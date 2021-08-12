import isLoggedInReducer from "./isLoggedIn";
import isMentorSignupReducer from "./isMentorSignup";
import { combineReducers } from "redux";
import setJwtTokenReducer from "./jwtToken";


export const rootReducer = combineReducers({
    isLoggedIn: isLoggedInReducer,
    isMentorSignup: isMentorSignupReducer,
    setJwtToken: setJwtTokenReducer,
})

export type RootState = ReturnType<typeof rootReducer>