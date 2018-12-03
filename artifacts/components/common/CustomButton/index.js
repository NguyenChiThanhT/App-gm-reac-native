import React from 'react';
import styles from './styles';
import { Button, View, Text } from 'native-base';
import STYLE_REF from '../../variables';
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
            styleBuilder = Object.assign({}, styleBuilder, { backgroundColor: STYLE_REF.TRANSPARENT, borderColor: STYLE_REF.RED, color: STYLE_REF.RED });
            textStyleBuilder = Object.assign({}, textStyleBuilder, { color: STYLE_REF.RED });
            break;
        case 'disabled':
            styleBuilder = Object.assign({}, styleBuilder, { backgroundColor: STYLE_REF.DARK_GRAY, borderColor: STYLE_REF.DARK_GRAY });
            textStyleBuilder = Object.assign({}, textStyleBuilder, { color: STYLE_REF.WHITE });
            break;
        default:
            break;
    }
    if (!block) {
        styleBuilder = Object.assign({}, styleBuilder, { alignSelf: 'center' });
    }
    return (React.createElement(View, null,
        React.createElement(Button, { style: Object.assign({}, styleBuilder, { style }), onPress: onPress },
            children,
            React.createElement(Text, { style: Object.assign({}, textStyleBuilder, { style }) }, btnText))));
};
export { CustomButton };
/* USAGE
*
* */
//# sourceMappingURL=index.js.map