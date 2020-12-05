const authRegistrationSucces = (data) =>
{
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
const authRegistration = (data, dispatch, authService) =>
{
    authService.registration(data)
        .then((data) => dispatch(authRegistrationSucces(data)))
        .catch((error) => dispatch(authRegistrationError(error)));
}
const authAutorizateSucces = (data) => {
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
const authAutorizate = (data,dispatch,authService) =>
{
    authService.autorizate(data)
        .then((data) => dispatch(authAutorizateSucces(data)))
        .catch((error) => dispatch(authAutorizateError(error)));
}
export {
    authRegistration,
    authAutorizate
};
