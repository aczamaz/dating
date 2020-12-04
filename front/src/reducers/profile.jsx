const instanse = {
            show: true,
            token:null,
            errorsBack:{}
}
const profile = (state = instanse, action) => {
    console.log(state);
    switch (action.type) {
        case 'AUTH_REGISTRATION_SUCCES':
            console.log(action.payload.data.remember_token);
            const token = action.payload.data.remember_token;
            return {
                ...state,
                token: token,
                show:false
            }
        case 'AUTH_REGISTRATION_ERROR':
            const {errors} = action.payload.response.data;
            let errorArray = {};
            for(let key in errors)
            {
                errorArray[key] = errors[key][0];
            }
            return {
                ...state,
                errorsBack:errorArray
            }
        default:
            return state;
    }
}

export default profile;

