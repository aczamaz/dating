import {sendForm} from '../utils';
class AuthService
{
    url_auth = 'http://dating/api/';
    registration = async (data) =>
    {
        return sendForm(data,this.url_auth+'registration');
    }
}
export default AuthService;
