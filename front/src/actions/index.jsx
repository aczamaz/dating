const authRegistration = () =>
{
    return{
        type:'AUTH_REGISTRATION'
    }
}
const setFieldProfile = (field) =>
{
    return{
        type:'SET_FIELD_PROFILE',
        payload:field
    }
}
export {
    authRegistration,
    setFieldProfile
};
