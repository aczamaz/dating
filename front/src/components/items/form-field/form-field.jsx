import React from 'react';
import './form-field.css';
const FormInput = (props) =>
{
    const { placeholder, name, type, error, options, setValue, last} = props;


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
                    className={`form-field focus-outline-none form-select--text form-select--arrow ${lastElement} ${error ? 'error' : ''}`}
                    placeholder={placeholder}
                    name={name}
                    onChange={setValue}
                >
                    { optionsFileds}
                </select>
            )
        case 'file':
            return (
                <label htmlFor={name} className={`form-field focus-outline-none form-field--file-label ${lastElement} ${error ? 'error' : ''}`}>
                    'Выберите файл
                    <input
                        className="form-field--file"
                        type={type}
                        id={name}
                        onChange={setValue}
                    />
                </label>
            );
        default:
            return (
                <input
                    className={`form-field focus-outline-none ${lastElement} ${error ? 'error' : ''}`}
                    placeholder={error ? error : placeholder}
                    type={type}
                    name={name}
                    id={name}
                    onChange={setValue}
                />
            );
    }
};

export default FormInput;
