import React, { Component } from 'react'

import { ReactComponent as MessageIcon } from './message.svg';
import ProfileInfo from '../profile-info';

import './profile-with-send.css';

export default class ProfileWithSend extends Component
{
    render()
    {
        return (
            <div className="profile-conteiner">
                <ProfileInfo />
                <button className="send-message bnt-hover-active">
                    <MessageIcon />
                </button>
            </div>
        )
    }
}