import React, { Fragment} from 'react';
import { Field  } from 'redux-form';
import './form-field.css';
const FormInput = (props) =>
{
    const { placeholder, name, type, validate, options, last} = props;


    const lastElement = last ?'form-field--last':'';

    const UploadFile = ({
        input: { value: omitValue, ...inputProps },
        meta,
        ...props
    }) => {
        const clickInputfile = () => {
            document.querySelector('.form-field--file').click()
        }
        const isError = meta.error && meta.touched;
        return(
            <label htmlFor={name} className={`form-field focus-outline-none form-field--file-label ${lastElement} ${isError ? 'error' : ''}`} onClick={() => { clickInputfile()}}>
                {omitValue ? 'Файл выбран' : 'Выберите файл'}
                <input
                    type="file" {...inputProps}
                    {...props}
                />
            </label>
        )
    }
    const InputField = ({
        input: { value: omitValue, ...inputProps },
        meta,
        ...props
    }) =>
    {
        const isError = meta.error && meta.touched;
        console.log(meta.error , meta.touched);
        return(
            <Fragment>
                <input
                    type={type}
                    name={name}
                    className={`form-field focus-outline-none ${lastElement} ${isError ? 'error' : ''}`}
                    placeholder={isError ? meta.error : placeholder}
                    {...props}
                    {...inputProps}
                />
                {
                    meta.error && meta.touched &&
                    <div className="error-text">
                    {meta.error}
                    </div>
                }
            </Fragment>
        )
    }
    const SelectField = ({
        input: { value: omitValue, ...inputProps },
        meta,
        ...props
    }) => {
        const isError = meta.error && meta.touched;
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
                className={`form-field focus-outline-none form-select--text form-select--arrow ${lastElement} ${isError ? 'error' : ''}`}
                placeholder={placeholder}
                name={name}
                {...props}
                {...inputProps}
            >
                { optionsFileds}
            </select>
        )
    }

    switch (type)
    {
        case 'select':
            return (
                <Field
                    placeholder={placeholder}
                    name={name}
                    component={SelectField}
                    validate={[...validate]}
                />
            )
        case 'file':
            return (
                    <Field
                        type={type}
                        className="form-field--file"
                        name={name}
                        component={UploadFile}
                        validate={[...validate]}
                    />
            );
        default:
            return (
                <Field
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    component={InputField}
                    validate={[...validate]}
                />
            );
    }
};

export default FormInput;
