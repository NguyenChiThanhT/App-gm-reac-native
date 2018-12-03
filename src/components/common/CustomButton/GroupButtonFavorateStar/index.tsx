import React, {Component} from 'react';
import {Image} from 'react-native';
import {View, Text, Button} from 'native-base';
import AIcon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import IIcon from 'react-native-vector-icons/Ionicons';

class GroupButtonFavorateStar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { numberOfHeart, numberOfStar } = this.props;

		return (
			<View style={styles.containerFavorite}>
				<Button style={styles.btnHeart}>
					<AIcon style={{color: 'rgb(148,93,96)', marginLeft: 12}} size={20} name='hearto'/>
					<Text style={styles.heart}>{numberOfHeart}</Text>
				</Button>
				<Button style={styles.btnStar}>
					<IIcon style={{color: 'rgb(148,93,96)'}} size={24} name='ios-star-outline'/>
					<Text style={styles.heart}>お気に入り({numberOfStar})</Text>
				</Button>
			</View>
		);
	}
}

export  { GroupButtonFavorateStar };
