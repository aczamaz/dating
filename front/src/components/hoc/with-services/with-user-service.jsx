import React from 'react';
import { UserServiceConsumer } from '../services-context';

export const WithUserServices = () => (Wrapped) => {
    return (props) => {
        return (
            <UserServiceConsumer>
                {
                    (UserService) => {
                        return (
                            <Wrapped
                                {...props}
                                userService={UserService}
                            />
                        )
                    }
                }
            </UserServiceConsumer>
        )
    }
}
