import React from 'react';
import { View, Text, Button } from 'native-base';
import { styles } from './styles';
const OptionLabel = ({ label, currentValue, onPress }) => {
    return (React.createElement(Button, { style: styles.contextContainer, onPress: onPress },
        React.createElement(View, { style: styles.optionLabel },
            React.createElement(Text, { style: styles.labelText }, label)),
        React.createElement(View, { style: styles.selectedOption },
            React.createElement(Text, { style: styles.selectedText }, currentValue))));
};
export { OptionLabel };
//# sourceMappingURL=index.js.map