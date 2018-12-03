// This component is used in AddPost screen component
import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

import { Small, Row, Column } from '../../';

const CustomInput = ( { labelText, value, allowEdit, placeholder } ) => {
	return (
		<TouchableOpacity style={styles.formRow}>
			<Row>
				<Column size={14}>
					<Row>
						<Column size={1} style={ styles.formRowItem }>
							<Small style={ [ styles.text, styles.labelText ] }>{ labelText }</Small>
						</Column>
						<Column size={2} style={ styles.formRowItem }>
							<Small style={ [ styles.text, styles.placeholderText ] }> { value } </Small>
						</Column>
					</Row>
				</Column>
				<Column size={2} style={ styles.arrowItem }>
					<Icon style={styles.formArrow} name={'ios-arrow-forward'} />
				</Column>
			</Row>
		</TouchableOpacity>
	);
};

export { CustomInput };
