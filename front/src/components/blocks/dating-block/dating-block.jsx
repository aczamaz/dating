import React, { Component } from 'react'
import { ReactComponent as ArrowIcon } from './arrow.svg';
import './dating-block.css';
import ProfileWithSend from '../profile-with-send';
export default class DatingBlock extends Component {
    render() {
        return (
            <div className="dating-block">
                <button className="button-switch bnt-hover-active button-switch__reverse">
                    <ArrowIcon />
                </button>
                <ProfileWithSend/>
                <button className="button-switch bnt-hover-active">
                    <ArrowIcon/>
                </button>
            </div>
        )
    }
}
