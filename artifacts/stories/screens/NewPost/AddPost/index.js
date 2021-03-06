import * as React from 'react';
import { View, Container, Header, Left, Right, Body, Content, Text } from 'native-base';
import { Image, WebView } from 'react-native';
import { OptionLabel, DashedTitle, ImageOptionLabel, Gap, H1, H2, H3, P, Small, Hr, Row, Column, Icon, CustomButton, Section, } from '../../../../components/common';
import { PostEditGroup } from '../../../../components/layout';
import styles from './styles';
class AddPost extends React.Component {
    render() {
        return (React.createElement(Container, { style: styles.containerStyle },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Text, null, "\u30AD\u30E3\u30F3\u30BB\u30EB")),
                React.createElement(Body, null),
                React.createElement(Right, null,
                    React.createElement(Text, null, "\u4FDD\u5B58\u3059\u308B"))),
            React.createElement(Content, null,
                React.createElement(View, null,
                    React.createElement(OptionLabel, { label: 'タイトル', currentValue: '未入力', onPress: true }),
                    React.createElement(OptionLabel, { label: 'カテゴリを選択', currentValue: '', onPress: true })),
                React.createElement(Gap, { height: 40 }),
                React.createElement(View, null,
                    React.createElement(DashedTitle, { text: 'メイン写真' }),
                    React.createElement(ImageOptionLabel, { imgSrc: require('../../../../../assets/images/NewPost/images/icons/mountain.png'), imgAlt: 'Hello World' })),
                React.createElement(Gap, { height: 40 }),
                React.createElement(View, null,
                    React.createElement(DashedTitle, { text: '記事の内容' }),
                    React.createElement(Gap, { height: 20 }),
                    React.createElement(View, null,
                        React.createElement(CustomButton, { type: 'ghost', btnText: '記事の最初に追加' },
                            React.createElement(Icon, { name: 'ios-add', style: { fontSize: 30, color: '#945D60' } }))),
                    React.createElement(Gap, { height: 5 }),
                    React.createElement(PostEditGroup, null,
                        React.createElement(Section, null,
                            React.createElement(H1, { style: { color: '#945D60' } }, "\u4E21\u9762\u30C6\u30FC\u30D7\u3067\u7F8A\u6BDB\u30D5\u30A7\u30EB\u30C8\u3092\u306F\u308B2x4\u6750\u306E\u57FA\u790E\u3092\u4F5C\u308B"))),
                    React.createElement(Gap, { height: 5 }),
                    React.createElement(PostEditGroup, null,
                        React.createElement(Section, null,
                            React.createElement(P, null, "\u3053\u306E\u8A18\u4E8B\u306F\u300C\u30C7\u30A3\u30A2\u30A6\u30A9\u30FC\u30EB\u3067\u58C1\u9762\u306E\u53CE\u7D0D\u68DA\u3092\u3064\u304F\u308B\uFF01Vol.1\u300C\u8CC3\u8CB8\u300D\u300D\u306E\u7D9A\u304D\u3067\u3059\u3002 \u524D\u56DE\u306F\u58C1\u306E\u57FA\u790E\u3068\u306A\u308B2\u00D74\u6750\u3092\u5857\u88C5\u3059\u308B\u3068\u3053\u308D\u307E\u3067\u884C\u3044\u307E\u3057\u305F\u3002 \u4ECA\u56DE\u306F\u4E00\u6C17\u306B\u5B8C\u6210\u307E\u3067\u3092\u4E00\u6319\u306B\u3054\u7D39\u4ECB\u3044\u305F\u3057\u307E\u3059\u3002"))),
                    React.createElement(Gap, { height: 5 }),
                    React.createElement(PostEditGroup, null,
                        React.createElement(Section, null,
                            React.createElement(Image, { source: require('../../../../../assets/images/NewPost/images/AddPost/Image75.png'), style: { width: '100%' } }))),
                    React.createElement(Gap, { height: 5 }),
                    React.createElement(PostEditGroup, null,
                        React.createElement(Section, null,
                            React.createElement(H2, null, "\u4E21\u9762\u30C6\u30FC\u30D7\u3067\u7F8A\u6BDB\u30D5\u30A7\u30EB\u30C8\u3092\u306F\u308B2x4\u6750\u306E\u57FA\u790E\u3092\u4F5C\u308B"),
                            React.createElement(P, { style: { color: '#8B8B8B' } }, "\u4E21\u9762\u30C6\u30FC\u30D7\u3067\u7F8A\u6BDB\u30D5\u30A7\u30EB\u30C8\u3092\u306F\u308B2x4\u6750\u306E\u57FA\u790E\u3092\u4F5C\u308B"),
                            React.createElement(P, null, "\u4E21\u9762\u30C6\u30FC\u30D7\u3067\u7F8A\u6BDB\u30D5\u30A7\u30EB\u30C8\u3092\u306F\u308B2x4\u6750\u306E\u57FA\u790E\u3092\u4F5C\u308B"))),
                    React.createElement(Gap, { height: 5 }),
                    React.createElement(PostEditGroup, null,
                        React.createElement(Section, null,
                            React.createElement(Image, { source: require('../../../../../assets/images/NewPost/images/AddPost/Image75.png'), style: { width: '100%', marginBottom: 5 } }),
                            React.createElement(Small, null,
                                React.createElement(Icon, { name: 'instagram', type: 'fa', style: { fontSize: 14 } }),
                                " mii_wear"),
                            React.createElement(P, null, "\u4E21\u9762\u30C6\u30FC\u30D7\u3067\u7F8A\u6BDB\u30D5\u30A7\u30EB\u30C8\u3092\u306F\u308B2x4\u6750\u306E\u57FA\u790E\u3092\u4F5C\u308B"))),
                    React.createElement(Gap, { height: 5 }),
                    React.createElement(PostEditGroup, null,
                        React.createElement(Section, null,
                            React.createElement(H1, { textType: 'h1' }, "\u4E21\u9762\u30C6\u30FC\u30D7"),
                            React.createElement(Hr, { marginTop: 10 }))),
                    React.createElement(Gap, { height: 5 }),
                    React.createElement(PostEditGroup, null,
                        React.createElement(Section, null,
                            React.createElement(Image, { source: require('../../../../../assets/images/NewPost/images/AddPost/Image75.png'), style: { width: '100%', marginBottom: 5 } }),
                            React.createElement(Small, null, "\u4F5C\u308B weboo.link"),
                            React.createElement(P, null, "\u4E21\u9762\u30C6\u30FC\u30D7\u3067\u7F8A\u6BDB\u30D5\u30A7\u30EB\u30C8\u3092\u306F\u308B2x4\u6750\u306E\u57FA\u790E\u3092\u4F5C\u308B"))),
                    React.createElement(Gap, { height: 5 }),
                    React.createElement(PostEditGroup, null,
                        React.createElement(Section, null,
                            React.createElement(Row, null,
                                React.createElement(Column, { size: 1, order: 'first' },
                                    React.createElement(Image, { source: require('../../../../../assets/images/NewPost/images/AddPost/Image75.png'), style: { width: '100%', marginBottom: 5 } })),
                                React.createElement(Column, { size: 2, order: 'last' },
                                    React.createElement(H3, { textType: 'h3' }, "\u5098\u305F\u3066\u4ED8\u304D\u30B7\u30E5\u30FC\u30BA\u30E9\u30C3\u30AF"),
                                    React.createElement(H1, { textType: 'h1' }, "\u00A52,187"),
                                    React.createElement(P, null, "\u3053\u308C\u4E00\u3064P\u3067\u7384\u95A2\u3082\u30B9\u30C3\u30AD\u30EA\u89E3\u6D88\uFF01\u306A\u3093\u30681\u8DB3\u5206\u306E\u53CE\u7D0D\u30B9\u30DA\u30FC\u30B9\u306B12\u8DB3\u3082\u53CE\u7D0D\u3067\u304D\u308B\u3093\u3067\u3059\u7701\u30B9\u30DA\u30FC\u30B9\u8A2D\u8A08\u306E\u30B7\u30E5\u30FC\u30BA\u30E9\u30C3\u30AF\u3067\u3059\u3002"),
                                    React.createElement(Gap, { height: 15 }),
                                    React.createElement(CustomButton, { btnText: '商品を見る', btnStyle: 'default' }))))),
                    React.createElement(Gap, { height: 5 }),
                    React.createElement(PostEditGroup, null,
                        React.createElement(Section, null,
                            React.createElement(View, null,
                                React.createElement(CustomButton, { btnText: '商品を見る', type: 'disabled', block: false, disabled: true })))),
                    React.createElement(Gap, { height: 5 }),
                    React.createElement(PostEditGroup, null,
                        React.createElement(Section, null,
                            React.createElement(View, null,
                                React.createElement(CustomButton, { btnText: '商品を見る', btnStyle: 'default', block: false })))),
                    React.createElement(Gap, { height: 5 }),
                    React.createElement(PostEditGroup, null,
                        React.createElement(Section, null,
                            React.createElement(View, null,
                                React.createElement(WebView, { style: { width: 400, height: 300 }, javaScriptEnabled: true, domStorageEnabled: true, source: { uri: "https://www.youtube.com/embed/vM6T5s6HlTg" } }))))))));
    }
}
export default AddPost;
//# sourceMappingURL=index.js.map