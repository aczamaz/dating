import React from 'react';

import Page from '../../containers/page';
import './profile.css';
import MenuTop from '../../blocks/menu-top';
import ProfileBlock from '../../blocks/profile-block';

const Profile = (props) =>
{
    return(
        <Page>
            <MenuTop page="profile"/>
            <ProfileBlock/>
        </Page>
    )
}
export default Profile;
