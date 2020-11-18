import AuthService from '../services/auth-service';

const instanse = {
            isLogin: false,
            show:true
}
const profile = (state = instanse, action) => {
    switch (action.type) {
        case 'AUTH_REGISTRATION':
            const authService = new AuthService();
            const result = authService.registration(action.payload);
            if(result.success === true){
                return {
                    ...state,
                    show:false
                }
            }
            alert("что то пошло не так!");
            return{
                ...state,
                show: true
            }
        default:
            return state;
    }
}

export default profile;

