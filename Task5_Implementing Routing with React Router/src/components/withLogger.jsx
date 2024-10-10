import React from 'react';

const withLogger = WrappedComponent => {
    // Students to implement HOC logic to log click events
    return props => (
        <div>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withLogger;
