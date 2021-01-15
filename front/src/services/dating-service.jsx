import {sendForm} from '../utils';
class DatingService
{
    apiUrl = process.env.REACT_APP_API_URL;
    getDatingUsers = (data) =>
    {
        return sendForm(data, this.apiUrl + 'getDatingUsers');
    }
}
export default DatingService;
