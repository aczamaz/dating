import React from 'react';
import { Link } from 'react-router-dom';
import './menu-top.css';
import { ReactComponent as IconProfile} from './icons/profile.svg';
import { ReactComponent as IconMessages } from './icons/messages.svg';
import { ReactComponent as IconHeart } from './icons/heart.svg';
import { ReactComponent as IconSearch } from './icons/search.svg';

const MenuTop = (props) =>
{
    const {page} = props;
    const items = [
        {
            id:1,
            name:"profile",
            content: <IconProfile />
        },
        {
            id: 2,
            name: "dialogs",
            content: <IconMessages />
        },
        {
            id: 3,
            name: "dating",
            content: <IconHeart />
        },
        {
            id: 4,
            name: "search",
            content: <IconSearch />
        },
    ];
    return (
        <ul className="menu-top">
            {
                items.map((item)=>{
                    return(
                        <li key={item.id} className={`menu-top__item ${item.name === page?'menu-top__item_active':''}`}>
                            <Link to={`/${item.name}/`} className={`menu-top__item ${item.name === page ? 'menu-top__item_active' : ''}`}>
                                {item.content}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default MenuTop;
