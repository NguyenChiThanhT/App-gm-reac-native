import * as types from '../../contants/actionTypes';
import * as api from '../../contants/api';
import callApi from '../../contants/callApi';

//begin fetching
export function is_fetching() {
	return {
		type: types.FETCH_DATA,
		isLoading: true,
	};
}
//fetch success, return value from api 
export function fetch_Login_Success(token: String) {
	return {
		type: types.FETCH_DATA_SUCCESS,
        token,
        isLoading: false,
	};
}
//fetch error 
export function fetch_Error() {
	return {
		type: types.FETCH_DATA_ERROR,
		isLoading: false,
	};
} 
//function get api to login
export function login(login, password) {
	const headers={'Content-Type': 'application/json'};
	return dispatch => {
        dispatch(is_fetching());
        return callApi(`${api.AUTH_SIGNIN}`, 'POST', {login : login, password: password}, headers)
        .then(result => {
			//get user info when login success
			dispatch(getInfo(result.data.data.access_token))
			dispatch(fetch_Login_Success(result.data.data.access_token));
		})
        .catch(err => {
			console.log(err);
			dispatch(fetch_Error());
		});
	};
}

//{'Authorization': "bearer " + token}
//fetch user info
export function getInfo(token) {
	const headers = { Authorization: `Bearer ${token}` };
	return dispatch => {
        dispatch(is_fetching());
        return callApi(`${api.GET_PROFILE}`,'GET', null, headers)
        .then(result => {
			console.log('res', result)
			// dispatch(fetch_Success(result.data.data.access_token));
		})
        .catch(err => {
			console.log(err);
			dispatch(fetch_Error());
		});
	};
}
