import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './dialogs-list.css';

import { connect } from 'react-redux';
import { getDialogs } from '../../../actions';
import  compose  from '../../../utils/compose';
import {WithDialogsService} from '../../hoc/with-services';
import Spinner from '../spinner';
import { isNull } from 'lodash';

let DialogsList = ({ token, getDialogs, dialogsData: dialogs, dialogsLoading })=>
{
    useEffect(
        ()=>
        {
            if(!isNull(token))
                getDialogs(token)
        },
        [token, getDialogs]
    )
    let dialogsItems = <Spinner/>;
    if (dialogs.length === 0 && !dialogsLoading)
    {
        dialogsItems = (
            <div className="dialos-list__empty">нету диалогов</div>
        )
    }
    else if (!dialogsLoading)
    {
        dialogsItems = dialogs.map(
            ({ img, name, message, dialogId }) => {
                return (
                    <Link to={`/dialogs/${dialogId}`} key={dialogId} className="dialog-list__item">
                        <img className="dialog-list__avatar" src={img} alt="" />
                        <div className="dialog-list__name dialog-list_text-style">
                            {name}:
                            </div>
                        <div className="dialog-list__message dialog-list_text-style">
                            {message}
                        </div>
                    </Link>
                )
            }
        )
    }

    return(
        <div className="dialog-list">
            {
                dialogsItems
            }
        </div>
    )
}

const mapStateToProps = ({ profile: { token }, dialogs: { dialogsData, dialogsLoading}}) =>{
    return{
        token:token,
        dialogsData: dialogsData,
        dialogsLoading: dialogsLoading
    }
}
const mapDispatchToProps = (dispatch,ownProps) =>
{
    return{
        getDialogs: (token) => getDialogs(token, dispatch, ownProps)
    }
}
export default compose(
    WithDialogsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(DialogsList);
