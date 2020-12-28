const instanse = {
    dialogsData:[],
    dialogsError:null,
    dialogsLoader:true,
    messagesData:[],
    messagesError:null,
    messagesLoading:true,
    mainUserId:null,
    otherUserId:null
}

const dialogs = (state = instanse,action)=>
{
    switch(action.type)
    {
        case 'GET_DIALOGS_ERROR':
            console.log(action.payload);
            return{
                ...state,
                dialogsError: action.payload.data.errors.msg,
            }
        case 'GET_DIALOGS_SUCCES':
            console.log(action.payload);
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
        default:
            return state;
    }
}
export default dialogs;
