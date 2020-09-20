import React from 'react';

import Page from '../../containers/page';
import './profile.css';
import MenuTop from '../../blocks/menu-top';
import ProfileInfo from '../../blocks/profile-info';

const Profile = (props) =>
{
    return(
        <Page>
            <div className="profile">
                <MenuTop page="profile"/>
                <ProfileInfo/>
            </div>
        </Page>
    )
}
export default Profile;
