import React from 'react';
import { View, Text } from 'react-native';
import { FooterTab, Button } from 'native-base';
import { Icon } from '../';
import { styles } from './styles';
const FooterAction = ({ iconName, iconType, actionText, onPress, active }) => {
    // Normal Color for Text And Icon, get overwritten if is the active page
    // TODO: Check Correct Icon Compare to client design
    let color = '#999999';
    if (active) {
        color = '#3C3C3C';
    }
    return (React.createElement(FooterTab, { style: styles.FooterTab },
        React.createElement(View, { style: styles.FooterContent },
            React.createElement(Button, { onPress: onPress },
                React.createElement(Icon, { name: iconName, type: iconType, style: { color: color } }),
                React.createElement(Text, { style: Object.assign({}, styles.FooterText, { color: color }) }, actionText)))));
};
export { FooterAction };
//# sourceMappingURL=index.js.map