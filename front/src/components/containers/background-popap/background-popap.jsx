import React,{useState} from 'react';

import './background-popap.css';
const BackgroundPopap = (props) =>
{
    const {children,show} = props;
    const [ isShow, showBackGround ] = useState(true);
    if (show && isShow)
    {
        return(
            <div
                className='background-popap'
                onClick = {()=>showBackGround(false)}
            >
                {
                    children
                }
            </div>
        );
    }
    else
    {
        return false;
    }
};

export default BackgroundPopap;
