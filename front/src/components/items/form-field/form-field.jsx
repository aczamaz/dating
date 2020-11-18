import React from 'react';
import { Field  } from 'redux-form';
import './form-field.css';
const FormInput = (props) =>
{
    const { placeholder, name, type, value, options, last} = props;

    const clickInputfile = () =>
    {
        document.querySelector('.form-field--file').click()
    }

    const lastElement = last ?'form-field--last':'';

    const UploadFile = ({
        input: { value: omitValue, ...inputProps },
        meta: omitMeta,
        ...props
    }) => <input type="file" {...inputProps} {...props} />;

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
                <Field
                    className={`form-field focus-outline-none form-select--text form-select--arrow ${lastElement}`}
                    placeholder={placeholder}
                    name={name}
                    component="select"
                >
                    { optionsFileds}
                </Field>
            )
        case 'file':
            return (
                <label htmlFor={name} className={`form-field focus-outline-none form-field--file-label ${lastElement}`} onClick={() => clickInputfile()}>
                    {value ? value:'Выберите файл'}
                    <Field
                        type={type}
                        className="form-field--file"
                        name={name}
                        component={UploadFile}
                    />
                </label>
            );
        default:
            return (
                <Field
                    type={type}
                    name={name}
                    className={`form-field focus-outline-none ${lastElement}`}
                    placeholder={placeholder}
                    component="input"
                />
            );
    }
};

export default FormInput;
