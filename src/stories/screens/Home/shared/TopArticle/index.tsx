import React from 'react';
import {View, Image, ImageBackground, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'native-base';
const { width } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

class TopArticle extends React.Component {
	static propTypes = {
		iconUser: PropTypes.any,
		CookingImage: PropTypes.any,
		Background: PropTypes.any,
	}
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { background, CookingImage, iconUser } = this.props;
		const { container, content, stylesCooking, textContent, footer, line, lineHr, textIcon } = styles;
		return (
			<ImageBackground source={background} resizeMode='stretch' style={container}>
				<View style={{flex: 0.45, width: width, flexDirection: 'column'}} />
				<LinearGradient colors={['transparent', 'rgba(0.5,0.5,0.5,0.9)']}
								style={content}>
					<View style={{flex: 0.3, flexDirection: 'row', justifyContent: 'flex-end'}}>
						<View style={stylesCooking}>
							<Image source={CookingImage} resizeMode={'contain'} resizeMethod={'scale'} />
							<Text style={textIcon}>{'料理'}</Text>
						</View>
						<View style={line}>
							<View style={lineHr}/>
						</View>
					</View>
					<View style={textContent}>
						<Text numberOfLines={2} style={{color: '#fff', fontWeight: 'bold'}}>
							{'もっちもちの《ポンデリング》を お家で作っちゃおう！'}
						</Text>
					</View>
					<View style={footer}>
						<Image source={iconUser} resizeMode='contain' />
						<View style={{width: 200, paddingLeft: 10}}>
							<Text style={{color: '#fff', fontWeight: 'bold'}}>{'松本真由美'}</Text>
						</View>
					</View>
				</LinearGradient>
			</ImageBackground>
		);
	}
}

export default TopArticle;