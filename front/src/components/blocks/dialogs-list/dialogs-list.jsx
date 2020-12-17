import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './dialogs-list.css';

import { connect } from 'react-redux';
import { getDialogs } from '../../../actions';
import  compose  from '../../../utils/compose';
import {WithDialogsService} from '../../hoc/with-services';
import Cookies  from 'js-cookie';
class DialogsList extends Component
{
    componentDidMount()
    {
        let { getDialogs, token } = this.props;
        if (!token)
            token = Cookies.get('userToken');
        console.log(token);
        getDialogs(token);
    }
    buildDialogsItem()
    {
        const dialogs = this.props.dialogsData;
        console.log(dialogs);
        if(dialogs.length === 0)
            return(
                <div className="dialos-list__empty">нету диалогов</div>
            )
        return dialogs.map(
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
    render()
    {
        const dialogs = this.buildDialogsItem();
        return (
            <div className="dialog-list">
                {dialogs}
            </div>
        )
    }
};

const mapStateToProps = ({profile:{token},dialogs:{dialogsData}}) =>{
    return{
        token:token,
        dialogsData: dialogsData
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
