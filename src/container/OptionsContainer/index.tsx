import * as React from 'react';
import Options from '../../stories/screens/Options';
export interface Props {
	navigation: any;
}
export interface State {}
export default class OptionsContainer extends React.Component<Props, State> {
	render() {
		return <Options navigation={this.props.navigation} />;
	}
}
