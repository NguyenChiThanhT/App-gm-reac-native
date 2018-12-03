import * as React from 'react';
import { Thumbnail, Container, Content, View, Text, Header } from 'native-base';
import { ScrollView } from 'react-native';
import { DashedTitle, OptionLabel } from '../../../../components/common';
import styles from './styles';
class AddPicture extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, { style: { height: 20 } }),
            React.createElement(Content, { contentContainerStyle: styles.container },
                React.createElement(View, { style: styles.contextContainer },
                    React.createElement(View, null,
                        React.createElement(Thumbnail, { square: true, source: require('../../../../../assets/images/NewPost/images/64x64_thumbnail.png') })),
                    React.createElement(View, { style: styles.thumbnailContext },
                        React.createElement(Text, { style: styles.TEXT_STYLE }, "Hello From The Other Side"))),
                React.createElement(OptionLabel, { label: 'Hello', currentValue: 'World', onPress: this.linkToOptionPage1.bind(this) }),
                React.createElement(OptionLabel, { label: 'Hello', currentValue: 'World', onPress: this.linkToOptionPage2.bind(this) }),
                React.createElement(OptionLabel, { label: 'Hello', currentValue: 'World', onPress: this.linkToOptionPage3.bind(this) }),
                React.createElement(ScrollView, { style: styles.tagHolder, horizontal: true, showsHorizontalScrollIndicator: false },
                    React.createElement(Text, { style: styles.tag }, "HELLO"),
                    React.createElement(Text, { style: styles.tag }, "IT'S ME"),
                    React.createElement(Text, { style: styles.tag }, "HELLO"),
                    React.createElement(Text, { style: styles.tag }, "IT'S ME"),
                    React.createElement(Text, { style: styles.tag }, "HELLO"),
                    React.createElement(Text, { style: styles.tag }, "IT'S ME"),
                    React.createElement(Text, { style: styles.tag }, "HELLO"),
                    React.createElement(Text, { style: styles.tag }, "IT'S ME")),
                React.createElement(View, { style: Object.assign({}, styles.contextContainer, { borderBottomWidth: 0 }) },
                    React.createElement(DashedTitle, { text: 'シェア' })))));
    }
    linkToOptionPage1() {
        this.props.navigation.navigate('Options');
    }
    linkToOptionPage2() {
        this.props.navigation.navigate('Options');
    }
    linkToOptionPage3() {
        this.props.navigation.navigate('Options', {
            optionID: 5,
            currentValue: 0,
            listOfOption: [
                'Hello World From Option 3',
                'Nihato 1',
                'Nihato 2',
                'Nihato 3'
            ]
        });
    }
}
export default AddPicture;
//# sourceMappingURL=index.js.map