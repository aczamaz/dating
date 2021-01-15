const instanse =
{
    errorLoad:false,
    users:[],
    userFront:{}
}
const getNextUser = (state, users) =>
{
    const user = users.shift();
    const newUsers = [...users, user];
    return {
        ...state,
        users: newUsers,
        userFront: user
    }
}
const dating = (state = instanse, action) =>
{
    switch (action.type)
    {
        case 'GET_PREV_USER':
            return state;
        case 'GET_NEXT_USER':
            return getNextUser(state, state.users)
        case 'GET_DATING_USERS_ERROR':
            return{
                ...state,
                errorLoad:true
            }
        case 'GET_DATING_USERS_SUCCES':
            return getNextUser(state, action.payload.data.usersData)
        default:
            return state;
    }
}

export default dating;
