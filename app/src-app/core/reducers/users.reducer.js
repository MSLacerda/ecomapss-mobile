import * as types from '../constants/users.actionTypes';
import initialState from './initialState';

export default function (state = initialState.auth, action) {
	switch (action.type) {

		case types.LOGIN_USER_SUCCESS:
			return action.auth
		default:
			return state;
	}
}
