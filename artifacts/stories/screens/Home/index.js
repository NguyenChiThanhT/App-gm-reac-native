import * as React from 'react';
import { Container, Header, Content, Text, Item, Input } from 'native-base';
import { View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import SwiperComponent from './shared/SwiperComponent';
import CustomTab from './shared/CustomTab';
import TopArticle from './shared/TopArticle';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { DashedTitle, Icon, P, Small, Row, Column, Badge, Section } from '../../../components/common';
import STYLE_REF from '../../../components/variables';
import styles from './styles';
// @ts-ignore
import Group281 from '../../../../assets/images/Group281.png';
// @ts-ignore
import MaskGroup6 from '../../../../assets/images/MaskGroup6.png';
// @ts-ignore
import MaskGroup12 from '../../../../assets/images/MaskGroup12.png';
// @ts-ignore
import MaskGroup13 from '../../../../assets/images/MaskGroup13.png';
// @ts-ignore
import MaskGroup14 from '../../../../assets/images/MaskGroup14.png';
// @ts-ignore
import MaskGroup16 from '../../../../assets/images/MaskGroup16.png';
// @ts-ignore
import MaskGroup17 from '../../../../assets/images/MaskGroup17.png';
// @ts-ignore
import Group299 from '../../../../assets/images/Group299.png';
// @ts-ignore
import star from '../../../../assets/images/star.png';
import ListArticles from "../../../components/layout/ListArticles";
import ListArticleSerialize from "../../../components/layout/ListArticleSerialize";
import ListArticleWithRank from "../../../components/layout/ListArticleWithRank";
const { width, height } = Dimensions.get('window');
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, { style: { alignItems: 'center' }, searchBar: true },
                React.createElement(Row, null,
                    React.createElement(Column, { size: 4, order: 'first' },
                        React.createElement(Item, { style: styles.inputSearch },
                            React.createElement(Icon, { name: 'ios-search' }),
                            React.createElement(Input, { placeholder: '記事を探す' }))),
                    React.createElement(Column, { size: 1, style: { justifyContent: 'center' }, order: 'last' },
                        React.createElement(TouchableOpacity, { style: [styles.btnPerson] },
                            React.createElement(Badge, { text: 1 }),
                            React.createElement(Icon, { style: { color: STYLE_REF.RED }, type: 'mat', name: 'account-outline' }))))),
            React.createElement(ScrollableTabView, { initialPage: 1, renderTabBar: () => React.createElement(CustomTab, null) },
                React.createElement(View, { style: { flex: 1 }, tabLabel: 'ランキング' },
                    React.createElement(ListArticleWithRank, null)),
                React.createElement(View, { style: { flex: 1 }, tabLabel: 'ピックアップ' },
                    React.createElement(Content, null,
                        React.createElement(View, { style: { height: 250 } },
                            React.createElement(SwiperComponent, { type: 1 })),
                        React.createElement(Section, null,
                            React.createElement(DashedTitle, { text: '注目のキーワード' }),
                            React.createElement(Row, { centered: true },
                                React.createElement(SwiperComponent, { type: 2 }))),
                        React.createElement(Section, null,
                            React.createElement(TopArticle, { background: MaskGroup6, CookingImage: Group299, iconUser: Group281 })),
                        React.createElement(Section, null,
                            React.createElement(DashedTitle, { text: 'ピックアップコンテンツ' }),
                            React.createElement(View, null,
                                React.createElement(ImageBackground, { source: MaskGroup12, resizeMode: 'stretch', style: { width: STYLE_REF.INNER_CONTENT, height: 140 } },
                                    React.createElement(View, { style: { flex: 0.75 } }),
                                    React.createElement(View, { style: { flex: 0.25, flexDirection: 'row', width: '20%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5 } },
                                        React.createElement(Image, { source: star, resizeMode: "contain" }),
                                        React.createElement(Text, { style: { color: '#945D60', fontSize: 12, paddingLeft: 8, fontWeight: '600' } }, '特集'))),
                                React.createElement(P, { bold: true }, '100均リメイク雑貨特集 100均リメイク雑貨特集'),
                                React.createElement(Small, null, 'ダイソーやセリアなど100均のリメイク雑貨が勢ぞろい！みなさんもお休みにチャレンジしてみませんか？')),
                            React.createElement(View, null,
                                React.createElement(ImageBackground, { source: MaskGroup13, resizeMode: 'stretch', style: { width: STYLE_REF.INNER_CONTENT, height: 140 } },
                                    React.createElement(View, { style: { flex: 0.75 } }),
                                    React.createElement(View, { style: { flex: 0.25, flexDirection: 'row', width: '20%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5 } },
                                        React.createElement(Image, { source: star, resizeMode: "contain" }),
                                        React.createElement(Text, { style: { color: '#945D60', fontSize: 12, paddingLeft: 8, fontWeight: '600' } }, '特集'))),
                                React.createElement(P, { bold: true }, '2017年もっとも見られたDIYリメイク・アイデア12'),
                                React.createElement(Small, null, '2017年にもっとも見られたDIYリメイク・アイデア記事12選を特集しました。 ダイソーやセリアも手に入らない商品などもありますので、来年の再販などの参考にも役立てくださいね！'))),
                        React.createElement(Section, null,
                            React.createElement(Row, { marginBottom: 10 },
                                React.createElement(Column, { size: 1, order: 'first' },
                                    React.createElement(ImageBackground, { source: MaskGroup14, resizeMode: 'stretch', style: { height: 120 } },
                                        React.createElement(View, { style: { flex: 0.75 } }),
                                        React.createElement(View, { style: { flex: 0.25, flexDirection: 'row', width: '50%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5 } },
                                            React.createElement(Image, { source: star, resizeMode: "contain" }),
                                            React.createElement(Text, { style: { color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600' } }, 'インテリア')))),
                                React.createElement(Column, { size: 1, order: 'last' },
                                    React.createElement(P, { bold: true }, '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単'),
                                    React.createElement(Small, null, 'and_me'))),
                            React.createElement(Row, { marginBottom: 10 },
                                React.createElement(Column, { size: 1, order: 'first' },
                                    React.createElement(ImageBackground, { source: MaskGroup16, resizeMode: 'stretch', style: { height: 120 } },
                                        React.createElement(View, { style: { flex: 0.75 } }),
                                        React.createElement(View, { style: { flex: 0.25, flexDirection: 'row', width: '50%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5 } },
                                            React.createElement(Image, { source: star, resizeMode: "contain" }),
                                            React.createElement(Text, { style: { color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600' } }, 'インテリア')))),
                                React.createElement(Column, { size: 1, order: 'last' },
                                    React.createElement(P, { bold: true }, 'スワロフスキーと押し花で作るスマホカバー！！'),
                                    React.createElement(Small, null, 'saya05')))),
                        React.createElement(Section, null,
                            React.createElement(Row, null,
                                React.createElement(Column, { size: 1, oreder: 'first' },
                                    React.createElement(ImageBackground, { source: MaskGroup17, resizeMode: 'stretch', style: { width: '100%', height: 140, marginRight: 5 } },
                                        React.createElement(View, { style: { flex: 0.8 } }),
                                        React.createElement(View, { style: { flex: 0.2, flexDirection: 'row', width: '35%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5 } },
                                            React.createElement(Image, { source: star, resizeMode: "contain" }),
                                            React.createElement(Text, { style: { color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600' } }, '動画'))),
                                    React.createElement(P, { bold: true }, 'ディアウォールで壁面の収納棚をつくる！Vol.2「賃貸」完結編'),
                                    React.createElement(Small, null, 'SKAPA')),
                                React.createElement(Column, { size: 1, order: 'last' },
                                    React.createElement(ImageBackground, { source: MaskGroup17, resizeMode: 'stretch', style: { width: '100%', height: 140, marginLeft: 5 } },
                                        React.createElement(View, { style: { flex: 0.8 } }),
                                        React.createElement(View, { style: { flex: 0.2, flexDirection: 'row', width: '35%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5 } },
                                            React.createElement(Image, { source: star, resizeMode: "contain" }),
                                            React.createElement(Text, { style: { color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600' } }, '動画'))),
                                    React.createElement(P, { bold: true }, 'ディアウォールで壁面の収納棚をつくる！Vol.2「賃貸」完結編'),
                                    React.createElement(Small, null, 'SKAPA')))),
                        React.createElement(Section, null,
                            React.createElement(Row, { marginBottom: 10 },
                                React.createElement(Column, { size: 1, order: 'first' },
                                    React.createElement(ImageBackground, { source: MaskGroup14, resizeMode: 'stretch', style: { height: 120 } },
                                        React.createElement(View, { style: { flex: 0.75 } }),
                                        React.createElement(View, { style: { flex: 0.25, flexDirection: 'row', width: '50%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5 } },
                                            React.createElement(Image, { source: star, resizeMode: "contain" }),
                                            React.createElement(Text, { style: { color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600' } }, 'インテリア')))),
                                React.createElement(Column, { size: 1, order: 'last' },
                                    React.createElement(P, { bold: true }, '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単'),
                                    React.createElement(Small, null, 'and_me')))),
                        React.createElement(Section, null,
                            React.createElement(Row, null,
                                React.createElement(Column, { size: 1, oreder: 'first' },
                                    React.createElement(ImageBackground, { source: MaskGroup17, resizeMode: 'stretch', style: { width: '100%', height: 140, marginRight: 5 } },
                                        React.createElement(View, { style: { flex: 0.8 } }),
                                        React.createElement(View, { style: { flex: 0.2, flexDirection: 'row', width: '35%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5 } },
                                            React.createElement(Image, { source: star, resizeMode: "contain" }),
                                            React.createElement(Text, { style: { color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600' } }, '動画'))),
                                    React.createElement(P, { bold: true }, 'ディアウォールで壁面の収納棚をつくる！Vol.2「賃貸」完結編'),
                                    React.createElement(Small, null, 'SKAPA')),
                                React.createElement(Column, { size: 1, order: 'last' },
                                    React.createElement(ImageBackground, { source: MaskGroup17, resizeMode: 'stretch', style: { width: '100%', height: 140, marginLeft: 5 } },
                                        React.createElement(View, { style: { flex: 0.8 } }),
                                        React.createElement(View, { style: { flex: 0.2, flexDirection: 'row', width: '35%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5 } },
                                            React.createElement(Image, { source: star, resizeMode: "contain" }),
                                            React.createElement(Text, { style: { color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600' } }, '動画'))),
                                    React.createElement(P, { bold: true }, 'ディアウォールで壁面の収納棚をつくる！Vol.2「賃貸」完結編'),
                                    React.createElement(Small, null, 'SKAPA'))),
                            React.createElement(Row, null,
                                React.createElement(Column, { size: 1, oreder: 'first' },
                                    React.createElement(ImageBackground, { source: MaskGroup17, resizeMode: 'stretch', style: { width: '100%', height: 140, marginRight: 5 } },
                                        React.createElement(View, { style: { flex: 0.8 } }),
                                        React.createElement(View, { style: { flex: 0.2, flexDirection: 'row', width: '35%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5 } },
                                            React.createElement(Image, { source: star, resizeMode: "contain" }),
                                            React.createElement(Text, { style: { color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600' } }, '動画'))),
                                    React.createElement(P, { bold: true }, 'ディアウォールで壁面の収納棚をつくる！Vol.2「賃貸」完結編'),
                                    React.createElement(Small, null, 'SKAPA')),
                                React.createElement(Column, { size: 1, order: 'last' },
                                    React.createElement(ImageBackground, { source: MaskGroup17, resizeMode: 'stretch', style: { width: '100%', height: 140, marginLeft: 5 } },
                                        React.createElement(View, { style: { flex: 0.8 } }),
                                        React.createElement(View, { style: { flex: 0.2, flexDirection: 'row', width: '35%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5 } },
                                            React.createElement(Image, { source: star, resizeMode: "contain" }),
                                            React.createElement(Text, { style: { color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600' } }, '動画'))),
                                    React.createElement(P, { bold: true }, 'ディアウォールで壁面の収納棚をつくる！Vol.2「賃貸」完結編'),
                                    React.createElement(Small, null, 'SKAPA')))))),
                React.createElement(View, { style: { flex: 1 }, tabLabel: 'ピックアップ' },
                    React.createElement(ListArticles, null)),
                React.createElement(View, { style: { flex: 1 }, tabLabel: '手芸' }),
                React.createElement(View, { style: { flex: 1 }, tabLabel: 'DIY' }),
                React.createElement(View, { style: { flex: 1 }, tabLabel: 'インテリア' }),
                React.createElement(View, { style: { flex: 1 }, tabLabel: '料理' }),
                React.createElement(View, { style: { flex: 1 }, tabLabel: 'ファッション' }),
                React.createElement(View, { style: { flex: 1 }, tabLabel: '連載' },
                    React.createElement(ListArticleSerialize, null)))));
    }
}
export default Home;
//# sourceMappingURL=index.js.map