import React, { Component } from 'react';
import {
	Text,
	View,
	NativeModules,
	TouchableOpacity,
} from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

const { RNTwitterSignIn } = NativeModules;
import styles from '../styles';


export default class FacebookButton extends Component {
	state = {
		isLoggedIn: false,
	};

	_login() {
		LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
			function(result) {
				console.log('result', result);
				if (result.isCancelled) {
					console.log('Login cancelled');
				} else {
					AccessToken.getCurrentAccessToken().then(
						(data) => {
							console.log('data', data);
							const responseInfoCallback = (error, results) => {
								if (error) {
									console.log(error);
									console.log('Error fetching data: ' + error.toString());
								} else {
									console.log('results' + JSON.stringify(results));
								}
							};
							const infoRequest = new GraphRequest('/me',
							{
								accessToken: data.accessToken,
								parameters: {
								fields: {
									string: 'email,name,first_name,middle_name,last_name',
								},
								},
							}, responseInfoCallback);
							// Start the graph request.
							new GraphRequestManager().addRequest(infoRequest).start();
						},
					);
					console.log('Login success with permissions: '
					+ result.grantedPermissions.toString());
				}
			}, (error) => {
				console.log('Login fail with error: ' + error);
			},
		);
	}

	handleLogout = () => {
		RNTwitterSignIn.logOut();
		this.setState({
			isLoggedIn: false,
		});
	}

	render() {
		const { isLoggedIn } = this.state;
		return (
			<View style={{alignItems: 'center', justifyContent: 'center' }}>
				{isLoggedIn ? (
					<TouchableOpacity onPress={this.handleLogout}>
						<Text>Log out</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						onPress={this._login}
						style={[styles.button, {
							flexDirection: 'row',
							marginBottom: 4,
							backgroundColor: '#4267B2'
						}]}
					>
						<FIcon
							style={{
								color: '#FFF',
								marginRight: 10,
							}}
							size={22}
							name='facebook-f'
						/>
						<Text style={{ color: '#FFF' }}>Facebookでログイン</Text>
					</TouchableOpacity>
				)}
			</View>
		);
	}
}