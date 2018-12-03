import * as types from '../../contants/actionTypes';

const initialState = {
    token: '',
    userInfo: {},
	isLoading: true,
};

export default function(state = initialState, action) {
	if (action.type === types.FETCH_DATA) {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	if (action.type === types.FETCH_DATA_SUCCESS) {
		return {
            ...state,
            token: action.token,
			isLoading: action.isLoading,
		};
    }
    if (action.type === types.FETCH_DATA_ERROR) {
		return {
            ...state,
			isLoading: action.isLoading,
		};
	}
	return state;
}
