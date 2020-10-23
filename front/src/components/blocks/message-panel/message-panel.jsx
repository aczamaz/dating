import React from 'react';

import './message-panel.css';

const MessagePanel = ()=>
{
    return(
        <form className="message-panel">
            <textarea className="message-panel__input"/>
            <input type="button" className="message-panel__button" value="Отправить"/>
        </form>
    )
}
export default MessagePanel;
