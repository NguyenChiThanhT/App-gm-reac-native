import * as React from 'react';
import ContentPost from '../../stories/screens/Content';
export interface Props {
	navigation: any;
}
export interface State {}
export default class ContentContainer extends React.Component<Props, State> {
	render() {
		return <ContentPost navigation={this.props.navigation} />;
	}
}
