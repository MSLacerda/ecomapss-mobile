/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import { exemple } from '../middlewares/exemple.middleware'

let middleware = [thunk, exemple];

if (__DEV__) {
	middleware = [...middleware, logger]
} else {
	middleware = [...middleware, logger]
}

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware, exemple)
	)
}
