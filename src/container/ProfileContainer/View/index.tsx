import * as React from 'react';
import { View, Container, Content, Footer } from 'native-base';

import styles from './styles';
import { FooterAction } from '../../../components/common/Footer/FooterAction';

import { ImageBackground } from 'react-native';

import { ProfileDetail, ProfileHeadActions } from '../../../components/layout';
export interface Props {
	navigation: any;
}
export interface State {}
class Profile extends React.Component<Props, State> {
	componentDidMount() {
		console.log('Profile Component Props', this.props);
	}
	render() {
		return (
			<Container>
				<Content>
					<ImageBackground source={ require ('../../../../assets/images/Profile/bg.png') }
									 style={ styles.fullScreenBackgroundImage }>
						<View style={styles.fullscreenOverlay}>
							{ /* Profile Head Controller */ }
							<ProfileHeadActions/>
							{ /* Profile Detail Element */ }
							<ProfileDetail name={this.props.user.name}
										   ID={this.props.user.ID}
										   facebookURL={this.props.user.facebookURL}
										   instagramURL={this.props.user.instagramURL}
										   twitterURL={this.props.user.twitterURL}
										   avatar={this.props.user.avatar}
										   statusText={this.props.user.statusText}/>
						</View>
					</ImageBackground>
					<View></View>
				</Content>
				<Footer>
					<FooterAction actionText='ホーム'
								  getButtonImage={require('../../../../assets/images/NewPost/images/icons/home-footer.png')} />
					<FooterAction />
					<FooterAction actionText='投稿'
								  getButtonImage={require('../../../../assets/images/NewPost/images/icons/pen-footer.png')} />
					<FooterAction actionText='見つける'
								  getButtonImage={require('../../../../assets/images/NewPost/images/icons/glass-footer.png')} />
					<FooterAction actionText='お気に入り'
								  getButtonImage={require('../../../../assets/images/NewPost/images/icons/heart-footer.png')} />
				</Footer>
			</Container>
		);
	}
}

export default Profile;
