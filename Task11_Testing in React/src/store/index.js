import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

const StoreProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default StoreProvider;
