import React from 'react'

import { ReactComponent as MessageIcon } from './message.svg';
import ProfileInfo from '../profile-info';
import { connect } from 'react-redux';
import { showPopapNewMessage } from '../../../actions';
import './profile-with-send.css';

let ProfileWithSend = ({ userData, showPopapNewMessage })=>
{
    return (
        <div className="profile-conteiner">
            <ProfileInfo userData={userData}/>
            <button className="send-message bnt-hover-active" onClick={() => showPopapNewMessage(userData.id)}>
                <MessageIcon />
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispath)=>
{
    return{
        showPopapNewMessage: (userId) => dispath(showPopapNewMessage(userId))
    }
}

const mapStateToProps = ()=>{
    return{};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWithSend);
