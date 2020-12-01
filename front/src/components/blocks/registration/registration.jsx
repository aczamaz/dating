import React, { Component} from 'react';
import { connect } from 'react-redux';
import {authRegistration } from '../../../actions'
import BackgroundPopap from '../../containers/background-popap';
import FormField from '../../items/form-field';
import FormButton from '../../items/form-button';
import FormAuth from '../../containers/form-auth';
import SmartForm from '../../hoc/smart-form';
import './registration.css';

class Registration extends Component
{
    send = () => {
        const { onSend, authRegistration } = this.props;
        const values = onSend();
        authRegistration(values);
    }
    render()
    {

        const { show, errors, setValue } = this.props;
        const { name, email, password, rePassword, gender, age, srcImage} = errors;
        return(
            <BackgroundPopap show={show}>
                <FormAuth title="Регистрация" onSubmitForm={this.send}>
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

Registration = SmartForm(Registration);

const mapDispatchToProps = {
    authRegistration: authRegistration
}
const mapStateToProps = ({ profile:{show}})=>{
    return{
        show:show
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration);
