const instanse = {
            showRegistrationPopap: false,
            showAutorizationPopap: false,
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
const toggleValue = (value) =>
{
    return value ? false: true;
}
const profile = (state = instanse, action) => {
    console.log(action);
    switch (action.type) {
        case 'AUTH_REGISTRATION_SUCCES':
            return authSucces(state, action, { showRegistrationPopap: false})
        case 'AUTH_AUTORIZATE_SUCCES':
            return authSucces(state, action, { showAutorizationPopap: false })
        case 'AUTH_REGISTRATION_ERROR':
            return authError(state, action);
        case 'AUTH_AUTORIZATE_ERROR':
            return authError(state, action);
        case 'TOGGLE_REGISTRATION_POPAP':
            return{
                ...state,
                showRegistrationPopap: toggleValue(state.showRegistrationPopap)
            }
        case 'TOGGLE_AUTORIZATION_POPAP':
            return {
                ...state,
                showAutorizationPopap: toggleValue(state.showAutorizationPopap)
            }
        case 'LOGOUT':
            window.location.href = "/";
            return{
                ...state,
                token:null
            }
        default:
            return state;
    }
}

export default profile;

