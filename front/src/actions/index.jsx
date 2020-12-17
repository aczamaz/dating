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
const authAutorizateSucces = (data, history) => {
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
const getDialogsError = (error) => {
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
export {
    authRegistration,
    authAutorizate,
    toggleRegistrationPopap,
    toggleAutorizationPopap,
    logout,
    getProfileInfoByToken,
    getDialogs
};
