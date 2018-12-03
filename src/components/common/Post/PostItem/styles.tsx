import STYLE_REF from '../../../variables';

const styles: any = {
	createAt: {
		fontSize: 9,
		color: '#8B8B8B',
		marginTop: 8,
		marginRight: 0,
		paddingRight: 6,
		marginBottom: 25,
	},
	bottomContent: {
		alignItems: 'flex-end',
	},
	featureImageTag:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: 54,
		height: 22,
		marginLeft: 10,
		borderTopRightRadius: 5,
		backgroundColor: '#FFF',
	},
	redText: {
		color: STYLE_REF.RED,
	},
	tagIcon: {
		fontSize: 14,
	},
	tagText: {
		fontSize: 11,
	},
	postTitle: {
		fontSize: 18,
		fontWeight: '900',
	},
	postExcerpt: {
		fontSize: 12,
		marginTop: 23,
		marginBottom: 23,
		lineHeight: 20,
	},
};

export default styles;
