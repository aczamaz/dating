import Cookies  from 'js-cookie';

const instanse = {
            showRegistrationPopap: false,
            showAutorizationPopap: false,
            token:null,
            errorsBack:{},
            userData:{}
}

const authSucces = (state,action,castom) =>
{
    const { userData } = action.payload.data;
    const token = userData.remember_token;
    Cookies.set('userToken', token)
    return{
        ...state,
        token: token,
        userData: userData,
        ...castom,
        errorsBack: {}
    }
}

const authError = (state, action) =>
{
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
            Cookies.remove('userToken');
            return{
                ...state,
                token:null
            }
        case 'GET_PROFILE_INFO_BY_TOKEN_SUCCES':
            const { userData } = action.payload.data;
            const token = userData.token;
            delete userData.token;
            return{
                ...state,
                token: token,
                userData: userData
            }
        case 'GET_PROFILE_INFO_BY_TOKEN_ERROR':
            return{
                ...state
            }
        default:
            return state;
    }
}

export default profile;

