import * as React from 'react';
import UserRegistry from '../../stories/screens/UserRegistry';
export interface Props {
	navigation: any;
}
export interface State {}
export default class BlankPageContainer extends React.Component<Props, State> {
	render() {
		return <UserRegistry navigation={this.props.navigation} />;
	}
}
