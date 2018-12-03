import * as React from 'react';
import NewPost from '../../stories/screens/NewPost';
export interface Props {
	navigation: any;
}
export interface State {}
export default class NewPostContainer extends React.Component<Props, State> {
	render() {
		return <NewPost navigation={this.props.navigation} />;
	}
}
