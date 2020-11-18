const authRegistration = (data) =>
{
    return{
        type:'AUTH_REGISTRATION',
        payload:data
    }
}
export {
    authRegistration
};
