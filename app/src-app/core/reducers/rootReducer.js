import { combineReducers } from 'redux';
import histories from './histories.reducer';
import users from './users.reducer';

const rootReducer = combineReducers({
	histories,
	users
});

export default rootReducer;
