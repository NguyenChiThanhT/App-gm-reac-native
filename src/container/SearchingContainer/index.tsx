import * as React from "react";
import Searching from "../../stories/screens/Searching";
export interface Props {
	navigation: any;
}
export interface State {}
export default class BlankPageContainer extends React.Component<Props, State> {
	render() {
		return <Searching navigation={this.props.navigation} />;
	}
}
