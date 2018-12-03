// This component is used in AddPost screen component
import React from 'react';
import { View, Text } from 'native-base';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
const ImageOptionLabel = ({ imgSrc, imgAlt, onPress }) => {
    return (React.createElement(View, { style: styles.containerStyle },
        React.createElement(View, { style: styles.thumbnailHolder },
            React.createElement(Image, { source: imgSrc, style: styles.thumbnailImage })),
        React.createElement(View, { style: styles.rightContent },
            React.createElement(Text, { style: styles.altText }, imgAlt),
            React.createElement(Icon, { name: "ios-arrow-forward", size: 20, color: "#aaa" }))));
};
export { ImageOptionLabel };
//# sourceMappingURL=index.js.map