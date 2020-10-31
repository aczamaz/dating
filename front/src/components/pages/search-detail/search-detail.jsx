import React from 'react';

import Page from '../../containers/page';
import MenuTop from '../../blocks/menu-top';
import SearchDetailBlock from '../../blocks/search-detail-block';
import './search-detail.css';


const SearchDetail = () =>
{
    return(
        <Page>
            <MenuTop page="search" />
            <SearchDetailBlock/>
        </Page>
    );
};

export default SearchDetail;
