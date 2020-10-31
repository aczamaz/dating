import React from 'react';
import BackgroundPopap from '../../containers/background-popap';
import {stopPropagation} from '../../../utils/utils';
import './autorization.css';
const Autorization = ({show}) =>
{
    return(
        <BackgroundPopap show={show}>
            <div className='autorization' onClick={(e) => stopPropagation(e)}>
                <div className='autorization__title'>Войти</div>
                <form className="autorization-form">
                    <input type="text" name="login" className="autorization-form__input focus-outline-none" placeholder="логин"/>
                    <input type="password" name="login" className="autorization-form__input focus-outline-none" placeholder="пароль"/>
                    <button className="autorization-form__button focus-outline-none">
                        Войти
                    </button>
                </form>
            </div>
        </BackgroundPopap>
    );
};

export default Autorization;
