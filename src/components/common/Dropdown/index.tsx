import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'native-base';


import styles from './styles';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showBropbox: this.props.visible,
			data: this.props.data,
		};
	}
	render() {
		const { showBropbox, data } = this.state;
		const { container, content, dropboxItem, lineBottom, viewIcon, viewValue } = styles;
		return (
			<View style={container}>
				<View style={content}>
					{data.map((item, index) => {
						return (
							<TouchableOpacity key={item.id} onPress={() => { this.props.updateValue(item); }} style={[dropboxItem, index === data.length - 1 ? null : lineBottom]}>
								<View style={viewValue}>
									<Text style={{fontSize: 14, color: this.props.value === item.id ? '#945D60' : '#3C3C3C'}}>{item.value}</Text>
								</View>
								<View style={[viewIcon, {display: this.props.value === item.id ? 'flex' : 'none'}]}>
									<Icon style={{color: this.props.value === item.id ? '#945D60' : '#3C3C3C'}} name={'ios-checkmark'}/>
								</View>
							</TouchableOpacity>
						);
					})}
				</View>
			</View>
		);
	}
}

Dropdown.propTypes = {
	visible: PropTypes.bool,
	data: PropTypes.array,
	value: PropTypes.number,
};

export default Dropdown;
