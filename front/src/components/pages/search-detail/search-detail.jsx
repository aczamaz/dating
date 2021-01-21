import React from 'react';

import Page from '../../containers/page';
import MenuTop from '../../blocks/menu-top';
import SearchDetailBlock from '../../blocks/search-detail-block';
import './search-detail.css';


const SearchDetail = ({userId}) =>
{
    return(
        <Page>
            <MenuTop page="search" />
            <SearchDetailBlock userId={userId} />
        </Page>
    );
};

export default SearchDetail;
