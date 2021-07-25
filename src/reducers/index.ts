import isLoggedInReducer from "./isLoggedIn";
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    isLoggedIn: isLoggedInReducer,
})

export type RootState = ReturnType<typeof rootReducer>