import React, { Component } from 'react'
import './dialogs-list.css';
import MessagesService from '../../../services/messages-service.jsx'
export default class DialogsList extends Component
{
    state = {
        dialogs:[]
    };
    componentDidMount()
    {
        const dialogsService = new MessagesService();
        const dialogs = dialogsService.getDialogs();
        this.setState({ dialogs: dialogs});
    }
    buildDialogsItem()
    {
        const dialogs = this.state.dialogs;
        return dialogs.map(
            ({ avatarSrc, name, message, id }) => {
                return (
                    <div key={id} className="dialog-list__item">
                        <img className="dialog-list__avatar" src={avatarSrc} alt="" />
                        <div className="dialog-list__name dialog-list_text-style">
                            {name}:
                        </div>
                        <div className="dialog-list__message dialog-list_text-style">
                            {message}
                        </div>
                    </div>
                )
            }
        )

    }
    render()
    {
        const dialogs = this.buildDialogsItem();
        return (
            <div className="dialog-list">
                {dialogs}
            </div>
        )
    }
}
