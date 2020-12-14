import {sendForm} from '../utils';
class AuthService
{
    apiUrl = process.env.REACT_APP_API_URL;
    registration = (data) =>
    {
        return sendForm(data, this.apiUrl + 'registration');
    }
    autorizate = (data) =>
    {
        return sendForm(data, this.apiUrl + 'autorization');
    }
}
export default AuthService;
