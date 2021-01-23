import React from 'react';

import './message-panel.css';
import SmartForm from '../../hoc/smart-form';

let MessagePanel = ({ sendMessage, onSend, setValue})=>
{
    return(
        <form
            className="message-panel"
            onSubmit={(e) => onSend(e, sendMessage)}
        >
            <textarea
                name="message"
                className="message-panel__input"
                onChange={setValue}
            />
            <input type="submit" className="message-panel__button" value="Отправить"/>
        </form>
    )
}

MessagePanel = SmartForm(MessagePanel);

export default MessagePanel;
