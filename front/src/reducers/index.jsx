import updateProfileInfo from './update-profile-info';

const reducer = (state, action) => {

    return {
        profile: updateProfileInfo(state, action)
    }
}

export default reducer;

