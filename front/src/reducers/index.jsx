import updateProfile from './update-profile';
import updateAuth from './update-auth';

const reducer = (state, action) => {

    return {
        auth: updateAuth(state, action),
        profile: updateProfile(state, action)
    }
}

export default reducer;

