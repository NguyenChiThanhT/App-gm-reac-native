const primaryColor = '#945D60';

const styles: any = {
	containerFavorite: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 14,
		justifyContent: 'space-between',
	},
	btnHeart: {
		width: 120,
		height: 45,
		borderWidth: 1,
		marginLeft: 5,
		borderColor: '#945D60',
		backgroundColor: 'transparent',
		justifyContent: 'center',
	},
	heart: {
		color: primaryColor,
		textAlign: 'center',
		marginLeft: -15,
		fontWeight: '900',
	},
	btnStar: {
		width: 220,
		height: 45,
		marginRight: 5,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: primaryColor,
		justifyContent: 'center',
	},
};

export default styles;