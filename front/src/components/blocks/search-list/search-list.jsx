import React from 'react';
import { Link } from 'react-router-dom';
import './search-list.css';

import { connect } from 'react-redux';
import Spinner from '../spinner';
const SearchList = ({users,loading}) =>
{
    let usersItem = <Spinner/>;
    if (users.length === 0 && !loading) {
        usersItem = (
            <div className="search-list__empty">нету пользователей</div>
        )
    }
    else
    {
        usersItem = users.map(
            ({id, avatar, name }) => {
                return (
                    <Link className="search-list__item" to={`/search/${id}/`} key={id}>
                        <img src={avatar} alt="" className="search-list__img" />
                        <div className="search-list__name">{name}</div>
                    </Link>
                )
            }
        );
    }
    return(
       <div className='search-list'>
            {usersItem}
       </div>
    );
};
const mapStateToProps = ({ search: { users, loading}})=>
{
    return{
        users: users,
        loading: loading
    }
}
export default connect( mapStateToProps,null )(SearchList);
