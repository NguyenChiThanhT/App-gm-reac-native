import { Dimensions } from 'react-native';
const styles = {
    CircleButton: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginHorizontal: 8,
        width: Dimensions.get('window').width / 2 - 16,
        height: Dimensions.get('window').width / 2 - 16,
        borderRadius: Dimensions.get('window').width / 4 - 8
    },
    ButtonText: {
        color: '#945D60'
    },
    ButtonImage: {
        marginBottom: 10
    }
};
export default styles;
//# sourceMappingURL=styles.js.map