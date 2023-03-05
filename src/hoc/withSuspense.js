import React from 'react';
import { Suspense } from '@types/react';
import Spinner from '../components/common/Spinner/Spinner';

export const withSuspense = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<Spinner/>}>
                <Component {...props} />
            </Suspense>
        )
    }
}
