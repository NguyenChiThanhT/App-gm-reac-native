import * as React from 'react';
import { View, Container, Header, Content, Footer, Text } from 'native-base';
import { ImageBackground } from 'react-native';
import { CircleButton, FooterAction } from '../../../components/';
import styles from './styles';
class D0020 extends React.Component {
    render() {
        return (React.createElement(Container, { contentContainerStyle: styles.container },
            React.createElement(Header, { style: { height: 20 } }),
            React.createElement(Content, { contentContainerStyle: styles.container },
                React.createElement(ImageBackground, { source: require('../../assets/images/icons/bg.png'), style: styles.ImageBackground },
                    React.createElement(Text, { style: styles.TitleText }, '投稿する'),
                    React.createElement(View, { style: styles.ButtonContainer },
                        React.createElement(CircleButton, { buttonText: '写真', onPress: () => { this.props.navigation.navigate('D0020News'); }, buttonImageFunction: require('../../assets/images/icons/mountain.png') }),
                        React.createElement(CircleButton, { buttonText: '記事', onPress: () => { this.props.navigation.navigate('EditPicture'); }, buttonImageFunction: require('../../assets/images/icons/pen.png') })))),
            React.createElement(Footer, null,
                React.createElement(FooterAction, { actionText: 'ホーム', getButtonImage: require('../../assets/images/icons/home-footer.png') }),
                React.createElement(FooterAction, null),
                React.createElement(FooterAction, { actionText: '投稿', getButtonImage: require('../../assets/images/icons/pen-footer.png') }),
                React.createElement(FooterAction, { actionText: '見つける', getButtonImage: require('../../assets/images/icons/glass-footer.png') }),
                React.createElement(FooterAction, { actionText: 'お気に入り', getButtonImage: require('../../assets/images/icons/heart-footer.png') }))));
    }
}
export default D0020;
//# sourceMappingURL=index.js.map