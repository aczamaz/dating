import React from 'react';
import './search-panel.css';

import { connect } from 'react-redux';
import { compose } from '../../../utils';
import { WithSearchServices } from '../../hoc/with-services';
import { searchUsers } from '../../../actions';
import SmartForm from '../../hoc/smart-form';

let SearchPanel = ({ token, onSend, searchUsers, setValue})=>{
    return (
        <form className="search-panel" onSubmit={(e)=>onSend(e, searchUsers, { token: token})}>
            <label className="search-panel__label" htmlFor="name">имя:</label>
            <input
                type="text"
                className="search-panel__name-input search-panel__input"
                name="name"
                onChange={setValue}
            />
            <label className="search-panel__label search-panel__label_inner" htmlFor="age-from">от:</label>
            <input
                type="text"
                className="search-panel__age-input search-panel__input"
                name="age-from"
                onChange={setValue}
            />
            <label className="search-panel__label search-panel__label_inner" htmlFor="age-to">до:</label>
            <input
                type="text"
                className="search-panel__age-input search-panel__input"
                name="age-to"
                onChange={setValue}
            />
            <label className="search-panel__label search-panel__label_inner" htmlFor="sex">пол:</label>
            <select
                name="gender"
                className="search-panel__sex-select search-panel__input"
                onChange={setValue}
            >
                <option value="">
                    выберите пол
                </option>
                <option value="m">
                    мужской
                </option>
                <option value="f">
                    женский
                </option>
            </select>
            <button className="search-panel__buttton">
                поиск
            </button>
        </form>
    )
}

SearchPanel = SmartForm(SearchPanel);

const mapStateToProps = ({profile:{token}})=>
{
    return{
        token: token
    }
}

const mapDispatchToProps = (dispatch,ownProps) =>
{
    return{
        searchUsers:(data)=>searchUsers(data,dispatch,ownProps)
    }
}
export default compose(
    WithSearchServices(),
    connect(mapStateToProps, mapDispatchToProps)
)(SearchPanel);
