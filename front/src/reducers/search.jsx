const instance = {
    users:[],
    error:false,
    loading:true
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
        default:
            return{
                ...state
            }
    }
}
export default search;
