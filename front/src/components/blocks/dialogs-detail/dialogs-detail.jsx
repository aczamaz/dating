import React, { useEffect, useRef} from 'react';

import './dialogs-detail.css';

import { connect } from 'react-redux';
import { getDialog } from '../../../actions';
import compose from '../../../utils/compose';
import { WithDialogsService } from '../../hoc/with-services';
import { isNull } from 'lodash';
import Spinner from '../spinner';

let DialogsDetail = ({ token, getDialog, messagesData: messages, messagesLoading, dialogId }) =>
{
    const messagesRef = useRef(null);
    useEffect(
        () => {
            if (!isNull(token) && !isNull(dialogId))
                getDialog({ token: token, dialogId: dialogId });
        },
        [token, getDialog,dialogId]
    )
    useEffect(() => {
        messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
    }, [messages])
    let messagesItems = <Spinner/>;
    if (messages.length === 0 && !messagesLoading) {
        messagesItems = (
            <div className="dialos-detail__empty">нету диалогов</div>
        )
    }
    else if (!messagesLoading)
    {
        messagesItems = messages.map(
            ({ id, avatar_dir, name, message, right }) => {
                const activeLeft = right ? 'message_left' : '';
                return (
                    <div key={id} className={`message ${activeLeft}`}>
                        <div className="message-info">
                            <img className="message-info__img" src={avatar_dir} alt="" />
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
    return(
        <div
            className="dialogs-detail"
            ref={messagesRef}
        >
            {messagesItems}
        </div>
    )
}

const mapStateToProps = ({ profile: { token }, dialogs: { messagesData, messagesLoading } }) => {
    return {
        token: token,
        messagesData: messagesData,
        messagesLoading: messagesLoading
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDialog: (token) => getDialog(token, dispatch, ownProps)
    }
}
export default compose(
    WithDialogsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(DialogsDetail);
