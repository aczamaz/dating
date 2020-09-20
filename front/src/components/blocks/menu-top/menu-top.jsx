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
            name:"profile",
            content: <IconProfile />
        },
        {
            name: "messages",
            content: <IconMessages />
        },
        {
            name: "dating",
            content: <IconHeart />
        },
        {
            name: "search",
            content: <IconSearch />
        },
    ];
    return (
        <ul className="menu-top">
            {
                items.map((item)=>{
                    return(
                        <li className={`menu-top__item ${item.name === page?'menu-top__item_active':''}`}>
                            {item.content}
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default MenuTop;
