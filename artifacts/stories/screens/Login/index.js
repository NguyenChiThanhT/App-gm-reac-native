import React from 'react';
import { Image, View, Linking, Dimensions, TouchableOpacity } from 'react-native';
import TwitterButton from './shared/TwitterButton';
import FacebookButton from './shared/FacebookButton';
const { width } = Dimensions.get('window');
import styles from './styles';
import { P, Row } from '../../../components/common';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(View, { style: styles.containerViewTop },
                React.createElement(View, { style: styles.croppedFirst },
                    React.createElement(Image, { style: styles.imageFirst, resizeMethod: "resize", source: require('./../../../../assets/images/gr-image-1.jpg') })),
                React.createElement(View, { style: styles.croppedSecond },
                    React.createElement(Image, { style: styles.imageSecond, resizeMethod: "resize", source: require('./../../../../assets/images/gr-image-2.jpg') })),
                React.createElement(View, { style: styles.croppedThird },
                    React.createElement(Image, { style: styles.imageThird, resizeMethod: "resize", source: require('./../../../../assets/images/gr-image-3.jpg') })),
                React.createElement(View, { style: styles.croppedFourth },
                    React.createElement(Image, { style: styles.imageFourth, resizeMethod: "resize", source: require('./../../../../assets/images/gr-image-4.jpg') })),
                React.createElement(View, { style: styles.weboo },
                    React.createElement(Image, { resizeMethod: "resize", resizeMode: "contain", style: { height: 40, width: 147 }, source: require('./../../../../assets/images/icon.png') }),
                    React.createElement(P, { style: [styles.textOfBtnDefault, styles.textBelowLogo] }, "\u81EA\u5206\u3066\u3099\u3064\u304F\u308B\u3002\u30A6\u30A3\u30FC\u30D6\u30FC"))),
            React.createElement(View, { style: { flex: 0.48, justifyContent: 'center', alignItems: 'center' } },
                React.createElement(TouchableOpacity, { style: styles.button },
                    React.createElement(P, { style: styles.textOfBtnDefault }, "\u5229\u7528\u958B\u59CB")),
                React.createElement(View, { style: { height: 4 } }),
                React.createElement(TouchableOpacity, { onPress: () => this.props.onLogin(), style: styles.button },
                    React.createElement(P, { style: styles.textOfBtnDefault }, "\u30A6\u30A3\u30FC\u30D6\u30FC\u30ED\u30B0\u30A4\u30F3")),
                React.createElement(View, { style: { height: 4 } }),
                React.createElement(TwitterButton, null),
                React.createElement(FacebookButton, null),
                React.createElement(View, { style: { flexDirection: 'column', width: width * 0.9, paddingTop: 5 } },
                    React.createElement(P, { style: { fontSize: 13, fontWeight: '500' } }, '利用を開始することで'),
                    React.createElement(Row, { style: { paddingTop: 6 } },
                        React.createElement(TouchableOpacity, { style: { paddingRight: 5 }, onPress: () => Linking.openURL('https://weboo.link/legal/?sp=1') },
                            React.createElement(P, { style: { fontSize: 13, textDecorationLine: 'underline' }, bold: true }, '利用規約')),
                        React.createElement(TouchableOpacity, { style: { paddingRight: 5 }, onPress: () => Linking.openURL('https://weboo.link/privacy/?sp=1') },
                            React.createElement(P, { style: { textDecorationLine: 'underline', fontSize: 13 }, bold: true }, 'プライバシーポリシー')),
                        React.createElement(P, { style: { fontSize: 13 } }, 'に同意するものとします。'))))));
    }
}
export default Login;
//# sourceMappingURL=index.js.map