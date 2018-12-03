import * as React from 'react';
import AddPicture from '../../../stories/screens/NewPost/AddPicture';
export interface Props {
	navigation: any;
}
export interface State {}
export default class AddPictureContainer extends React.Component<Props, State> {
	render() {
		return <AddPicture navigation={this.props.navigation} />;
	}
}
