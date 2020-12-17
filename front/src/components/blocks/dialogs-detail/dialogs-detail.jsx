import React,{Component} from 'react';

import DialogsService from '../../../services/dialogs-service.jsx';

import './dialogs-detail.css';

export default class DialogsDetail extends Component
{
    state = {
        dialogList:[]
    }
    componentDidMount()
    {
        const dialogsService = new DialogsService();
        this.setState({dialogList: dialogsService.getDialog()})
    }
    buildDialogList()
    {
        const dialogList = this.state.dialogList;
        return dialogList.map(
            ({id, avatarSrc,name,message,right})=>
            {
                const activeLeft = right?'message_left':'';
                return(
                    <div key={id} className={`message ${activeLeft}`}>
                        <div className="message-info">
                            <img className="message-info__img" src={avatarSrc} alt="" />
                            <div className="message-info__name">
                                {name}
                            </div>
                        </div>
                        <div className="message-text">
                            {message}
                        </div>
                    </div>
                )
            }
        )
    }
    render()
    {
        const messages = this.buildDialogList();
        return(
            <div className="dialogs-detail">
                {messages}
            </div>
        )
    }
}
