import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBFAFA'
    },
    row: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        marginBottom: 15,
        alignItems: 'center'
    },
    mt: {
        marginTop: 18
    },
    inputSearch: {
        height: 40,
        backgroundColor: 'rgb(242,242,243)'
    },
    badge: {
        top: 0,
        right: 0,
        zIndex: 10,
        height: 18,
        width: 18,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: 'rgb(148,93,96)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnPerson: {
        marginLeft: 15,
        width: 50, height: 40,
        backgroundColor: 'rgb(242,242,243)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17
    },
    activeTabStyle: {
        backgroundColor: 'rgb(148,93,96)'
    },
    tabStyle: {
        backgroundColor: '#F8F8F8'
    },
    keywordContent: {
        height: 170, width: width * 0.95,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10, marginRight: 10
    },
    paginationStyle: {
        bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
    keyword: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    imageKeyword: {
        width: '33%', height: 120,
        justifyContent: 'center', alignItems: 'center'
    }
});
export default styles;
//# sourceMappingURL=styles.js.map