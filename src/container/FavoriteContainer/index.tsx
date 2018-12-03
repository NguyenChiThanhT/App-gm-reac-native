import * as React from 'react';
import Favorite from '../../stories/screens/Favorite';
export interface Props {
	navigation: any;
}
export interface State {}
export default class FavoriteContainer extends React.Component<Props, State> {
	render() {
		return <Favorite navigation={this.props.navigation} />;
	}
}
