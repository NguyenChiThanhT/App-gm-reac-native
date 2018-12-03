import * as React from 'react';
import { View, Container, Header, Content, Footer, Text } from 'native-base';
import { ImageBackground } from 'react-native';

import { CircleButton, FooterAction } from '../../../components/common';

import styles from './styles';
export interface Props {
	navigation: any;
}
export interface State {}
class NewPost extends React.Component<Props, State> {
	render() {
		return (
			<Container contentContainerStyle={ styles.container }>
				<Header style={ {height: 20} } />
				<Content contentContainerStyle={ styles.container }>
					<ImageBackground source={ require ('../../../../assets/images/NewPost/images/icons/bg.png') }
									style={ styles.ImageBackground }>
						<Text style={ styles.TitleText } >
							{ '投稿する' }
						</Text>

						<View style={ styles.ButtonContainer } >
							<CircleButton buttonText='写真'
										onPress={ () => { this.props.navigation.navigate('AddPicture'); } }
										buttonImageFunction={ require('../../../../assets/images/NewPost/images/icons/mountain.png') }/>
							<CircleButton buttonText='記事'
										onPress={ () => { this.props.navigation.navigate('AddPost'); } }
										buttonImageFunction={ require('../../../../assets/images/NewPost/images/icons/pen.png') }/>
						</View>
					</ImageBackground>
				</Content>
			</Container>
		);
	}
}

export default NewPost;
