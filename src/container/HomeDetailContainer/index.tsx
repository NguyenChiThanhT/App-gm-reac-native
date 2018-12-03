// Library Support
import * as React from 'react';
import { connect } from 'react-redux';

// Profile Main Component
import HomeDetail from './View';
import data from './data';
import { fetchPosts } from './actions';

export interface Props {
	navigation: any;
	fetchPosts: Function;
	user: Object;
}
export interface State {}

class HomeDetailContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchPosts(data);
	}
	render() {
		return (
			<HomeDetail navigation={this.props.navigation}
						featuredPostList={this.props.featuredPostList}
						subPostList1={this.props.subPostList1}
						subPostList2={this.props.subPostList2}
						rankedPostList={this.props.rankedPostList}
			/>
		);
	}
}

const mapStateToProps = state => ({
	featuredPostList : state.homeDetailReducer.featuredPostList,
	subPostList1: state.homeDetailReducer.subPostList1,
	subPostList2: state.homeDetailReducer.subPostList2,
	rankedPostList: state.homeDetailReducer.rankedPostList,
});

function bindAction(dispatch) {
	return {
		fetchPosts: url => dispatch(fetchPosts(url)),
	};
}

export default connect(mapStateToProps, bindAction)(HomeDetailContainer);
