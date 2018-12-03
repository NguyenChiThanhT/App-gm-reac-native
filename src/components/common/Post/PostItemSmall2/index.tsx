import React, {Component} from 'react';
import {View, Text} from 'native-base';
import { ImageBackground } from 'react-native';

import styles from './styles';

class PostItemSmall2 extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderMarker = (position, colorMarker) => {
		return <View style={[styles.circle, colorMarker]}>
						<Text style={{backgroundColor: 'rgba(0,0,0,0)', color: '#fff'}}>{position}</Text>
					</View>;
	}

	render() {
		const { imageSrc, category, author, title, top  } = this.props;
		let marker;
		if (top) {
			switch (top) {
				case 1:
					marker = this.renderMarker(1, styles.top1);
					break;
				case 2:
					marker = this.renderMarker(2, styles.top2);
					break;
				case 3:
					marker = this.renderMarker(3, styles.top3);
					break;
				case 4:
					marker = this.renderMarker(4, styles.top4);
					break;
				default:
					marker = this.renderMarker(5, styles.top4);
					break;
			}
		}

		return (
				<View style={{flexDirection: 'row', marginBottom: 15}}>
					<View>
						<ImageBackground style={{width: 138, height: 85}} source={imageSrc}>
							{marker}
						</ImageBackground>
					</View>
					<View style={{flex: 1, paddingLeft: 5}}>
						<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							<Text style={styles.category}>{category}</Text>
							<Text style={styles.textDescList}>{author}</Text>
						</View>
						<View>
							<Text style={styles.link}>{title}</Text>
						</View>
					</View>
				</View>
		);
	}
}

export { PostItemSmall2 };
