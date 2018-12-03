const styles: any = {
	containerStyle: {
		flexDirection: 'row',
		paddingVertical: 8,
		paddingHorizontal: 10,
		alignItems: 'center',
	},
	avatarContainerStyle: {
		flex: 1,
		paddingHorizontal: 5,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	avatarStyle: {
		width: 49,
		height: 49,
		borderRadius: 24.5,
	},
	authorNameContainerStyle: {
		flex: 3,
		paddingLeft: 5,
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	authorNameStyle: {
		color: '#3C3C3C',
		fontSize: 12,
	},
	//TODO: Intergrated the follow button with <CustomButton> component later
	ctaContainerStyle: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	buttonStyle: {
		padding: 0,
		backgroundColor: '#E35664',
		height: 30,
		flexDirection: 'row',
		alignItems: 'center',
		width: 120,
		// or transparent for ghost button
	},
	buttonTextStyle: {
		fontSize: 12,
		lineHeight: 30,
		bottom: 1,
		flex: 1,
		textAlign: 'center',
	},
	unfollowedText: {
		color: '#945D60',
	},
	buttonUnfollowedStyle: {
		backgroundColor: 'rgba(0,0,0,0)',
		borderWidth: 1,
		borderColor: '#945D60',
	}
};

export {styles};
