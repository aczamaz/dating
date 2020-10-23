import React from 'react';

import Page from '../../containers/page';
import './dialog.css';
import MenuTop from '../../blocks/menu-top';
import DialogsDetail from '../../blocks/dialogs-detail';
import MessagePanel from '../../blocks/message-panel';

const Dialog = (props) => {
    return (
        <Page>
            <MenuTop page="dialogs" />
            <DialogsDetail />
            <MessagePanel/>
        </Page>
    )
}
export default Dialog;
