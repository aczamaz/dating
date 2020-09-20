import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                Dating site
            </div>
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
