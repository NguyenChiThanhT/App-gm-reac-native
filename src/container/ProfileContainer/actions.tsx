import axios from 'axios';
export function userLoad( userData ){
	return {
		type: 'USER_LOADED',
		user: userData,
	};
}

export function userLoadFinish(){
	return {
		type: 'USER_LOAD_FINISH',
	};
}

export function fetchUser(userData) {
	return dispatch => {
		dispatch( userLoad(userData) );
		dispatch( userLoadFinish() );
	};
}

export function userRequestSend( isLoading ){
	return {
		type: 'USER_PENDING',
		isLoading: isLoading,
	};
}

export function userRequestSuccess( userData ){
	return {
		type: 'USER_LOADED',
		isLoading: false,
		user: userData,
	};
}

export function userRequestRejected( errorMessage ){
	return {
		type: 'USER_LOAD_FAILED',
		isLoading: false,
		user: {},
		errorMessage: errorMessage,
	};
}

export function getUserData( apiRequest ){
	return dispatch => {
		dispatch( userRequestSend(true) );
		axios.get('http://35.187.227.22/profile',
			{
				headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjM0NDAwLCJleHAiOjE1NDMwNDMxODJ9.7lW5NKk3ntTSYh75oraoacIXmuwmd5lrhsNjW9NTpyU'},
			}).then(res => {
			//Set the results to the people array.
			console.log(res.data.data.member.data);
			console.log(res.data.data.member.data.attributes.member_name);
			dispatch( userRequestSuccess( {
				ID: 10,
				name: res.data.data.member.data.attributes.member_name,
				facebookURL: 'http://facebook.com/nhat.tran.94',
				instagramURL: 'http://instagram.com/nhat.tran.94',
				twitterUR: 'http://instagram.com/nhat.tran.94',
				avatar: require('../../../assets/images/Profile/avatar1.png'),
				statusText: ['ここにコメントが入ります。', '自己紹介分にはキャリア絵文字が使えるといいな。'],
				followers: [],
				followed: [],
				recentPost: [],
			} ));
			dispatch( userRequestSend(false) );

		}).catch(err => { console.log(err); } );
	};
}
