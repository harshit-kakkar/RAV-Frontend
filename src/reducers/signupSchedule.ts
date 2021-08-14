interface signupScheduleModel{
    type: string,
    payload: string
} 
const setSignupScheduleReducer = (state = {}, action: signupScheduleModel) => {
    switch(action.type){
        case 'SET_SIGNUP_SCHEDULE':
            return action.payload
        default:
            return {}
    }
}
export default setSignupScheduleReducer