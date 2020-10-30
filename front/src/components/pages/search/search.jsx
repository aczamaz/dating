import React from 'react';

import './search.css';
import Page from '../../containers/page';
import MenuTop from '../../blocks/menu-top';
import SearchPanel from '../../blocks/search-panel';
import SearchList from '../../blocks/search-list';

const Search = () =>
{
    return(
        <Page>
            <MenuTop page="search" />
            <SearchPanel />
            <SearchList/>
        </Page>
    );
};

export default Search;
