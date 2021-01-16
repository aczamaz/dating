import React, { useEffect } from 'react'
import { ReactComponent as ArrowIcon } from './arrow.svg';
import './dating-block.css';
import ProfileWithSend from '../profile-with-send';

import { connect } from 'react-redux';
import { getDatingUsers, getNextUser, getPrevUser } from '../../../actions';
import { WithDatingServices } from '../../hoc/with-services';
import compose from '../../../utils/compose';
import Spinner from '../spinner';
import { isNull } from 'lodash';

const DatingBlock = ({ token, userFront, getNextUser, getPrevUser, getDatingUsers}) =>
{
    useEffect(
        () => {
            if (!isNull(token))
                getDatingUsers({token:token})
        },
        [token, getDatingUsers]
    )
    let userData = <Spinner />;
    if (!userFront)
    {
        userData = (
            <div className="dating-user__empty">нету пользователя для знакомства</div>
        )
    }
    else
    {
        userData = (
            <div className="dating-block">
                <button
                    className="button-switch bnt-hover-active button-switch__reverse"
                    onClick={() => getPrevUser()}
                >
                    <ArrowIcon />
                </button>
                <ProfileWithSend userData={userFront}/>
                <button
                    className="button-switch bnt-hover-active"
                    onClick={()=>getNextUser()}
                >
                    <ArrowIcon />
                </button>
            </div>
        );
    }
    return userData;
}

const mapStateToProps = ({ profile: { token }, dating: { userFront } }) => {
    return {
        token: token,
        userFront: userFront
    }
}
const mapDispatchToProps = (dispatch,ownProps) =>
{
    return{
        getDatingUsers: (token) => getDatingUsers(token, dispatch, ownProps),
        getNextUser: () => dispatch(getNextUser()),
        getPrevUser: () => dispatch(getPrevUser())
    }
}

export default compose(
    WithDatingServices(),
    connect(mapStateToProps, mapDispatchToProps)
)(DatingBlock);
