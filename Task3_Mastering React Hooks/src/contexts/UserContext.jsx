import React, { createContext, useReducer } from 'react';

const UserContext = createContext();

const initialState = {};
const userReducer = (state, action) => {
    // Implement reducer logic
    return state;
};

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
