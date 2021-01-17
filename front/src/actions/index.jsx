const setToken = (token)=>
{
    return{
        type:'SET_TOKEN',
        payload:token
    }
}
const authRegistrationSucces = (data, history) =>
{
    history.push('/profile/');
    return {
        type:'AUTH_REGISTRATION_SUCCES',
        payload:data
    }
}
const authRegistrationError = (error)=>
{
    return{
        type:'AUTH_REGISTRATION_ERROR',
        payload:error
    }
}
const authRegistration = (data, dispatch, ownProps) =>
{
    const { authService, history } = ownProps;
    authService.registration(data)
        .then((data) => dispatch(authRegistrationSucces(data, history)))
        .catch((error) => dispatch(authRegistrationError(error)));
}
const authAutorizateSucces = (data, history) =>
{
    history.push('/profile/');
    return {
        type: 'AUTH_AUTORIZATE_SUCCES',
        payload: data
    }
}
const authAutorizateError = (error) => {
    return {
        type: 'AUTH_AUTORIZATE_ERROR',
        payload: error
    }
}
const authAutorizate = (data, dispatch, ownProps) =>
{
    const { authService, history } = ownProps;
    authService.autorizate(data)
        .then((data) => dispatch(authAutorizateSucces(data, history)))
        .catch((error) => dispatch(authAutorizateError(error)));
}
const toggleRegistrationPopap = () =>
{
    return {
        type:'TOGGLE_REGISTRATION_POPAP'
    }
}
const toggleAutorizationPopap = () =>
{
    return {
        type: 'TOGGLE_AUTORIZATION_POPAP'
    }
}
const logout = (ownProps) =>
{
    const { history } = ownProps;
    history.push("/");
    return {
        type:'LOGOUT'
    }
}

const getProfileInfoByTokenSucees = (data, history) =>
{
    if (window.location.pathname === "/")
        history.push("/profile/")
    return{
        type: 'GET_PROFILE_INFO_BY_TOKEN_SUCCES',
        payload: data
    }
}

const getProfileInfoByTokenError = (error) =>
{
    return{
        type: 'GET_PROFILE_INFO_BY_TOKEN_ERROR',
        payload: error
    }
}

const getProfileInfoByToken = (token,dispatch,ownProps)=>
{
    const { history, userService } = ownProps;
    userService.getUserByToken(token)
        .then((data) => dispatch(getProfileInfoByTokenSucees(data, history)))
        .catch((error) => dispatch(getProfileInfoByTokenError(error)));
}
const getDialogsSucces = (data) =>
{
    return{
        type:'GET_DIALOGS_SUCCES',
        payload:data
    }
}
const getDialogsError = (error) =>
{
    return {
        type: 'GET_DIALOGS_ERROR',
        payload: error
    }
}
const getDialogs = (token,dispatch,ownProps) =>
{
    const { dialogsService } = ownProps;
    dialogsService.getDialogs(token)
        .then((data)=>dispatch(getDialogsSucces(data)))
        .catch((error) => dispatch(getDialogsError(error)))
}
const getDialogSucces = (data) =>
{
    return {
        type: 'GET_DIALOG_SUCCES',
        payload: data
    }
}
const getDialogError = (error) =>
{
    return {
        type: 'GET_DIALOG_ERROR',
        payload: error
    }
}
const getDialog = (data, dispatch, ownProps) =>
{
    const { dialogsService } = ownProps;
    dialogsService.getDialog(data)
        .then((data) => dispatch(getDialogSucces(data)))
        .catch((error) => dispatch(getDialogError(error)))
}

const getDatingUsersSucces = (data)=>
{
    return{
        type:'GET_DATING_USERS_SUCCES',
        payload: data
    }
}

const getDatingUsersError = (error) =>
{
    return{
        type: 'GET_DATING_USERS_ERROR',
        payload: error
    }
}

const getDatingUsers = (data, dispatch, ownProps) =>
{
    const { datingService } = ownProps;
    datingService.getDatingUsers(data)
        .then((data)=>dispatch(getDatingUsersSucces(data)))
        .catch((error) => dispatch(getDatingUsersError(error)));
}

const getNextUser = ()=>
{
    return{
        type:'GET_NEXT_USER'
    }
}
const getPrevUser = () =>
{
    return{
        type: 'GET_PREV_USER'
    }
}

const showPopapNewMessage = (userId)=>
{
    return{
        type:'SHOW_POPAP_NEW_MESSAGE',
        payload: userId
    }
}

const hidePopapNewMessage = () =>
{
    return{
        type:'HIDE_POPAP_NEW_MESSAGE'
    }
}
const sendNewMessageError = (error) =>
{
    return{
        type:'SEND_NEW_MESSAGE_ERROR',
        payload:error
    }
}
const sendNewMessageSuccess = (data) =>
{
    return{
        type:'SEND_NEW_MESSAGE_SUCCESS',
        payload:data
    }
}
const sendNewMessage = (data, dispatch, ownProps) =>
{
    const { dialogsService, otherUserId, token } = ownProps;
    dialogsService.sendMessage({ ...data, otherUserId: otherUserId, token: token })
        .then((data) => dispatch(sendNewMessageSuccess(data)))
        .catch((error) => dispatch(sendNewMessageError(error)));
}
export {
    setToken,
    authRegistration,
    authAutorizate,
    toggleRegistrationPopap,
    toggleAutorizationPopap,
    logout,
    getProfileInfoByToken,
    getDialogs,
    getDialog,
    getDatingUsers,
    getNextUser,
    getPrevUser,
    showPopapNewMessage,
    hidePopapNewMessage,
    sendNewMessage
};
