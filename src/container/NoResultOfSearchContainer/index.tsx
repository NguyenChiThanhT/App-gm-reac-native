import * as React from 'react';
import NoResultOfSearch from '../../stories/screens/NoResultOfSearch';
export interface Props {
	navigation: any;
}
export interface State {}
export default class ResultOfSearchContainer extends React.Component<Props, State> {
	render() {
		return <NoResultOfSearch navigation={this.props.navigation} />;
	}
}
