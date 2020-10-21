import img from './avatar.png';

class MessagesService
{
    getDialogs()
    {
        return [
            {
                id:1,
                avatarSrc: img,
                name: "Вы",
                message: "Привет что делаешь?"
            },
            {
                id: 2,
                avatarSrc: img,
                name: "Вы",
                message: "Привет что делаешь?"
            },
            {
                id: 3,
                avatarSrc: img,
                name: "Вы",
                message: "Привет что делаешь?"
            },
            {
                id: 4,
                avatarSrc: img,
                name: "Вы",
                message: "Привет что делаешь?"
            },
            {
                id: 5,
                avatarSrc: img,
                name: "Вы",
                message: "Привет что делаешь?"
            },
            {
                id: 6,
                avatarSrc: img,
                name: "Вы",
                message: "Привет что делаешь?"
            }
        ];
    }
}
export default MessagesService;
