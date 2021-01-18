import img from './avatar.png';
import sendForm from '../utils/send-form';
export default class SearchService
{
    apiUrl = process.env.REACT_APP_API_URL;
    getResult()
    {
        const result = [];
        for (let i = 0; i < 24; i++)
        {
            result.push(
                {
                    id:i,
                    avatar: img,
                    name: 'Ацамаз'
                }
            )
        }
        return result;
    }
    searchUsers(data)
    {
        return sendForm(data, this.apiUrl + 'searchUsers');
    }
}
