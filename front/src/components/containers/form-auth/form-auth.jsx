import React from 'react';

import { stopPropagation } from '../../../utils/utils';

import './form-auth.css';
const FormAuth = (props) =>
{
    const {children,title} = props;
    return(
        <div className='form-auth' onClick={(e) => stopPropagation(e)}>
            <div className='form-auth__title'>{title}</div>
            <form className="form-auth__inner">
                {children}
            </form>
        </div>
    );
};

export default FormAuth;
