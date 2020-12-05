import React,{Fragment} from 'react';
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
                <Fragment>
                    <select
                        className={`form-field focus-outline-none form-select--text form-select--arrow ${lastElement} ${error ? 'error' : ''}`}
                        placeholder={placeholder}
                        name={name}
                        onChange={setValue}
                    >
                        { optionsFileds}
                    </select>
                    { (error && !lastElement) ? <div className="error-label"> {error} </div> : null}
                </Fragment>
            )
        case 'file':
            return (
                <Fragment>
                    <label htmlFor={name} className={`form-field focus-outline-none form-field--file-label ${lastElement} ${error ? 'error' : ''}`}>
                        {error?'файл не выбран':'выберите файл'}
                        <input
                            className="form-field--file"
                            type={type}
                            name={name}
                            id={name}
                            onChange={setValue}
                        />
                    </label>
                </Fragment>
            );
        default:
            return (
                <Fragment >
                    <input
                        className={`form-field focus-outline-none ${lastElement} ${error ? 'error' : ''}`}
                        placeholder={error ? error : placeholder}
                        type={type}
                        name={name}
                        id={name}
                        onChange={setValue}
                    />
                    { (error && !lastElement)? <div className="error-label"> {error} </div>:null}
                </Fragment>
            );
    }
};

export default FormInput;
