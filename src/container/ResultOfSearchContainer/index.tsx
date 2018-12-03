import * as React from 'react';
import ResultOfSearch from '../../stories/screens/ResultOfSearch';
export interface Props {
	navigation: any;
}
export interface State {}
export default class ResultOfSearchContainer extends React.Component<Props, State> {
	render() {
		return <ResultOfSearch navigation={this.props.navigation} />;
	}
}
