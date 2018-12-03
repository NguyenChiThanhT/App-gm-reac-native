import * as React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'native-base';
import { View, ImageBackground, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
// @ts-ignore
import image1 from '../../../assets/images/image1.png';
// @ts-ignore
import Group281 from '../../../assets/images/Group281.png';
// @ts-ignore
import MaskGroup9 from '../../../assets/images/MaskGroup9.png';
// @ts-ignore
import MaskGroup10 from '../../../assets/images/MaskGroup10.png';
// @ts-ignore
import MaskGroup11 from '../../../assets/images/MaskGroup11.png';
// @ts-ignore
import Group299 from '../../../assets/images/Group299.png';
import TopArticle from '../TopArticle';
import LinearGradient from 'react-native-linear-gradient';
const { width } = Dimensions.get('window');
class SwiperComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { type } = this.props;
        const { linearGradient } = styles;
        return (type === 1 ?
            React.createElement(Swiper, { height: 240, autoplayTimeout: 3.5, autoplay: false, loop: true, activeDotColor: 'rgb(148,93,96)', removeClippedSubviews: false, paginationStyle: styles.paginationStyle },
                React.createElement(TopArticle, { background: image1, CookingImage: Group299, iconUser: Group281 }),
                React.createElement(TopArticle, { background: image1, CookingImage: Group299, iconUser: Group281 }),
                React.createElement(TopArticle, { background: image1, CookingImage: Group299, iconUser: Group281 })) :
            React.createElement(Swiper, { height: 160, loop: true, style: { flex: 1 }, autoplay: false, activeDotColor: 'rgb(148,93,96)', paginationStyle: styles.paginationStyle },
                React.createElement(View, { style: styles.keyword },
                    React.createElement(ImageBackground, { source: MaskGroup11, resizeMethod: 'scale', style: [styles.imageKeyword] },
                        React.createElement(LinearGradient, { style: linearGradient, colors: ['transparent', 'rgba(0.8,0.6,0.6,0.6)'] },
                            React.createElement(Text, { style: { color: '#fff', fontWeight: 'bold' } }, '折り紙'))),
                    React.createElement(ImageBackground, { source: MaskGroup10, resizeMethod: 'scale', style: [styles.imageKeyword] },
                        React.createElement(LinearGradient, { style: linearGradient, colors: ['transparent', 'rgba(0.8,0.6,0.6,0.6)'] },
                            React.createElement(Text, { style: { color: '#fff', fontWeight: 'bold' } }, 'スパゲッティ'))),
                    React.createElement(ImageBackground, { source: MaskGroup9, resizeMethod: 'scale', style: [styles.imageKeyword] },
                        React.createElement(LinearGradient, { style: linearGradient, colors: ['transparent', 'rgba(0.8,0.8,0.8,0.8)'] },
                            React.createElement(Text, { style: { color: '#fff', fontWeight: 'bold' } }, 'ビーズ'))))));
    }
}
SwiperComponent.propTypes = {
    type: PropTypes.number,
};
export default SwiperComponent;
//# sourceMappingURL=index.js.map