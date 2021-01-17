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
const getNextUser = (state, users,count = 0) =>
{
    let user = null,
        userIndex = state.userIndex,
        newUserIndex = changeIndex(userIndex, users.length, count);
        user = users[newUserIndex];
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
            return getNextUser(state, state.users, -1)
        case 'GET_NEXT_USER':
            return getNextUser(state, state.users,1)
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
