import React, { Component} from 'react';
import { connect } from 'react-redux';
import { authRegistration, toggleRegistrationPopap } from '../../../actions'
import BackgroundPopap from '../../containers/background-popap';
import FormField from '../../items/form-field';
import FormButton from '../../items/form-button';
import FormAuth from '../../containers/form-auth';
import SmartForm from '../../hoc/smart-form';
import './registration.css';
import compose from '../../../utils/compose';
import {WithAuthServices} from '../../hoc/with-services/';
import { checkRegistrationForm} from './validation';
class Registration extends Component
{
    render()
    {
        const { show, errors, errorsBack, toggleRegistrationPopap, onSend, authRegistration, setValue } = this.props;
        let { name, email, password, rePassword, gender, age, srcImage } = Object.keys(errorsBack).length > 0?errorsBack:errors;
        return(
            <BackgroundPopap show={show} toglePopap={toggleRegistrationPopap}>
                <FormAuth title="Регистрация" onSubmitForm={(e)=>onSend(e,authRegistration)}>
                    <FormField
                        type="text"
                        name="name"
                        placeholder="имя"
                        error={name}
                        setValue={setValue}
                    />
                    <FormField
                        type="text"
                        name="email"
                        placeholder="почта"
                        error={email}
                        setValue={setValue}
                    />
                    <FormField
                        type="password"
                        name="password"
                        placeholder="пароль"
                        error={password}
                        setValue={setValue}
                    />
                    <FormField
                        type="password"
                        name="rePassword"
                        placeholder="повторить пароль"
                        error={rePassword}
                        setValue={setValue}
                    />
                    <FormField
                        type="select"
                        name="gender"
                        placeholder="Выберите пол"
                        error={gender}
                        setValue={setValue}
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
                        error={age}
                        setValue={setValue}
                    />
                    <FormField
                        type="file"
                        name="srcImage"
                        placeholder="аватарка"
                        last={true}
                        error={srcImage}
                        setValue={setValue}
                    />
                    <FormButton name="Регистрация" />
                </FormAuth>
            </BackgroundPopap>
        );
    }
};

Registration = SmartForm(Registration, checkRegistrationForm);

const mapDispatchToProps = (dispatch,{authService}) =>
{
    return{
        authRegistration: (data) => authRegistration(data, dispatch, authService),
        toggleRegistrationPopap: () => dispatch(toggleRegistrationPopap())
    }
}
const mapStateToProps = ({ profile: { showRegistrationPopap, errorsBack}})=>{
    return{
        show: showRegistrationPopap,
        errorsBack: errorsBack
    }
}

export default compose(
    WithAuthServices(),
    connect(mapStateToProps, mapDispatchToProps)
)
(Registration);
