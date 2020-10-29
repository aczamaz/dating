import React from 'react';

import './search-panel.css';

const SearchPanel = ()=>{
    return (
        <form className="search-panel">
            <label className="search-panel__label" htmlFor="name">имя:</label>
            <input type="text" className="search-panel__name-input search-panel__input" name="name"/>
            <label className="search-panel__label search-panel__label_inner" htmlFor="age-from">от:</label>
            <input type="text" className="search-panel__age-input search-panel__input" name="age-from" />
            <label className="search-panel__label search-panel__label_inner" htmlFor="age-to">до:</label>
            <input type="text" className="search-panel__age-input search-panel__input" name="age-to" />
            <label className="search-panel__label search-panel__label_inner" htmlFor="sex">пол:</label>
            <select name="" id="" className="search-panel__sex-select search-panel__input">
                <option value="none">
                    выберите пол
                </option>
                <option value="male">
                    мужской
                </option>
                <option value="female">
                    женский
                </option>
            </select>
        </form>
    )
}
export default SearchPanel;
