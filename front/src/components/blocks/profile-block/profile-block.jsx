import React from 'react'

import './profile-block.css';
import ProfileInfo from '../profile-info';
import { connect } from 'react-redux';

const ProfileBlock = ({ userData}) =>
{
    console.log(userData);
    return (
        <div className="profile-block">
            <ProfileInfo userData={userData} />
        </div>
    )
}

const mapDispatchToProps = () =>
{
    return{};
};

const mapStateToProps = ({ profile: { userData} }) =>
{
    return {
        userData: userData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBlock);
