import { Suspense as ReactSuspense } from 'react';

const Suspense = ({ children }) => {
    return (
        <ReactSuspense fallback={<div>Loading ...</div>}>
            {children}
        </ReactSuspense>
    );
};

export default Suspense;
