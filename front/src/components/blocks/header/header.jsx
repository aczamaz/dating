import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <Link className="header__logo" to="/">
                Dating site
            </Link>
            <div className="header-buttons">
                <button>
                    Регистрация
                </button>
                <button>
                    Войти
                </button>
            </div>
        </div>
    )
}
export default Header;
