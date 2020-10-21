import React from 'react';

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
            name: "messages",
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
                            {item.content}
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default MenuTop;
