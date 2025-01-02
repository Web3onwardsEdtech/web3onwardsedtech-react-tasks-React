import { applyMiddleware } from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../reducers';

// Create the Redux store with middleware
const store = configureStore({
    reducer: rootReducer,
});
const StoreProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default StoreProvider;
