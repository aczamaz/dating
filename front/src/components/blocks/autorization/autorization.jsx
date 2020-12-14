import React from 'react';
import { withRouter } from 'react-router-dom';
import BackgroundPopap from '../../containers/background-popap';
import FormField from '../../items/form-field';
import FormButton from '../../items/form-button';
import FormAuth from '../../containers/form-auth';

import { connect } from 'react-redux';
import { authAutorizate, toggleAutorizationPopap } from '../../../actions';
import SmartForm from '../../hoc/smart-form';
import compose from '../../../utils/compose';
import { WithAuthServices } from '../../hoc/with-services/';

import {checkAutorizationForm} from './validation';

import './autorization.css';

let Autorization = ({ show, errors, toggleAutorizationPopap, errorsBack, onSend, authAutorizate, setValue }) =>
{
    let {email, password } = Object.keys(errorsBack).length > 0 ? errorsBack : errors;
    return(
        <BackgroundPopap show={show} toglePopap={toggleAutorizationPopap}>
            <FormAuth title="Войти" onSubmitForm={(e) => onSend(e, authAutorizate)}>
                <FormField
                    type="text"
                    name="email"
                    placeholder="email"
                    setValue={setValue}
                    error={email}
                />
                <FormField
                    type="password"
                    name="password"
                    placeholder="пароль"
                    setValue={setValue}
                    last={true}
                    error={password}
                />
                <FormButton name="Войти" />
            </FormAuth>
        </BackgroundPopap>
    );
};

Autorization = SmartForm(Autorization,checkAutorizationForm);
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        authAutorizate: (data) => authAutorizate(data, dispatch, ownProps),
        toggleAutorizationPopap: ()=>dispatch(toggleAutorizationPopap())
    }
}
const mapStateToProps = ({ profile: { showAutorizationPopap, errorsBack } }) => {
    return {
        show: showAutorizationPopap,
        errorsBack: errorsBack
    }
}

export default compose(
    withRouter,
    WithAuthServices(),
    connect(mapStateToProps, mapDispatchToProps)
)
(Autorization);
