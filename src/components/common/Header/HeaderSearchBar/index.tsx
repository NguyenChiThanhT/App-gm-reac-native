import React from 'react';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';
import styles from './styles';

const HeaderSearchBar = ({textPlaceholder,  btnName}) => {
	return (
			<Header searchBar style={{backgroundColor: '#FFFFFF'}}>
				<Item style={styles.inputSearch}>
					<Icon name='ios-search' />
					<Input style={{color: '#3C3C3C'}} placeholder={textPlaceholder} />
				</Item>
				<Button style={styles.btnCancel} transparent>
					<Text style={{color: '#3C3C3C', fontSize: 14}}>{btnName}</Text>
				</Button>
			</Header>
	);
};

export { HeaderSearchBar };
