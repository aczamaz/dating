import React from 'react';
import {AuthServiceConsumer} from '../services-context';

export const WithAuthServices = () => (Wrapped) =>
{
    return (props)=>{
        return(
            <AuthServiceConsumer>
                {
                    (AuthService)=>
                    {
                        return(
                            <Wrapped
                                {...props}
                                authService={AuthService}
                            />
                        )
                    }
                }
            </AuthServiceConsumer>
        )
    }
}
