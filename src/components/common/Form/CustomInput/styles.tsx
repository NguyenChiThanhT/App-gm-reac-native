import STYLE_REF from '../../../variables';

const styles: any = {
	formRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 48,
		backgroundColor: STYLE_REF.WHITE,
		borderBottomWidth: 1,
		borderBottomColor: STYLE_REF.BORDER_COLOR,
		paddingHorizontal: 20,
	},
	text: {
		height: 48,
		lineHeight: 48,
		paddingTop: 5,
	},
	formRowItem: {
		backgroundColor: 'rgba(0,0,0,0)',
		height: 48,
		flexDirection: 'row',
		alignItems: 'center',
	},
	formLabel: {
		flex: 0.7,
		flexDirection: 'row',
	},
	placeholderText: {
		color: STYLE_REF.BLACK,
	},
	formArrow: {
		fontSize: 20,
		color: STYLE_REF.LIGHT_GRAY,
	},
	arrowItem: {
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
};

export { styles };
