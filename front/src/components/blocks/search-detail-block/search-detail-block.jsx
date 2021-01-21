import React,{useEffect} from 'react';

import './search-detail-block.css';
import ProfileWithSend from '../profile-with-send';

import {compose} from '../../../utils';
import {connect} from 'react-redux';
import {WithUserServices} from '../../hoc/with-services';
import {getUserById} from '../../../actions';

let SearchDetailBlock = ({ userId, userData, getUserById}) =>
{
    useEffect(
        () =>
        {
            getUserById({id:userId});
        },
        [userId, getUserById]
    )
    return(
       <div className='search-detail-block'>
            <ProfileWithSend userData={userData} />
       </div>
    );
};

const mapStateToProps = ({search:{ user}})=>
{
    return{
        userData: user
    }
}
const mapDispatchToProps = (dispatch,ownProps) =>
{
    return{
        getUserById: (data) => getUserById(data,dispatch,ownProps)
    }
}

export default compose(
    WithUserServices(),
    connect(mapStateToProps, mapDispatchToProps)
)(SearchDetailBlock);
