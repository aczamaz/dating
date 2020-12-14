import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './header.css';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { toggleRegistrationPopap, toggleAutorizationPopap, logout, getProfileInfoByToken } from '../../../actions';
import compose from '../../../utils/compose';
import { WithUserServices } from '../../hoc/with-services';
class Header extends Component
{
    componentDidMount()
    {
        const token = Cookies.get('userToken');
        const { getProfileInfoByToken } = this.props;
        if (token)
            getProfileInfoByToken(token);
    }
    render()
    {
        const { toggleAutorization, toggleRegistration, logout } = this.props;
        const token = Cookies.get('userToken');
        let link = token?"/profile/":"/";
        let bunttons;
        if (!token) {
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
        else {
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
                <Link className="header__logo" to={link}> Dating site </Link>
                {bunttons}
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return{
        toggleAutorization: () => dispatch(toggleAutorizationPopap()),
        toggleRegistration: () => dispatch(toggleRegistrationPopap()),
        logout: () => dispatch(logout(ownProps)),
        getProfileInfoByToken: (token) => getProfileInfoByToken(token,dispatch, ownProps)
    }
}
const mapStateToProps = ({profile:{token}}) =>
{
    return {
        token:token
    }
}

export default compose(
    WithUserServices(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Header)
