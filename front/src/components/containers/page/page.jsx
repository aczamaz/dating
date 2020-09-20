import React from 'react';

import './page.css';

const Page = (props) => {
    return(
        <div className="page">
            {props.children}
        </div>
    )
}
export default Page;
