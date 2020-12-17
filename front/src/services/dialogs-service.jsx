import img from './avatar.png';
import sendForm from '../utils/send-form';
class DialogsService
{
    apiUrl = process.env.REACT_APP_API_URL;
    getDialogs(token)
    {
        const data = { token: token };
        return sendForm(data, this.apiUrl + 'getDialogs');
        // return [
        //     {
        //         id:1,
        //         avatarSrc: img,
        //         name: "Вы",
        //         message: "Привет что делаешь?"
        //     },
        //     {
        //         id: 2,
        //         avatarSrc: img,
        //         name: "Вы",
        //         message: "Привет что делаешь?"
        //     },
        //     {
        //         id: 3,
        //         avatarSrc: img,
        //         name: "Вы",
        //         message: "Привет что делаешь?"
        //     },
        //     {
        //         id: 4,
        //         avatarSrc: img,
        //         name: "Вы",
        //         message: "Привет что делаешь?"
        //     },
        //     {
        //         id: 5,
        //         avatarSrc: img,
        //         name: "Вы",
        //         message: "Привет что делаешь?"
        //     },
        //     {
        //         id: 6,
        //         avatarSrc: img,
        //         name: "Вы",
        //         message: "Привет что делаешь?"
        //     }
        // ];
    }
    getDialog()
    {
        return [
            {
                id: 1,
                avatarSrc: img,
                name: "Лили",
                message: "Привет что делаешь?",
                right:false
            },
            {
                id: 2,
                avatarSrc: img,
                name: "Ацамаз",
                message: "Привет, все хорошо, работаю и отдыхаю",
                right: true
            },
            {
                id: 3,
                avatarSrc: img,
                name: "Лили",
                message: "Привет что делаешь?",
                right: false
            },
            {
                id: 4,
                avatarSrc: img,
                name: "Ацамаз",
                message: "Привет, все хорошо, работаю и отдыхаю",
                right: true
            },
            {
                id: 5,
                avatarSrc: img,
                name: "Лили",
                message: "Привет что делаешь?",
                right: false
            },
            {
                id: 6,
                avatarSrc: img,
                name: "Ацамаз",
                message: "Привет, все хорошо, работаю и отдыхаю",
                right: true
            }
        ]
    }
}
export default DialogsService;
