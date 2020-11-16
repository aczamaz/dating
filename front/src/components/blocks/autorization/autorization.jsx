import React from 'react';

import BackgroundPopap from '../../containers/background-popap';
import FormInput from '../../items/form-input';
import FormButton from '../../items/form-button';
import FormAuth from '../../containers/form-auth';

import './autorization.css';

const Autorization = ({show}) =>
{
    return(
        <BackgroundPopap show={show}>
            <FormAuth title="Войти">
                <FormInput
                    type="text"
                    name="login"
                    placeholder="логин"
                />
                <FormInput
                    type="password"
                    name="password"
                    placeholder="пароль"
                    last={true}
                />
                <FormButton name="Войти" />
            </FormAuth>
        </BackgroundPopap>
    );
};

export default Autorization;
