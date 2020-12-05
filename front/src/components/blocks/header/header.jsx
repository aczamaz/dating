import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

import { connect } from 'react-redux';
import { toggleRegistrationPopap, toggleAutorizationPopap, logout } from '../../../actions';

const Header = ({ toggleAutorization, toggleRegistration, token, logout}) => {
    let bunttons;
    if (!token)
    {
        bunttons = (
            <div className="header-buttons">
                <button onClick={toggleRegistration}>
                    Регистрация
                    </button>
                <button onClick={toggleAutorization}>
                    Войти
                    </button>
            </div>
        );
    }
    else
    {
        bunttons = (
            <div className="header-buttons">
                <button onClick={logout}>
                    Выйти
                </button>
            </div>
        );
    }
    return (
        <div className="header">
            <Link className="header__logo" to="/">
                Dating site
            </Link>
            {bunttons}
        </div>
    )
}

const mapDispatchToProps = {
    toggleAutorization: () => toggleAutorizationPopap(),
    toggleRegistration: () => toggleRegistrationPopap(),
    logout: () => logout()
}
const mapStateToProps = ({profile:{token}}) =>
{
    return {
        token:token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
