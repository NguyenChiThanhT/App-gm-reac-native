
import * as React from "react";
import { connect } from "react-redux";
import Login from "../../stories/screens/Login";
import { login } from "./actions";
export interface Props {
	navigation: any;
	login: Function;
	data: Object;
}
export interface State {}
class LoginContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.login("kyo.shenshie@gmail.com","1234567890")
	}
	login() {
		this.props.navigation.navigate("HomeScreen");
	}
	render() {
		return <Login navigation={this.props.navigation} onLogin={() => this.login()} />;
	}
}

function bindAction(dispatch) {
	return {
		login: (username, password) => dispatch(login(username, password))
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(LoginContainer);

