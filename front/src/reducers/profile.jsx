const instanse = {
            showRegistrationPopap: false,
            showAutorizationPopap: true,
            token:null,
            errorsBack:{}
}
const authSucces = (state,action,castom) =>
{
    const token = action.payload.data.remember_token;
    return{
        ...state,
        token: token,
        ...castom,
        errorsBack: {}
    }
}
const authError = (state, action) =>
{
    console.log(action);
    const { errors } = action.payload.response.data;
    let errorArray = {};
    for (let key in errors) {
        errorArray[key] = errors[key][0];
    }
    return {
        ...state,
        errorsBack: errorArray
    }
}
const profile = (state = instanse, action) => {
    switch (action.type) {
        case 'AUTH_REGISTRATION_SUCCES':
            return authSucces(state, action, { showRegistrationPopap: false})
        case 'AUTH_AUTORIZATE_SUCCES':
            return authSucces(state, action, { showAutorizationPopap: false })
        case 'AUTH_REGISTRATION_ERROR':
            return authError(state, action);
        case 'AUTH_AUTORIZATE_ERROR':
            return authError(state, action);
        default:
            return state;
    }
}

export default profile;

