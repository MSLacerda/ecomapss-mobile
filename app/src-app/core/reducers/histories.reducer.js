import * as types from '../constants/histories.actionTypes';
import initialState from './initialState';

export default function histories(state = initialState.histories, action) {
	switch (action.type) {

		case types.RETRIEVE_HISTORIES_LIST_SUCCESS:
			return {
				...state,
				list: action.list
			}; 

		default:
			return state;
	}
}
