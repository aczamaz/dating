import React from 'react';

import './form-input.css';
const FormInput = (props) =>
{
    const {placeholder, name, type} = props;
    return(
        <input
            type={type}
            name={name}
            className="form-input focus-outline-none"
            placeholder={placeholder}
        />
    );
};

export default FormInput;
