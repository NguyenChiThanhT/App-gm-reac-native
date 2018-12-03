import * as React from 'react';
import SplashScreen from '../../stories/screens/SplashScreen';
export interface Props {
	navigation: any;
}
export interface State {}
export default class SplashScreenContainer extends React.Component<Props, State> {
	render() {
		return <SplashScreen navigation={this.props.navigation} />;
	}
}
