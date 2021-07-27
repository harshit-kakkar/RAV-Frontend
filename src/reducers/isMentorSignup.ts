interface isMentorSignupModel{
    type: string
} 
const isMentorSignupReducer = (state = false, action: isMentorSignupModel) => {
    switch(action.type){
        case 'IS_MENTOR_SIGNUP':
            return !state
        default:
            return state
    }
}
export default isMentorSignupReducer