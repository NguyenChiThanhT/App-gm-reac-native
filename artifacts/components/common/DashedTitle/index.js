import React from 'react';
import { View, Text } from 'native-base';
import { styles } from './styles';
const DashedTitle = ({ text }) => {
    return (React.createElement(View, { style: styles.titleHolder },
        React.createElement(View, { style: styles.dashHolder },
            React.createElement(View, { style: styles.dashed })),
        React.createElement(View, { style: styles.textHolder },
            React.createElement(Text, { style: styles.text }, text)),
        React.createElement(View, { style: styles.dashHolder },
            React.createElement(View, { style: styles.dashed }))));
};
export { DashedTitle };
//# sourceMappingURL=index.js.map