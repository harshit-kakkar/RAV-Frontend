export const setJwtToken = (token:String) => {
    return {
        type: 'SET_JWT_TOKEN',
        payload: token
    }
}