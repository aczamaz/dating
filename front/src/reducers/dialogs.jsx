const instanse = {
    dialogsData:[],
    errorLoad:false
}

const dialogs = (state = instanse,action)=>
{
    console.log(action);
    switch(action.type)
    {
        case 'GET_DIALOGS_ERROR':
            return{
                ...state,
                errorLoad: true
            }
        case 'GET_DIALOGS_SUCCES':
            return{
                ...state,
                dialogsData: action.payload.data.dialogs
            }
        default:
            return state;
    }
}
export default dialogs;
