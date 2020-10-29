import React from 'react';

import './search.css';
import Page from '../../containers/page';
import MenuTop from '../../blocks/menu-top';
import SearchPanel from '../../blocks/search-panel';
const Search = () =>
{
    return(
        <Page>
            <MenuTop page="search" />
            <SearchPanel />
        </Page>
    );
};

export default Search;
