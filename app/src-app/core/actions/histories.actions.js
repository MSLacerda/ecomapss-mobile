import { HttpProvider, HttpProviderInterceptor } from '../../resource/HttpProvider';
import * as types from '../constants/histories.actionTypes';
import { API_URL, API_ACCESS_TOKEN } from '../constants/api';

let http = new HttpProvider();


// HISTORIES LIST
export function retrieveHistoriesListSuccess(res) {
	return {
		type: types.RETRIEVE_HISTORIES_LIST_SUCCESS,
		list: res.data
	};
}

export function retrieveHistoriesList(q, page) {
	return function (dispatch, getState) {
		return http.get(`${API_URL}/historias`, { q, page })
			.then(response => {
				dispatch(retrieveHistoriesListSuccess(response));
			})
			.catch(error => {
				console.log('Histories List', error); //eslint-disable-line
			})
	};
}
