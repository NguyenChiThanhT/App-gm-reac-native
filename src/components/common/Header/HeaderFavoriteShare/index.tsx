import React from 'react';
import {Header, Title, Button, Left, Right, Body} from 'native-base';
import FIcon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const HeaderFavoriteShare = ({title}) => {
	return (
			<Header>
				<Left style={{flex: 0.1}}>
					<Button transparent onPress={() => this.props.navigation.goBack()}>
						<FIcon style={{color: 'rgb(148,93,96)'}} size={24} name='angle-left'/>
					</Button>
				</Left>

				<Body style={{flex: 0.75, marginLeft: -20}}>
				<Title style={styles.title}>{title}</Title>
				</Body>
				<Right style={{flex: 0.15}}>
					<FIcon style={{color: 'rgb(148,93,96)', marginRight: 10}} size={22} name='heart-o'/>
					<EIcon style={{color: 'rgb(148,93,96)'}} size={22} name='share'/>
				</Right>
			</Header>
	);
};

export { HeaderFavoriteShare };
