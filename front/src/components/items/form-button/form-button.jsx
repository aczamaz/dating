import React from 'react';

import './form-button.css';
const FormButton = (props) =>
{
    const {name} = props;
    return(
        <button className="form-button focus-outline-none">
            {name}
        </button>
    );
};

export default FormButton;
