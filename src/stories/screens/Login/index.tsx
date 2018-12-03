import React from 'react';
import { Image, View, Linking, Dimensions, TouchableOpacity } from 'react-native';

import TwitterButton from './shared/TwitterButton';
import FacebookButton from './shared/FacebookButton';
const { width } = Dimensions.get('window');

import styles from './styles';
import {P, Row} from '../../../components/common';
export interface Props {
	navigation: any,
	onLogin: Function
}

export interface State {
}

class Login extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<View style={styles.container}>
					{/* View top */}
					<View style={styles.containerViewTop}>
						<View style={styles.croppedFirst}>
							<Image style={styles.imageFirst} resizeMethod="resize"
									source={require('./../../../../assets/images/gr-image-1.jpg')}  />
						</View>

						<View style={styles.croppedSecond}>
							<Image style={styles.imageSecond} resizeMethod="resize"
									source={require('./../../../../assets/images/gr-image-2.jpg')}  />
						</View>

						<View style={styles.croppedThird}>
							<Image
									style={styles.imageThird} resizeMethod="resize"
									source={require('./../../../../assets/images/gr-image-3.jpg')}  />
						</View>

						<View style={styles.croppedFourth}>
							<Image style={styles.imageFourth} resizeMethod="resize"
									source={require('./../../../../assets/images/gr-image-4.jpg')}  />
						</View>

						<View style={styles.weboo}>
							<Image resizeMethod="resize" resizeMode="contain" style={{height: 40 , width: 147}} source={require('./../../../../assets/images/icon.png')}/>
							<P style={[styles.textOfBtnDefault, styles.textBelowLogo]}>自分でつくる。ウィーブー</P>
						</View>
					</View>
					{/* End view top */}

					{/* View Button */}
					<View style={{flex: 0.48, justifyContent: 'center', alignItems: 'center'}}>
						<TouchableOpacity style={styles.button}>
							<P style={styles.textOfBtnDefault}>利用開始</P>
						</TouchableOpacity>
						<View style={{height: 4}} />
						<TouchableOpacity onPress={() => this.props.onLogin()} style={styles.button}>
							<P style={styles.textOfBtnDefault}>ウィーブーログイン</P>
						</TouchableOpacity>
						<View style={{height: 4}} />
						<TwitterButton />
						<FacebookButton />
						<View style={{flexDirection: 'column', width: width * 0.9, paddingTop: 5}}>
							<P style={{fontSize: 13, fontWeight: '500'}}>{'利用を開始することで'}</P>
							<Row style={{paddingTop: 6}}>
								<TouchableOpacity style={{paddingRight: 5}} onPress={() => Linking.openURL('https://weboo.link/legal/?sp=1')}>
									<P style={{fontSize: 13, textDecorationLine: 'underline'}} bold>{'利用規約'}</P>
								</TouchableOpacity>
								<TouchableOpacity style={{paddingRight: 5}} onPress={() => Linking.openURL('https://weboo.link/privacy/?sp=1')}>
									<P style={{textDecorationLine: 'underline', fontSize: 13}} bold>{'プライバシーポリシー'}</P>
								</TouchableOpacity>
								<P style={{fontSize: 13}}>{'に同意するものとします。'}</P>
							</Row>
						</View>
					</View>
					{/* End view button*/}
				</View>
		);
	}
}

export default Login;
