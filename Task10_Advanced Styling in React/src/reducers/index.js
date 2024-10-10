import { combineReducers } from 'redux';
import profileReducer from './profileReducer';

// Combine reducers into a root reducer
const rootReducer = combineReducers({
    profiles: profileReducer
});

export default rootReducer;
