import * as React from 'react';
import Post from '../../stories/screens/Post';
export interface Props {
	navigation: any;
}
export interface State {}
export default class PostContainer extends React.Component<Props, State> {
	render() {
		return <Post navigation={this.props.navigation} />;
	}
}
