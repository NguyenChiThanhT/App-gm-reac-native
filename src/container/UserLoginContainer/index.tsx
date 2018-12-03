import * as React from 'react';
import UserLogin from '../../stories/screens/UserLogin';
export interface Props {
	navigation: any;
}
export interface State {}
export default class BlankPageContainer extends React.Component<Props, State> {
	render() {
		return <UserLogin navigation={this.props.navigation} />;
	}
}
