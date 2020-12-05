import React,{useState} from 'react';

import './background-popap.css';
const BackgroundPopap = (props) =>
{
    const {children,show,toglePopap} = props;
    if (show)
    {
        return(
            <div
                className='background-popap'
                onClick={() => toglePopap()}
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
