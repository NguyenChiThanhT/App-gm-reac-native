import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {Root, Footer} from 'native-base';
import Login from './container/LoginContainer';
import Home from './container/HomeContainer';
import SplashScreen from './container/SplashScreenContainer';

import Locate from './container/LocateContainer';
import Favorite from './container/FavoriteContainer';

import NewPost from './container/NewPostContainer';
import AddPost from './container/NewPostContainer/AddPostContainer';
import AddPicture from './container/NewPostContainer/AddPictureContainer';
import Profile from './container/ProfileContainer';
import ProfileDetail from './container/ProfileContainer/ProfileDetailContainer';
import UpdateProfile from './container/ProfileContainer/UpdateProfileContainer';
import TimelineProfile from './container/ProfileContainer/TimelineProfileContainer';

import Content from './container/ContentContainer';
import NewsDetail from './container/NewsDetailContainer';
import Searching from './container/SearchingContainer';
import ResultOfSearch from './container/ResultOfSearchContainer';

import NoResultOfSearch from './container/NoResultOfSearchContainer';
import HomeDetail from './container/HomeDetailContainer';
import UserRegistry from './container/UserRegistryContainer';
import UserLogin from './container/UserLoginContainer';

import {FooterAction} from './components/common';


const TabBarBottom = TabNavigator({
	Home: {screen: Home},
	Post: {screen: NewPost},
	Locate: {screen: Locate},
	Favorite: {screen: Favorite},
	Searching: {screen: Searching},
	ResultOfSearch: {screen: ResultOfSearch},
	NoResultOfSearch: {screen: NoResultOfSearch},
	HomeDetail: {screen: HomeDetail}
}, {
	tabBarPosition: 'bottom',
	swipeEnabled: false,
	tabBarComponent: props => {
		const index = props.navigationState.index;
		return (
			<Footer>
				<FooterAction actionText='ホーム'
											iconType={'line'}
											iconName={'home'}
											onPress={() => props.navigation.navigate('Home')}
											active={index == 0}/>
				<FooterAction actionText='投稿'
											iconType={'line'}
											iconName={'pencil'}
											onPress={() => props.navigation.navigate('Post')}
											active={index == 1}/>
				<FooterAction actionText='見つける'
											iconType={'line'}
											iconName={'magnifier'}
											onPress={() => props.navigation.navigate('Locate')}
											active={index == 2}/>
				<FooterAction actionText='お気に入り'
											iconType={'line'}
											iconName={'heart'}
											onPress={() => props.navigation.navigate('Favorite')}
											active={index == 3}/>
			</Footer>
		);
	}
});

const App = StackNavigator(
	{
		/* Tuan Screen */
		SplashScreen: {screen: SplashScreen},
		Login: {screen: Login},
		HomeScreen: {screen: TabBarBottom},
		Content: {screen: Content},
		UpdateProfile: {screen: UpdateProfile},
		ProfileDetail: {screen: ProfileDetail},
		/* TODO on Tuan's set of screen: Check the UpdateProfile ProfileDetail screen to make common components */
		/* Nihato Screen */
		NewPost: {screen: NewPost},
		AddPost: {screen: AddPost},
		AddPicture: {screen: AddPicture},
		Profile: {screen: Profile},
		TimelineProfile: {screen: TimelineProfile},
		/* Thai Anh Screen */
		NewsDetail: { screen: NewsDetail },
		Searching: { screen: TabBarBottom },
		ResultOfSearch: { screen: TabBarBottom },
		NoResultOfSearch: { screen: TabBarBottom },
		HomeDetail: { screen: TabBarBottom },
		UserRegistry: { screen: UserRegistry },
		UserLogin: { screen: UserLogin },
	},
	{
		initialRouteName: 'Profile',
		headerMode: 'none'
	}
);

export default () => (
	<Root>
		<App/>
	</Root>
);
