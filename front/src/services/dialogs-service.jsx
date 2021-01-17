import sendForm from '../utils/send-form';
class DialogsService
{
    apiUrl = process.env.REACT_APP_API_URL;
    getDialogs(token)
    {
        return sendForm({ token: token }, this.apiUrl + 'getDialogs');
    }
    getDialog(data)
    {
        return sendForm(data, this.apiUrl + 'getDialog');
    }
    sendMessage(data)
    {
        return sendForm(data, this.apiUrl + 'sendMessage');
    }
}
export default DialogsService;
