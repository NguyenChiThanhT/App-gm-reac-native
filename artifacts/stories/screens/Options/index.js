import * as React from 'react';
import { Container, Header, Content, View, Text } from 'native-base';
import styles from './styles';
class Options extends React.Component {
    renderOption() {
        let optionList = [];
        if (this.props.navigation.state.params.listOfOption !== undefined) {
            optionList = this.props.navigation.state.params.listOfOption;
        }
        console.log(this.props.navigation);
        return optionList.map(value => {
            return (React.createElement(View, { style: styles.contextContainer },
                React.createElement(View, { style: styles.option },
                    React.createElement(Text, { style: styles.TEXT_STYLE }, value))));
        });
    }
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, { style: { height: 20 } }),
            React.createElement(Content, null,
                this.renderOption(),
                React.createElement(View, { style: styles.contextContainer },
                    React.createElement(View, { style: styles.option },
                        React.createElement(Text, { style: styles.TEXT_STYLE }, "Hello"))))));
    }
}
export default Options;
//# sourceMappingURL=index.js.map