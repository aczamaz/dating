import React from 'react';

import './form-button.css';
const FormButton = (props) =>
{
    const {name,onClickEvent} = props;
    return(
        <button className="form-button focus-outline-none" onClick={(e) => { e.preventDefault(); onClickEvent()}}>
            {name}
        </button>
    );
};

export default FormButton;
