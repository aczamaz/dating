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
export {
    authRegistration,
    authRegistrationSucces,
    authRegistrationError
};
