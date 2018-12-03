import * as React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'native-base';
import {View, ImageBackground, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './styles';
// @ts-ignore
import image1 from '../../../assets/images/image1.png';
// @ts-ignore
import Group301 from '../../../assets/images/Group301.png';
// @ts-ignore
import Group281 from '../../../assets/images/Group281.png';
// @ts-ignore
import MaskGroup9 from '../../../assets/images/MaskGroup9.png';
// @ts-ignore
import MaskGroup10 from '../../../assets/images/MaskGroup10.png';
// @ts-ignore
import MaskGroup11 from '../../../assets/images/MaskGroup11.png';
// @ts-ignore
import Group299 from '../../../assets/images/Group299.png';
import TopArticle from '../TopArticle';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

export interface Props {
	type: number;
}
export interface State {}
class SwiperComponent extends React.Component<Props, State> {
	static propTypes = {
		type: PropTypes.number,
	}
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { type } = this.props;
		const { linearGradient } = styles;
		return (
			type === 1 ?
			<Swiper height={240} autoplayTimeout={3.5} autoplay={false} loop={true} activeDotColor='rgb(148,93,96)' removeClippedSubviews={false}
					paginationStyle={styles.paginationStyle}>
				<TopArticle background={image1} CookingImage={Group299} iconUser={Group281} />
				<TopArticle background={image1} CookingImage={Group299} iconUser={Group281} />
				<TopArticle background={image1} CookingImage={Group299} iconUser={Group281} />
			</Swiper> :
			<Swiper height={160} loop={true} style={{flex: 1}} autoplay={false}
			activeDotColor='rgb(148,93,96)'
			paginationStyle={styles.paginationStyle}>
				<View style={styles.keyword}>
					<ImageBackground source={MaskGroup11} resizeMethod='scale'
					style={[styles.imageKeyword]}>
						<LinearGradient style={linearGradient} colors={['transparent', 'rgba(0.8,0.6,0.6,0.6)']}>
							<Text style={{color: '#fff', fontWeight: 'bold'}}>{'折り紙'}</Text>
						</LinearGradient>
					</ImageBackground>
					<ImageBackground source={MaskGroup10} resizeMethod='scale'
					style={[styles.imageKeyword]}>
						<LinearGradient style={linearGradient} colors={['transparent', 'rgba(0.8,0.6,0.6,0.6)']}>
							<Text style={{color: '#fff', fontWeight: 'bold'}}>{'スパゲッティ'}</Text>
						</LinearGradient>
					</ImageBackground>
					<ImageBackground source={MaskGroup9} resizeMethod='scale'
					style={[styles.imageKeyword]}>
						<LinearGradient style={linearGradient} colors={['transparent', 'rgba(0.8,0.8,0.8,0.8)']}>
							<Text style={{color: '#fff', fontWeight: 'bold'}}>{'ビーズ'}</Text>
						</LinearGradient>
					</ImageBackground>
				</View>
			</Swiper>
		);
	}
}

export default SwiperComponent;
