import React, { Component} from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {authRegistration } from '../../../actions'
import { requiredInput, longPasswordLessThen6, isNumber, isNotLongNember} from './../../../utils/validations';
import BackgroundPopap from '../../containers/background-popap';
import FormField from '../../items/form-field';
import FormButton from '../../items/form-button';
import FormAuth from '../../containers/form-auth';

import './registration.css';

class Registration extends Component
{
    render()
    {

        const { show, handleSubmit, registration } = this.props;
        return(
            <BackgroundPopap show={show}>
                <FormAuth title="Регистрация" onSubmitForm={handleSubmit(registration)}>
                    <FormField
                        type="text"
                        name="name"
                        placeholder="имя"
                        validate={[requiredInput]}
                    />
                    <FormField
                        type="text"
                        name="email"
                        placeholder="почта"
                        validate={[requiredInput]}
                    />
                    <FormField
                        type="password"
                        name="password"
                        placeholder="пароль"
                        validate={[requiredInput, longPasswordLessThen6]}
                    />
                    <FormField
                        type="password"
                        name="rePassword"
                        placeholder="повторить пароль"
                        validate={[requiredInput, longPasswordLessThen6]}
                    />
                    <FormField
                        type="select"
                        name="gender"
                        placeholder="Выберите пол"
                        validate={[requiredInput]}
                        options={
                            [
                                {
                                    id: 1,
                                    name: "Выберите пол",
                                    value: undefined
                                },
                                {
                                    id:2,
                                    name:"мужской",
                                    value:"m"
                                },
                                {
                                    id: 4,
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
                        validate={[requiredInput, isNumber, isNotLongNember]}
                    />
                    <FormField
                        type="file"
                        name="srcImage"
                        placeholder="аватарка"
                        last={true}
                        validate={[requiredInput]}
                    />
                    <FormButton name="Регистрация" />
                </FormAuth>
            </BackgroundPopap>
        );
    }
};

Registration = reduxForm({
    form: 'registration',
})(Registration);

const mapDispatchToProps = {
    registration: authRegistration
}
const mapStateToProps = ({ profile:{show}})=>{
    return{
        show:show
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Registration);
