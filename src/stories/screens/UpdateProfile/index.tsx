import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Text, Input} from 'native-base';
import MaskGroup122 from '../../../../assets/images/MaskGroup122.png';
import {P, Small, Icon, Row, H3} from '../../../components/common';
import STYLE_REF from '../../../components/variables';

// import styles from './styles';

class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left style={{flex: 0.2, alignItems: 'center'}}>
                        <P>{'キャンセル'}</P>
                    </Left>
                    <Body style={{flex: 0.6, alignItems: 'center'}}>
                        <H3 style={{color: STYLE_REF.RED}}>{'プロフィール変更'}</H3>
                    </Body>
                    <Right style={{flex: 0.2, alignItems: 'center'}}>
						<H3 style={{color: STYLE_REF.RED}}>{'保存'}</H3>
                    </Right>
                </Header>
                <Content style={ { backgroundColor: STYLE_REF.WHITE } }>
                    <Row style={ { backgroundColor: STYLE_REF.LIGHT_WHITE, height: 45 } }
                         centered>
                        <P bold>{'画像を選択'}</P>
                    </Row>
                    <View>

                        {/*TODO: Make Component Based On This TouchableOpacity element - Should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F6F6F6'}}>
                            <View style={{flex: 0.7, paddingLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={MaskGroup122} style={{height: 35, width: 35}} />
								<Small style={ { color:STYLE_REF.BLACK } }>{'プロフィール変更'}</Small>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color: STYLE_REF.LIGHT_GRAY }} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

						{/*TODO: Make Component Based On This TouchableOpacity element - Should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F6F6F6'}}>
                            <View style={{flex: 0.7, paddingLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={MaskGroup122} style={{height: 35, width: 35}} />
                                <Small style={ { color: STYLE_REF.BLACK } }>{'メルマガ受信設定'}</Small>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color: STYLE_REF.LIGHT_GRAY }} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

                    </View>

					<Row centered style={{ backgroundColor: STYLE_REF.LIGHT_WHITE, height: 45 }}>
						<P bold>{'基本情報'}</P>
                    </Row>
                    <View>
						{/*TODO: Make Component Based On This TouchableOpacity element - Should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F6F6F6'}}>
                            <View style={{flex: 0.7, paddingLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{flex: 0.5}}>
                                    <Small>{'ニックネーム'}</Small>
                                </View>
                                <View style={{flex: 0.5}}>
									<Small style={{color: STYLE_REF.BLACK}}>{'http://'}</Small>
                                </View>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color: STYLE_REF.LIGHT_GRAY}} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

						{/*TODO: Make Component Based On This TouchableOpacity element - Should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F6F6F6'}}>
                            <View style={{flex: 0.7, paddingLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{flex: 0.5}}>
                                    <Small>{'自分のサイト'}</Small>
                                </View>
                                <View style={{flex: 0.5}}>
									<Small style={{color: STYLE_REF.BLACK}}>{'http://'}</Small>
                                </View>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color: '#CCCCCC'}} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

						{/*TODO: Make Component Based On This TouchableOpacity element - Should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F6F6F6'}}>
                            <View style={{flex: 0.7, paddingLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{flex: 0.5}}>
                                    <Small>{'Instagram'}</Small>
                                </View>
                                <View style={{flex: 0.5}}>
									<Small style={{color: STYLE_REF.BLACK}}>{'http://'}</Small>
                                </View>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color: STYLE_REF.LIGHT_GRAY}} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

						{/*TODO: Make Component Based On This TouchableOpacity element - Should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F6F6F6'}}>
                            <View style={{flex: 0.7, paddingLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{flex: 0.5}}>
									<Small>{'Twitter'}</Small>
                                </View>
                                <View style={{flex: 0.5}}>
									<Small style={{color: STYLE_REF.BLACK}}>{'http://'}</Small>
                                </View>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color: STYLE_REF.LIGHT_GRAY}} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

						{/*TODO: Make Component Based On This TouchableOpacity element - Should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F6F6F6'}}>
                            <View style={{flex: 0.7, paddingLeft: 20, flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{flex: 0.5}}>
                                    <Small>{'Facebook'}</Small>
                                </View>
                                <View style={{flex: 0.5}}>
                                    <Small style={{color: STYLE_REF.BLACK}}>{'http://'}</Small>
                                </View>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color: STYLE_REF.LIGHT_GRAY}} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

                    </View>

					<Row style={ { backgroundColor: STYLE_REF.LIGHT_WHITE, height: 45 } } centered>
                        <P bold>{'自己紹介'}</P>
                    </Row>

                    <View style={{marginBottom: 30}}>
                        <Input multiline={true} style={{height: 120, backgroundColor: STYLE_REF.WHITE}} />
                        <View style={{height: 20, backgroundColor: STYLE_REF.WHITE, borderBottomWidth: 1, borderBottomColor: STYLE_REF.BORDER_COLOR, alignItems: 'flex-end'}}>
                            <Small style={ { color: STYLE_REF.RED } } bold>{'0/250文字'}</Small>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default UpdateProfile;
