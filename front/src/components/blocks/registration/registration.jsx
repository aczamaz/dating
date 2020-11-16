import React from 'react';

import { connect } from 'react-redux';
import { setFieldProfile,authRegistration } from '../../../actions'

import BackgroundPopap from '../../containers/background-popap';
import FormField from '../../items/form-field';
import FormButton from '../../items/form-button';
import FormAuth from '../../containers/form-auth';

import './registration.css';

const Registration = ({ show, email, password, rePassword, name, gender, age, srcImage, setField, authRegistration }) =>
{
    return(
        <BackgroundPopap show={show}>
            <FormAuth title="Регистрация">
                <FormField
                    type="text"
                    name="name"
                    placeholder="имя"
                    setField = {(e)=>setField(e)}
                    value={name}
                />
                <FormField
                    type="text"
                    name="email"
                    placeholder="почта"
                    setField={(e) => setField(e)}
                    value={email}
                />
                <FormField
                    type="password"
                    name="password"
                    placeholder="пароль"
                    setField={(e) => setField(e)}
                    value={password}
                />
                <FormField
                    type="password"
                    name="rePassword"
                    placeholder="повторить пароль"
                    setField={(e) => setField(e)}
                    value={rePassword}
                />
                <FormField
                    type="select"
                    name="gender"
                    placeholder="Выберите пол"
                    setField={(e) => setField(e)}
                    value={gender}
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
                    setField={(e) => setField(e)}
                    value={age}
                />
                <FormField
                    type="file"
                    name="srcImage"
                    placeholder="аватарка"
                    setField={(e) => setField(e)}
                    value={srcImage}
                    last={true}
                />
                <FormButton name="Регистрация" onClickEvent={() => authRegistration()} />
            </FormAuth>
        </BackgroundPopap>
    );
};
const mapStateToProps = ({ profile: { email, password, rePassword, gender, name, age, srcImage }})=>
{
    return {
        email,
        password,
        rePassword,
        name,
        gender,
        age,
        srcImage
    }
}
const mapDispatchToProps =
{
    setField:setFieldProfile,
    authRegistration: authRegistration
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
