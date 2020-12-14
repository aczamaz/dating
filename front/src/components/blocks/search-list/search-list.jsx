import React from 'react';
import { Link } from 'react-router-dom';
import SearchService from '../../../services/search-service';
import './search-list.css';
const SearchList = () =>
{
    const searchSerivce = new SearchService();
    const result = searchSerivce.getResult();
    const renderItems = result.map(
        ({id, avatar, name }) => {
            return (
                <Link className="search-list__item" to={`/search/${id}/`} key={id}>
                    <img src={avatar} alt="" className="search-list__img" />
                    <div className="search-list__name">{name}</div>
                </Link>
            )
        }
    );
    return(
       <div className='search-list'>
           {
                renderItems
           }
       </div>
    );
};

export default SearchList;
