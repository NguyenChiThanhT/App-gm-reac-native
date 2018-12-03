import * as React from 'react';
import { Container, Header, Content, View, Text } from 'native-base';

import styles from './styles';

export interface Props {
	navigation: any;
	list: any;
}

export interface State {
}

class Options extends React.Component<Props, State> {
	renderOption() {
		let optionList: any = [];
		if ( this.props.navigation.state.params.listOfOption !== undefined ) {
			optionList = this.props.navigation.state.params.listOfOption;
		}
		console.log(this.props.navigation);
		return optionList.map( value => {
			return (
				<View style={styles.contextContainer}>
					<View style={styles.option}>
						<Text style={styles.TEXT_STYLE}>{value}</Text>
					</View>
				</View>
				);
			}
		);
	}

	render() {
		return (
			<Container>
				<Header style={ {height: 20} } />
				<Content>
					{ this.renderOption() }
					<View style={ styles.contextContainer }>
						<View style={ styles.option }>
							<Text style={ styles.TEXT_STYLE }>Hello</Text>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Options;
