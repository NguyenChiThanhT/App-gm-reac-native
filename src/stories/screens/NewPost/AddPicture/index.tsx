import * as React from 'react';
import { Thumbnail, Container, Content, View, Text, Header } from 'native-base';

import { ScrollView } from 'react-native';

import { DashedTitle, OptionLabel } from '../../../../components/common';

import styles from './styles';

export interface Props {
	navigation: any;
}

export interface State {
}

class AddPicture extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={ {height: 20} } />
				<Content contentContainerStyle={ styles.container }>
					<View style={ styles.contextContainer }>
						<View>
							<Thumbnail square source={ require('../../../../../assets/images/NewPost/images/64x64_thumbnail.png') }/>
						</View>

						<View style={ styles.thumbnailContext }>
							<Text style={ styles.TEXT_STYLE }>Hello From The Other Side</Text>
						</View>
					</View>

					<OptionLabel label={'Hello'}
								currentValue={'World'}
								onPress={ this.linkToOptionPage1.bind(this) }/>

					<OptionLabel label={'Hello'}
								currentValue={'World'}
								onPress={ this.linkToOptionPage2.bind(this) }/>

					<OptionLabel label={'Hello'}
								currentValue={'World'}
								onPress={ this.linkToOptionPage3.bind(this) }/>

					<ScrollView style={ styles.tagHolder }
								horizontal={ true }
								showsHorizontalScrollIndicator={ false }>
						<Text style={ styles.tag }>HELLO</Text>
						<Text style={ styles.tag }>IT'S ME</Text>
						<Text style={ styles.tag }>HELLO</Text>
						<Text style={ styles.tag }>IT'S ME</Text>
						<Text style={ styles.tag }>HELLO</Text>
						<Text style={ styles.tag }>IT'S ME</Text>
						<Text style={ styles.tag }>HELLO</Text>
						<Text style={ styles.tag }>IT'S ME</Text>
					</ScrollView>

					<View style={ {...styles.contextContainer, borderBottomWidth: 0} }>
						<DashedTitle text={'シェア'}/>
					</View>
				</Content>
			</Container>
		);
	}

	linkToOptionPage1() {
		this.props.navigation.navigate('Options');
	}

	linkToOptionPage2() {
		this.props.navigation.navigate('Options');
	}

	linkToOptionPage3() {
		this.props.navigation.navigate('Options', {
			optionID: 5,
			currentValue: 0,
			listOfOption: [
				'Hello World From Option 3',
				'Nihato 1',
				'Nihato 2',
				'Nihato 3'
			]
		});
	}
}

export default AddPicture;
