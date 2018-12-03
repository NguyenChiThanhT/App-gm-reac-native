import React from 'react';
import { Text, Tabs, Tab, TabHeading, View } from 'native-base';

import { FollowList, MiniPostList } from '../';

import { styles } from './styles';

export interface Props {
	navigation: any;
	followers: Array<Object>;
	followed: Array<Object>;
	recentPost: Array<Object>;
}
export interface State {}
class ProfileTabs  extends React.Component<Props, State>{
	constructor(props) {
		super(props);
		this.state = {currentTab: 0};
		console.log('ProfileTabs', this.props)
	}

	render() {
		const { TabHeading, TabHeadingText, tabStyle, TabsContainer } = styles;
		let TabHeadingBuild = (TabHeadingName) => {
			console.log(Tabs)
			return (
				<TabHeading style={ TabHeading }>
					<Text style={ TabHeadingText }>
						{ TabHeadingName }
					</Text>
				</TabHeading>
			);
		}

		return (
			<Tabs tabBarUnderlineStyle={ {backgroundColor: '#AF8589'} }
				  style={TabsContainer}
				  onChangeTab={
					  (e) => {
					  	this.props.onTabChange(e.i);
					  }
				  }
			>
				<Tab heading={TabHeadingBuild('記事')}>
					<View style={ { display: this.props.currentTab === 0 ? 'flex' : 'none'  }}>
						<MiniPostList list={this.props.recentPost}/>
					</View>
				</Tab>
				<Tab heading={TabHeadingBuild('フォロー')}>
					<View style={ { display: this.props.currentTab === 1 ? 'flex' : 'none' }}>
						<FollowList list={this.props.followers}/>
					</View>
				</Tab>
				<Tab heading={TabHeadingBuild('フォロワー')}>
					<View style={ { display: this.props.currentTab === 2 ? 'flex' : 'none' }}>
						<FollowList list={this.props.followed}/>
					</View>
				</Tab>
			</Tabs>
		);
	}

};

export { ProfileTabs };

/* USAGE:
* <ProfileHeadActions />
*/
