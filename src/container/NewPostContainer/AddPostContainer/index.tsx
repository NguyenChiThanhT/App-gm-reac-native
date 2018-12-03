import * as React from 'react';
import AddPost from '../../../stories/screens/NewPost/AddPost';
export interface Props {
	navigation: any;
}
export interface State {}
export default class AddPostContainer extends React.Component<Props, State> {
	render() {
		return <AddPost navigation={this.props.navigation} />;
	}
}
