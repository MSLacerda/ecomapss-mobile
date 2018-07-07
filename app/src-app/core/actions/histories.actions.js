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
	return function (dispatch) {
		return http.get(`${API_URL}/historias`, { q, page })
			.then(response => {
				dispatch(retrieveHistoriesListSuccess(response));
			})
			.catch(error => {
				console.warn('Histories List', error); //eslint-disable-line
			})
	};
}





//HTTP INTERCEPTOR USE EXAMPLE
HttpProviderInterceptor.configBeforeRequest((config) => {
	config['headers']['authorization'] = 'IGOR';
	console.warn('Interceptei', config);
});

HttpProviderInterceptor.configOnRequestError((error) => {
	switch (error.status) {
		case 401:
			console.warn('sem permissao');
			break;
		case 403:
			console.warn('sem permissao, va para o login');
			break;
		case 404:
			console.warn('nao encontrato');
			break
	}
});

//Use the next line to allow network debug
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;