interface JwtTokenModel{
    type: string,
    payload: string
} 
const setJwtTokenReducer = (state = '', action: JwtTokenModel) => {
    switch(action.type){
        case 'SET_JWT_TOKEN':
            return action.payload
        default:
            return ''
    }
}
export default setJwtTokenReducer