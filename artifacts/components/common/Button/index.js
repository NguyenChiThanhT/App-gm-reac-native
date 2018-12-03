import React from 'react';
import styles from './styles';
import { Button, View, Text } from 'native-base';
const CustomButton = ({ onPress = null, size = 'normal', type = 'normal', btnText = '', children, block = true, style }) => {
    let styleBuilder = Object.assign({}, styles.btn), textStyleBuilder = Object.assign({}, styles.textStyle);
    switch (size) {
        case 'lg':
            styleBuilder = Object.assign({}, styleBuilder, { height: 48 });
            textStyleBuilder = Object.assign({}, textStyleBuilder, { lineHeight: 48 });
            break;
        case 'sm':
            styleBuilder = Object.assign({}, styleBuilder, { height: 32 });
            textStyleBuilder = Object.assign({}, textStyleBuilder, { lineHeight: 32 });
            break;
        default:
            styleBuilder = Object.assign({}, styleBuilder, { height: 40 });
            textStyleBuilder = Object.assign({}, textStyleBuilder, { lineHeight: 40 });
            break;
    }
    switch (type) {
        case 'ghost':
            styleBuilder = Object.assign({}, styleBuilder, { backgroundColor: 'rgba(0,0,0,0)', borderColor: '#945D60', color: '#945D60' });
            textStyleBuilder = Object.assign({}, textStyleBuilder, { color: '#945D60' });
            break;
        case 'disabled':
            styleBuilder = Object.assign({}, styleBuilder, { backgroundColor: '#8B8B8B', borderColor: '#8B8B8B' });
            textStyleBuilder = Object.assign({}, textStyleBuilder, { color: '#fff' });
            break;
        default:
            break;
    }
    if (!block) {
        styleBuilder = Object.assign({}, styleBuilder, { width: 200, alignSelf: 'center' });
    }
    return (React.createElement(View, null,
        React.createElement(Button, { style: Object.assign({}, styleBuilder, { style }), onPress: onPress },
            children,
            React.createElement(Text, { style: Object.assign({}, textStyleBuilder, { style }) }, btnText))));
};
export { CustomButton };
//# sourceMappingURL=index.js.map