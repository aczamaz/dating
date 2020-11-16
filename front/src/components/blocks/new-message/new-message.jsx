import React from 'react';

import BackgroundPopap from '../../containers/background-popap';
import FormButton from '../../items/form-button';
import { stopPropagation } from '../../../utils';
import './new-message.css';
const NewMessage = ({show}) =>
{
    return(
        <BackgroundPopap show={show}>
            <div className='new-message' onClick={(e)=>stopPropagation(e)}>
                <textarea name="" id="" className='new-message__text focus-outline-none'>
                </textarea>
                <div className="new-message__inner">
                    <FormButton name="Отправить" />
                </div>
            </div>
        </BackgroundPopap>
    );
};

export default NewMessage;
