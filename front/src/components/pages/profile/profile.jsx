import React from 'react';

import Page from '../../containers/page';
import './profile.css';
import MenuTop from '../../blocks/menu-top';
import ProfileInfo from '../../blocks/profile-info';

const Profile = (props) =>
{
    return(
        <Page>
            <MenuTop page="profile"/>
            <ProfileInfo/>
        </Page>
    )
}
export default Profile;
