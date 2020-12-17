import React from 'react';
import {DialogsServiceConsumer} from '../services-context';

export const WithDialogsService = () => (Wrapped) =>
{
    return (props)=>{
        return(
            <DialogsServiceConsumer>
                {
                    (DialogsService)=>
                    {
                        return(
                            <Wrapped
                                {...props}
                                dialogsService={DialogsService}
                            />
                        )
                    }
                }
            </DialogsServiceConsumer>
        )
    }
}
