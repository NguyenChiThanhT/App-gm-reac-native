import * as React from 'react';
import { View, Container, Header, Left, Right, Body, Content, Text } from 'native-base';
import { OptionLabel, DashedTitle, ImageOptionLabel, Gap } from '../../../components/';
import styles from './styles';
class D0020News extends React.Component {
    render() {
        return (React.createElement(Container, { style: styles.containerStyle },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Text, null, "\u30AD\u30E3\u30F3\u30BB\u30EB")),
                React.createElement(Body, null),
                React.createElement(Right, null,
                    React.createElement(Text, null, "\u4FDD\u5B58\u3059\u308B"))),
            React.createElement(Content, null,
                React.createElement(View, null,
                    React.createElement(OptionLabel, { label: 'タイトル', currentValue: '未入力', onPress: true }),
                    React.createElement(OptionLabel, { label: 'カテゴリを選択', currentValue: '', onPress: true })),
                React.createElement(Gap, { height: 40 }),
                React.createElement(View, null,
                    React.createElement(DashedTitle, { text: 'メイン写真' }),
                    React.createElement(ImageOptionLabel, { imgSrc: require('../../assets/images/icons/mountain.png'), imgAlt: 'Hello World' })))));
    }
}
export default D0020News;
//# sourceMappingURL=index.js.map