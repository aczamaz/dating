import React, { Component } from 'react'
import { ReactComponent as MessageIcon } from './message.svg';
import { ReactComponent as ArrowIcon } from './arrow.svg';
import './dating-block.css';
import ProfileInfo from '../profile-info';
export default class DatingBlock extends Component {
    render() {
        return (
            <div className="dating-block">
                <button className="button-switch bnt-hover-active button-switch__reverse">
                    <ArrowIcon />
                </button>
                <div className="profile-conteiner">
                    <ProfileInfo/>
                    <button className="send-message bnt-hover-active">
                        <MessageIcon/>
                    </button>
                </div>
                <button className="button-switch bnt-hover-active">
                    <ArrowIcon/>
                </button>
            </div>
        )
    }
}
