const instance = {
    users:[],
    error:false,
    loading:true,
    user:{}
};

const search = (state = instance,action) =>
{
    switch(action.type)
    {
        case 'SEARCH_USERS_SUCCESS':
            return{
                ...state,
                users:action.payload.data.users
            }
        case 'SEARCH_USERS_ERROR':
            return{
                ...state,
                error:true
            }
        case 'GET_USER_BY_ID_SUCCESS':
            return{
                ...state,
                user: action.payload.data.userData
            }
        case 'GET_USER_BY_ID_ERROR':
            return {
                ...state,
                error: true
            }
        default:
            return{
                ...state
            }
    }
}
export default search;
