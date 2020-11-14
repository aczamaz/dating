import React from 'react';

import BackgroundPopap from '../../containers/background-popap';
import FormField from '../../items/form-field';
import FormButton from '../../items/form-button';
import FormAuth from '../../containers/form-auth';

import './registration.css';
const Registration = ({show}) =>
{
    return(
        <BackgroundPopap show={show}>
            <FormAuth title="Регистрация">
                <FormField
                    type="text"
                    name="name"
                    placeholder="имя"
                />
                <FormField
                    type="text"
                    name="login"
                    placeholder="логин"
                />
                <FormField
                    type="password"
                    name="password"
                    placeholder="пароль"
                />
                <FormField
                    type="password"
                    name="re-password"
                    placeholder="повторить пароль"
                />
                <FormField
                    type="select"
                    name="gender"
                    placeholder="Выберите пол"
                    options={
                        [
                            {
                                id:1,
                                name:"мужской",
                                value:"m"
                            },
                            {
                                id: 2,
                                name: "женский",
                                value: "f"
                            },
                        ]
                    }
                />
                <FormField
                    type="text"
                    name="age"
                    placeholder="возраст"
                />
                <FormButton name="Регистрация" />
            </FormAuth>
        </BackgroundPopap>
    );
};

export default Registration;
