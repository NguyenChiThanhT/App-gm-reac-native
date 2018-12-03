import * as React from 'react';
import { View, Container, Header, Content, Text } from 'native-base';
import { ImageBackground } from 'react-native';
import { CircleButton } from '../../../components/common';
import styles from './styles';
class NewPost extends React.Component {
    render() {
        return (React.createElement(Container, { contentContainerStyle: styles.container },
            React.createElement(Header, { style: { height: 20 } }),
            React.createElement(Content, { contentContainerStyle: styles.container },
                React.createElement(ImageBackground, { source: require('../../../../assets/images/NewPost/images/icons/bg.png'), style: styles.ImageBackground },
                    React.createElement(Text, { style: styles.TitleText }, '投稿する'),
                    React.createElement(View, { style: styles.ButtonContainer },
                        React.createElement(CircleButton, { buttonText: '写真', onPress: () => { this.props.navigation.navigate('AddPicture'); }, buttonImageFunction: require('../../../../assets/images/NewPost/images/icons/mountain.png') }),
                        React.createElement(CircleButton, { buttonText: '記事', onPress: () => { this.props.navigation.navigate('AddPost'); }, buttonImageFunction: require('../../../../assets/images/NewPost/images/icons/pen.png') }))))));
    }
}
export default NewPost;
//# sourceMappingURL=index.js.map