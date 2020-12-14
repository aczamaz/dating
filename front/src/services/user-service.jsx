import { sendForm } from '../utils';

class UserService
{
    apiUrl = process.env.REACT_APP_API_URL;
    getUserByToken = (token) =>
    {
        const data = {token:token};
        return sendForm(data, this.apiUrl + 'getUserByToken');
    }
}
export default UserService;
