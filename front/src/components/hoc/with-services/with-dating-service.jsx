import React from 'react';
import { DatingServiceConsumer } from '../services-context';

export const WithDatingServices = () => (Wrapped) =>
{
    return (props)=>{
        return(
            <DatingServiceConsumer>
                {
                    (DatingService)=>
                    {
                        return(
                            <Wrapped
                                {...props}
                                datingService={DatingService}
                            />
                        )
                    }
                }
            </DatingServiceConsumer>
        )
    }
}
