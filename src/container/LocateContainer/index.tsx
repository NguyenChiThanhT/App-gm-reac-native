import * as React from 'react';
import Locate from '../../stories/screens/Locate';
export interface Props {
	navigation: any;
}
export interface State {}
export default class LocateContainer extends React.Component<Props, State> {
	render() {
		return <Locate navigation={this.props.navigation} />;
	}
}
