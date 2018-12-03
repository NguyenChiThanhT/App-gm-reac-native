import * as React from 'react';
import { connect } from 'react-redux';

import {fetchUser} from '../actions';
import data from '../data';
import ProfileDetail from './View';

export interface Props {
	navigation: any;
	user: Object;
	fetchUser: Function;
}
export interface State {}

class ProfileDetailContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchUser(data);
	}
	render() {
		return <ProfileDetail navigation={this.props.navigation} user={this.props.user}/>;
	}
}

const mapStateToProps = state => ({
	user: state.profileReducer.user,
});

function bindAction(dispatch) {
	return {
		fetchUser: url => dispatch(fetchUser(url)),
	};
}

export default connect(mapStateToProps, bindAction)(ProfileDetailContainer);
