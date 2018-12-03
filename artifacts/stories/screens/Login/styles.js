import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerViewTop: {
        flex: 0.52
    },
    conainerButton: {
        flex: 0.5,
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        width: width * 0.9,
        //auto scale with height device
        height: Platform.OS === 'ios' ? height * 0.076 : height * 0.076,
        borderColor: '#EEEEEE',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textOfBtnDefault: {
        fontSize: 13,
        color: '#3C3C3C'
    },
    textOfBtnTW: {
        color: '#FFF'
    },
    // Text Description
    textDescription: {
        fontSize: 12,
        color: '#3C3C3C',
        marginTop: 8
    },
    textBoldAndUnderline: {
        fontWeight: '900',
        textDecorationLine: 'underline',
        color: '#3C3C3C'
    },
    weboo: {
        position: 'absolute',
        top: 220,
        left: 15
    },
    textBelowLogo: {
        marginTop: 20
    },
    // Image group on top
    // Image first
    imageFirst: {
        marginTop: 0,
        width: '100%',
        height: height * 0.3
    },
    croppedFirst: {
        width: width * 0.55,
        height: height * 0.3,
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: 20
    },
    imageSecond: {
        marginTop: 0,
        width: '100%',
        height: height * 0.27
    },
    croppedSecond: {
        width: 96,
        height: height * 0.27,
        overflow: 'hidden',
        position: 'absolute',
        right: 20,
        top: height * 0.2
    },
    imageThird: {
        marginTop: 0,
        width: '100%',
        height: 105
    },
    croppedThird: {
        width: width * 0.38,
        height: height * 0.15,
        overflow: 'hidden',
        position: 'absolute',
        left: width * 0.2,
        top: 50
    },
    imageFourth: {
        marginTop: 0,
        width: '100%',
        height: 86
    },
    croppedFourth: {
        width: width * 0.28,
        height: 72,
        overflow: 'hidden',
        position: 'absolute',
        right: width * 0.14,
        top: height * 0.4
    },
    icon: {
        color: '#FFF',
        marginRight: 10
    }
});
export default styles;
//# sourceMappingURL=styles.js.map