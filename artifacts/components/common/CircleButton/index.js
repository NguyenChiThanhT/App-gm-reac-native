import React from 'react';
import { Text, Image } from 'react-native';
import styles from './styles';
import { Button } from 'native-base';
const CircleButton = ({ buttonText, buttonImageFunction, onPress }) => {
    return (React.createElement(Button, { style: styles.CircleButton, onPress: onPress },
        React.createElement(Image, { source: buttonImageFunction, style: styles.ButtonImage }),
        React.createElement(Text, { style: styles.ButtonText }, buttonText)));
};
export { CircleButton };
//# sourceMappingURL=index.js.map