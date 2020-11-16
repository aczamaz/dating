import React from 'react';

import './form-field.css';
const FormInput = (props) =>
{
    const { placeholder, setField, name, type, value, options, last} = props;

    const clickInputfile = () =>
    {
        document.querySelector('.form-field--file').click()
    }

    const lastElement = last ?'form-field--last':'';

    switch (type)
    {
        case 'select':
            const optionsFileds = options.map(
                (option) => {
                    return (
                        <option value={option.value} key={option.id}>
                            {option.name}
                        </option>
                    )
                }
            )
            return (
                <select
                    className={`form-field focus-outline-none form-select--text form-select--arrow ${lastElement}`}
                    placeholder={placeholder}
                    name={name}
                    onChange={(e) => setField(e)}
                    value={value}
                >
                    { optionsFileds}
                </select>
            )
        case 'file':
            return (
                <label htmlFor={name} className={`form-field focus-outline-none form-field--file-label ${lastElement}`} onClick={() => clickInputfile()}>
                    {value ? value:'Выберите файл'}
                    <input
                        type={type}
                        className="form-field--file"
                        name={name}
                        onChange={(e) => setField(e)}
                        value={value}
                    />
                </label>
            );
        default:
            return (
                <input
                    type={type}
                    name={name}
                    className={`form-field focus-outline-none ${lastElement}`}
                    placeholder={placeholder}
                    onChange={(e) => setField(e)}
                    value={value}
                />
            );
    }
};

export default FormInput;
