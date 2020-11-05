import React from 'react';

import './form-field.css';
const FormInput = (props) =>
{
    const { placeholder, name, type, options} = props;

    if(type === 'select')
    {
        const optionsFileds = options.map(
            (option) =>
            {
                return (
                    <option className="form-select" value={option.value} key={option.id}>
                        {option.name}
                    </option>
                )
            }
        )
        return(
            <select
                className="form-field focus-outline-none form-select--text form-select--arrow"
                placeholder={placeholder}
                name={name}
            >
                    { optionsFileds }
            </select>
        )
    }
    else
    {
        return(
            <input
                type={type}
                name={name}
                className="form-field focus-outline-none"
                placeholder={placeholder}
            />
        );
    }
};

export default FormInput;
