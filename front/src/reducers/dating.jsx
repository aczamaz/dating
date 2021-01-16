const instanse =
{
    errorLoad:false,
    users:[],
    userFront:{},
    userIndex:0
}
const changeIndex = (index,lenght,step) =>
{
    console.log(index, step);
    let newIndex = index + step,
        upBorder = lenght - 1,
        downBorder = 0;
    console.log(newIndex, step);
    if (newIndex > upBorder)
        return downBorder;
    else if (newIndex < downBorder)
        return upBorder;
    return newIndex;
}
const getNextUser = (state, users,next = true) =>
{
    let user = null, newUserIndex = state.userIndex;
    if(next)
    {
        newUserIndex = changeIndex(newUserIndex, users.length,1);
        user = users[newUserIndex];
    }
    else
    {
        newUserIndex = changeIndex(newUserIndex, users.length,-1);
        user = users[newUserIndex];
    }
    console.log(users);
    return {
        ...state,
        users: [...users],
        userFront: user,
        userIndex: newUserIndex
    }
}
const dating = (state = instanse, action) =>
{
    switch (action.type)
    {
        case 'GET_PREV_USER':
            return getNextUser(state, state.users, false)
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
