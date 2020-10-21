import React from 'react';

import Page from '../../containers/page';
import './dialogs.css';
import MenuTop from '../../blocks/menu-top';
import DialogList from '../../blocks/dialog-list';

const Dialogs = (props) => {
    return (
        <Page>
            <MenuTop page="messages" />
            <DialogList />
        </Page>
    )
}
export default Dialogs;
