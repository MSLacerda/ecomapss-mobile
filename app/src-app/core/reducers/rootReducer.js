import { combineReducers } from 'redux';
import historias from './historias.reducer';

const rootReducer = combineReducers({
	historias
});

export default rootReducer;
