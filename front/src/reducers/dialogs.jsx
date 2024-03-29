const instanse = {
    dialogsData:[],
    dialogsError:null,
    dialogsLoading:true,
    messagesData:[],
    messagesError:null,
    messagesLoading:true,
    mainUserId:null,
    otherUserId:null,
    showDialogPupup:false
}

const dialogs = (state = instanse,action)=>
{
    switch(action.type)
    {
        case 'GET_DIALOGS_ERROR':
            return{
                ...state,
                dialogsError: action.payload.data.errors,
                dialogsLoading: false
            }
        case 'GET_DIALOGS_SUCCES':
            return{
                ...state,
                dialogsData: action.payload.data.dialogs,
                dialogsLoading: false
            }
        case 'GET_DIALOG_ERROR':
            return {
                ...state,
                messagesError: action.payload.data.errors,
                messagesLoading: false
            }
        case 'GET_DIALOG_SUCCES':
            return {
                ...state,
                messagesData: action.payload.data.messages,
                mainUserId: action.payload.data.mainUserId,
                otherUserId: action.payload.data.otherUserId,
                messagesLoading: false
            }
        case 'SHOW_POPAP_NEW_MESSAGE':
            return{
                ...state,
                showDialogPupup:true,
                otherUserId: action.payload
            }
        case 'HIDE_POPAP_NEW_MESSAGE':
            return{
                showDialogPupup: false,
            }
        case 'SEND_NEW_MESSAGE_SUCCESS':
            return{
                ...state,
                showDialogPupup: false,
            }
        case 'SEND_NEW_MESSAGE_ERROR':
            return{
                ...state
            }
        case 'NEW_MESSAGE':
            const { myId, avatar_dir, messageId, name, message} = action.payload;
            const right = myId === state.mainUserId;
            const newMessage = {
                id:messageId,
                avatar_dir:avatar_dir,
                name: name,
                message: message,
                right: right
            }
            return{
                ...state,
                messagesData:[
                    ...state.messagesData,
                    newMessage
                ]
            }

        default:
            return state;
    }
}
export default dialogs;
