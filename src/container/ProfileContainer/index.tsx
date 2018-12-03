// Library Support
import * as React from 'react';
import { connect } from 'react-redux';

// Profile Main Component
import Profile from './View';
import { getUserData } from './actions';

export interface Props {
	navigation: any;
	getUserData: Function;
	user: Object;
	currentState: Object;
}
export interface State {}

class ProfileContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.getUserData();
	}
	render() {
		return <Profile navigation={this.props.navigation} user={this.props.user} />;
	}
}

const mapStateToProps = state => ({
	user: state.profileReducer.user,
	currentState: state,
});

function bindAction(dispatch) {
	return {
		getUserData: () => dispatch(getUserData()),
	};
}

export default connect(mapStateToProps, bindAction)(ProfileContainer);
