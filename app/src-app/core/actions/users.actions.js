import { HttpProvider, HttpProviderInterceptor } from '../../resource/HttpProvider';
import * as types from '../constants/users.actionTypes';
import { API_URL, API_ACCESS_TOKEN } from '../constants/api';

let http = new HttpProvider();


// USER AUTH
export function loginUserSuccess(res) {
	return {
		type: types.LOGIN_USER_SUCCESS,
		auth: res.data
	};
}

export function loginUser(username, password) {
	console.warn('username, password', username, password);
	return function (dispatch) {
		return http.post(`${API_URL}/auth`, { "access_token": API_ACCESS_TOKEN }, {}, { username, password })
			.then(response => {
				console.warn('response', response.data);
				dispatch(loginUserSuccess(res));
			})
			.catch(error => {
				console.warn(error);
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