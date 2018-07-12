import { HttpProvider } from '../../resource/HttpProvider';
import * as types from '../constants/users.actionTypes';
import { API_URL, API_ACCESS_TOKEN } from '../constants/api';

let http = new HttpProvider();


// USER AUTH
export function loginUserSuccess(res) {
	return {
		type: types.LOGIN_USER_SUCCESS,
		auth: res
	};
}

export function loginUser(username, password) {
	return function (dispatch) {
		return http.post(`${API_URL}/auth`, { "access_token": API_ACCESS_TOKEN }, {}, { username, password })
			.then(response => {
				dispatch(loginUserSuccess(response.data));
			})
			.catch(error => {
				console.log('error',error);
			})
	};
}