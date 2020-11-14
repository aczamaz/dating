const authRegistration = (data) =>
{
    return{
        type:'AUTH_REGISTRATION'
    }
}
const authSetFieldRegistration = (field) =>
{
    return{
        type:'AUTH_SET_FIELD_REGISTRATION',
        payload:field
    }
}
export {
    authRegistration,
    authSetFieldRegistration
};
