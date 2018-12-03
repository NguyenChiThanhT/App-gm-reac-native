import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Text} from 'native-base';
import {CustomButton, Gap, H3, Icon, P, Row, Small,} from '../../../components/common';
import MaskGroup122 from '../../../../assets/images/MaskGroup122.png';
import STYLE_REF from '../../../components/variables';

// import styles from './styles';

class ProfileDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon style={{color: '#945D60', fontSize: 22}} name={'ios-arrow-back'}/>
                    </Left>
                    <Body>
                        <H3 style={{color: STYLE_REF.RED }}>{'まい1220'}</H3>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: STYLE_REF.WHITE, paddingVertical: 30}}>
                        <View>
                            <Image source={MaskGroup122} resizeMode={'contain'} />
                        </View>
                        <Gap height={15}/>
                        <CustomButton btnText={'マイページを見る'}
                            block={false}
                            type={'ghost'}
                            size={'sm'}/>
                    </View>

					<Row style={ { backgroundColor: STYLE_REF.LIGHT_WHITE, height: 45 } } centered>
						<P bold>{'アカウント'}</P>
					</Row>

                    <View>
                        {/*TODO: Create Component Base on this TouchableOpacity element - This should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: STYLE_REF.WHITE, borderBottomWidth: 1, borderBottomColor: STYLE_REF.BORDER_COLOR}}>
                            <View style={{flex: 0.7, paddingLeft: 20}}>
                                <Text style={{fontSize: 12}}>{'プロフィール変更'}</Text>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color:  STYLE_REF.LIGHT_GRAY }} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

						{/*TODO: Create Component Base on this TouchableOpacity element - This should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: STYLE_REF.WHITE, borderBottomWidth: 1, borderBottomColor: STYLE_REF.BORDER_COLOR}}>
                            <View style={{flex: 0.7, paddingLeft: 20}}>
                                <Text style={{fontSize: 12}}>{'メルマガ受信設定'}</Text>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color:  STYLE_REF.LIGHT_GRAY }} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

						{/*TODO: Create Component Base on this TouchableOpacity element - This should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: STYLE_REF.WHITE, borderBottomWidth: 1, borderBottomColor: STYLE_REF.BORDER_COLOR}}>
                            <View style={{flex: 0.7, paddingLeft: 20}}>
                                <Text style={{fontSize: 12}}>{'メールアドレス変更'}</Text>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color:  STYLE_REF.LIGHT_GRAY }} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

						{/*TODO: Create Component Base on this TouchableOpacity element - This should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: STYLE_REF.WHITE, borderBottomWidth: 1, borderBottomColor: STYLE_REF.BORDER_COLOR}}>
                            <View style={{flex: 0.7, paddingLeft: 20}}>
                                <Text style={{fontSize: 12}}>{'パスワード変更'}</Text>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color:  STYLE_REF.LIGHT_GRAY }} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

						{/*TODO: Create Component Base on this TouchableOpacity element - This should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: STYLE_REF.WHITE, borderBottomWidth: 1, borderBottomColor: STYLE_REF.BORDER_COLOR}}>
                            <View style={{flex: 0.7, paddingLeft: 20}}>
                                <Text style={{fontSize: 12}}>{'プッシュ通知設定'}</Text>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color:  STYLE_REF.LIGHT_GRAY }} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

						{/*TODO: Create Component Base on this TouchableOpacity element - This should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: STYLE_REF.WHITE, borderBottomWidth: 1, borderBottomColor: STYLE_REF.BORDER_COLOR}}>
                            <View style={{flex: 0.7, paddingLeft: 20}}>
                                <Text style={{fontSize: 12}}>{'ログアウト'}</Text>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color:  STYLE_REF.LIGHT_GRAY }} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>
                    </View>

					<Row style={ { backgroundColor: STYLE_REF.LIGHT_WHITE, height: 45 } } centered>
						<P bold>{'サポート'}</P>
					</Row>

                    <View>

						{/*TODO: Create Component Base on this TouchableOpacity element - This should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: STYLE_REF.WHITE, borderBottomWidth: 1, borderBottomColor: STYLE_REF.BORDER_COLOR}}>
                            <View style={{flex: 0.7, paddingLeft: 20}}>
								<Small style={{color: STYLE_REF.BLACK}}>{'要望・不具合の報告'}</Small>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color:  STYLE_REF.LIGHT_GRAY }} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

						{/*TODO: Create Component Base on this TouchableOpacity element - This should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: STYLE_REF.WHITE, borderBottomWidth: 1, borderBottomColor: STYLE_REF.BORDER_COLOR}}>
                            <View style={{flex: 0.7, paddingLeft: 20}}>
								<Small style={{color: STYLE_REF.BLACK}}>{'よくある質問'}</Small>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color:  STYLE_REF.LIGHT_GRAY }} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>
                    </View>

					<Row style={ { backgroundColor: STYLE_REF.LIGHT_WHITE, height: 45 } } centered>
                        <P bold>{'ウィーブーについて'}</P>
                    </Row>

                    <View>
						{/*TODO: Create Component Base on this TouchableOpacity element - This should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: STYLE_REF.WHITE, borderBottomWidth: 1, borderBottomColor: STYLE_REF.BORDER_COLOR}}>
                            <View style={{flex: 0.7, paddingLeft: 20}}>
								<Small style={{color: STYLE_REF.BLACK}}>{'利用規約'}</Small>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color:  STYLE_REF.LIGHT_GRAY }} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

						{/*TODO: Create Component Base on this TouchableOpacity element - This should belong to form category components */}
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 48, backgroundColor: STYLE_REF.WHITE, borderBottomWidth: 1, borderBottomColor: STYLE_REF.BORDER_COLOR}}>
                            <View style={{flex: 0.7, paddingLeft: 20}}>
                                <Small style={{color: STYLE_REF.BLACK}}>{'プライバシーポリシー'}</Small>
                            </View>
                            <View style={{flex: 0.3, alignItems: 'flex-end', paddingRight: 20}}>
                                <Icon style={{fontSize: 20, color:  STYLE_REF.LIGHT_GRAY }} name={'ios-arrow-forward'} />
                            </View>
                        </TouchableOpacity>

                    </View>
                </Content>
            </Container>
        );
    }
}

export default ProfileDetail;
