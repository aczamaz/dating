import React from 'react';

import Page from '../../containers/page';
import './dating.css';
import MenuTop from '../../blocks/menu-top';
import DatingBlock from '../../blocks/dating-block';

const Dating = () => {
    return (
        <Page>
            <MenuTop page="dating" />
            <DatingBlock/>
        </Page>
    )
}
export default Dating;
