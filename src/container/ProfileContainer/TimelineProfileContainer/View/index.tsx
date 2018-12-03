import * as React from 'react';
import { View, Container, Content, Footer} from 'native-base';

import styles from './styles';
import {FooterAction} from '../../../../components/common';

import {ImageBackground} from 'react-native';

import {ProfileDetail, ProfileHeadActions, ProfileTabs} from '../../../../components/layout';
export interface Props {
	navigation: any;
	user: Object;
}
export interface State {}
class TimelineProfile extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = { currentTab: 0 };
	}
	setTabIndex(value) {
		this.setState({currentTab: value});
	}
	render() {
		return (
			<Container>
				<Content>
					<ImageBackground source={ require ('../../../../../assets/images/Profile/bg.png') }
									 style={ {...styles.fullScreenBackgroundImage, marginBottom: -48} }
									 blurRadius={ 7 }>
						<View style={[styles.halfscreenOverlay, styles.blurOverlay]}>
							{ /* Profile Head Controller */ }
							<ProfileHeadActions/>
							{ /* Profile Detail Element */ }
							<ProfileDetail name={ this.props.user.name }
										   ID={ this.props.user.ID }
										   facebookURL={ this.props.user.facebookURL }
										   instagramURL={ this.props.user.instagramURL }
										   twitterURL={ this.props.user.twitterURL }
										   avatar={ this.props.user.avatar }
										   showPost={ true }/>
						</View>
					</ImageBackground>
					<ProfileTabs onTabChange = {(tabIndex) => { this.setTabIndex(tabIndex)} }
								 currentTab={ this.state.currentTab }
								 recentPost={ this.props.user.recentPost }
								 followers={ this.props.user.followers }
								 followed={ this.props.user.followed }/>
				</Content>

				<Footer>
					<FooterAction actionText='ホーム'
								  iconType={'line'}
								  iconName={'home'}
								  onPress={() => this.props.navigation.navigate('Home')}
								  active={ false } />
					<FooterAction />
					<FooterAction actionText='投稿'
								  iconType={ 'line' }
								  iconName={ 'pencil' }
								  onPress={() => this.props.navigation.navigate('Post')}
								  active={ false }/>
					<FooterAction actionText='見つける'
								  iconType={'line'}
								  iconName={'magnifier'}
								  onPress={() => this.props.navigation.navigate('Locate')}
								  active={ false }/>
					<FooterAction actionText='お気に入り'
								  iconType={ 'line' }
								  iconName={ 'heart' }
								  onPress={() => this.props.navigation.navigate('Favorite')}
								  active={ false }/>
				</Footer>
			</Container>
		);
	}
}

export default TimelineProfile;
