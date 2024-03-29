import React from 'react';

import Page from '../../containers/page';
import './dialogs.css';
import MenuTop from '../../blocks/menu-top';
import DialogsList from '../../blocks/dialogs-list';

const Dialogs = (props) => {
    return (
        <Page>
            <MenuTop page="dialogs" />
            <DialogsList />
        </Page>
    )
}
export default Dialogs;
