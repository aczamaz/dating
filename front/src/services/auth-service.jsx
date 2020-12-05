import {sendForm} from '../utils';
class AuthService
{
    url_auth = 'http://dating/api/';
    registration = (data) =>
    {
        return sendForm(data, this.url_auth + 'registration');
    }
    autorizate = (data) =>
    {
        return sendForm(data, this.url_auth + 'autorization');
    }
}
export default AuthService;
