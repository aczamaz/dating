const updateAuth = (state,action)=>
{
    if (state === undefined) {
        return {
            isLogin: false,
            loggin:null,
            password:null,
            rePassword: null,
            gender:null,
            age:null,
            srcImage:null
        }
    }
    switch(action.type)
    {
        case'AUTH_SET_FIELD_REGISTRATION':
            console.log(action);
            return {
                ...state
            }
        default:
            return state.auth;
    }
}
export default updateAuth;
