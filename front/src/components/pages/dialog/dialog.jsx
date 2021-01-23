import React,{useEffect} from 'react';

import Page from '../../containers/page';
import './dialog.css';
import MenuTop from '../../blocks/menu-top';
import DialogsDetail from '../../blocks/dialogs-detail';
import MessagePanel from '../../blocks/message-panel';
import socket from '../../../socket';

import { connect } from 'react-redux';
import { newMessage } from '../../../actions';

const Dialog = ({ dialogId, otherUserId, token, avatar_dir, name, newMessage}) =>
{
    useEffect(
        ()=>
        {
            const data = { dialogId: dialogId};
            socket.emit('ROOM:JOIN', data);
        },
        [dialogId]
    )
    useEffect(
        ()=>
        {
            socket.on('ROOM:NEW_MESSAGE',newMessage);
        },
        [newMessage]
    )
    const sendMessage = (data) =>
    {
        const dataMessage = { dialogId: dialogId, otherUserId: otherUserId, token: token, avatar_dir: avatar_dir, name: name, ...data};
        socket.emit('ROOM:NEW_MESSAGE',dataMessage);
    }
    return (
        <Page>
            <MenuTop page="dialogs" />
            <DialogsDetail dialogId={dialogId} />
            <MessagePanel sendMessage={sendMessage}/>
        </Page>
    )
}

const mapDispatchToProps = (dispatch,ownProps)=>
{
    return{
        newMessage:(data)=>dispatch(newMessage(data))
    }
}

const mapStateToProps = ({ dialogs: { otherUserId }, profile: { token, userData: { avatar_dir, name } }})=>
{
    return{
        otherUserId: otherUserId,
        token:token,
        avatar_dir: avatar_dir,
        name: name
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
