interface isLoggedInModel{
    type: string
} 
const isLoggedInReducer = (state = false, action: isLoggedInModel) => {
    switch(action.type){
        case 'IS_LOGGED_IN':
            return !state
        default:
            return state
    }
}
export default isLoggedInReducer