import * as React from 'react';
import NewsDetail from '../../stories/screens/NewsDetails';
export interface Props {
	navigation: any;
}
export interface State {}
export default class NewsDetailContainer extends React.Component<Props, State> {
	render() {
		return <NewsDetail navigation={this.props.navigation} />;
	}
}