import React from 'react';

import BackgroundPopap from '../../containers/background-popap';
import FormButton from '../../items/form-button';
import { stopPropagation } from '../../../utils';
import './new-message.css';

import { connect } from 'react-redux';
import { hidePopapNewMessage, sendNewMessage } from '../../../actions';
import SmartForm from '../../hoc/smart-form';
import { checkNewMessageForm } from './validation';
import { compose } from '../../../utils';
import { WithDialogsService } from '../../hoc/with-services';

let NewMessage = ({ showPopap, hidePopap, setValue, sendMessage, onSend, errors, otherUserId, token }) =>
{
    return(
        <BackgroundPopap show={showPopap} toglePopap={()=>hidePopap()}>
            <form
                className='new-message'
                onClick={(e) => stopPropagation(e)}
                onSubmit={(e) => onSend(e, sendMessage, { otherUserId: otherUserId,token: token})}
            >
                <textarea
                    name='message'
                    className='new-message__text focus-outline-none'
                    onChange={setValue}
                    placeholder={errors.message ? errors.message:""}
                >
                </textarea>
                <div className="new-message__inner">
                    <FormButton name="Отправить" />
                </div>
            </form>
        </BackgroundPopap>
    );
};

NewMessage = SmartForm(NewMessage, checkNewMessageForm);

const mapDispatchToProps = (dispatch,ownProps)=>
{
    return{
        hidePopap: () => dispatch(hidePopapNewMessage()),
        sendMessage: (data) => sendNewMessage(data,dispatch,ownProps)
    }
};

const mapStateToProps = ({ dialogs: { showDialogPupup, otherUserId }, profile: { token }}) =>
{
    return{
        showPopap: showDialogPupup,
        otherUserId: otherUserId,
        token: token
    }
}

export default compose(
    WithDialogsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(NewMessage);
