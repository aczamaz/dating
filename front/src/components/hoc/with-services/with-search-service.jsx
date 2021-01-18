import React from 'react';
import { SearchServiceConsumer } from '../services-context';

export const WithSearchServices = () => (Wrapped) => {
    return (props) => {
        return (
            <SearchServiceConsumer>
                {
                    (searchService) => {
                        return (
                            <Wrapped
                                {...props}
                                searchService={searchService}
                            />
                        )
                    }
                }
            </SearchServiceConsumer>
        )
    }
}
