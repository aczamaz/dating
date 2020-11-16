import AuthService from '../services/auth-service';

const updateProfileInfo = (state,action)=>
{
    if (state === undefined) {
        return {
            isLogin: false,
            email:'',
            password: '',
            rePassword: '',
            name: '',
            gender: 'm',
            age: '',
            srcImage: ''
        }
    }
    switch(action.type)
    {
        case 'SET_FIELD_PROFILE':
            console.log(state)
            const target = action.payload.target;
            const profile = { ...state.profile}
            profile[target.name] = target.value;
            return profile;
        case 'AUTH_REGISTRATION':
            const authService = new AuthService();
            const success = authService.registration(state.profile);
            console.log(success);
            return{
                ...state.profile
            }
        default:
            return state.profile;
    }
}
export default updateProfileInfo;
