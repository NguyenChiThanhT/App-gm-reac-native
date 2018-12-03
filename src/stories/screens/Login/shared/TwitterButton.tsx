import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	NativeModules,
	TouchableOpacity,
	Dimensions,
	Platform,
} from 'react-native';
import { Button } from 'native-base';
import FIcon from 'react-native-vector-icons/FontAwesome';

const { RNTwitterSignIn } = NativeModules;
import styles from '../styles';

const Constants = {
	// Dev Parse keys
	TWITTER_COMSUMER_KEY: 'Mp0taY9OcO8UhvacuTPU73Xbp',
	TWITTER_CONSUMER_SECRET: 'HWAhDOOUFYsuL4H4w445eEta2lzpxRBN07zxuFZCo5UwbD9RqG',
};

export default class TwitterButton extends Component {
	state = {
		isLoggedIn: false,
	};

	_twitterSignIn = () => {
		RNTwitterSignIn.init(
			Constants.TWITTER_COMSUMER_KEY,
			Constants.TWITTER_CONSUMER_SECRET,
		);
		RNTwitterSignIn.logIn()
			.then(loginData => {
				console.log(loginData);
				const { authToken, authTokenSecret } = loginData;
				if (authToken && authTokenSecret) {
					this.setState({
						isLoggedIn: true,
					});
				}
			})
			.catch(error => {
				console.log(error);
			});
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
						onPress={this._twitterSignIn}
						style={[styles.button, {
							flexDirection: 'row',
							marginBottom: 3,
							backgroundColor: '#1DA1F2',
						}]}
					>
						<FIcon
							style={{
								color: '#FFF',
								marginRight: 10,
							}}
							size={22}
							name='twitter'
						/>
						<Text style={{ color: '#FFF' }}>Twitterでログイン</Text>
					</TouchableOpacity>
				)}
			</View>
		);
	}
}