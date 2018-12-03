import React from 'react';
import {View, Platform, Dimensions} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Text, Form, Item, Label, Input} from 'native-base';

import {Gap} from '../../../components/common/Helper/Gap';
import {DashedTitle} from '../../../components/common/CustomText/DashedTitle';
import TwitterButton from '../../screens/Login/shared/TwitterButton';
import FacebookButton from '../../screens/Login/shared/FacebookButton';
const { width } = Dimensions.get('window');

import styles from './styles';

export interface Props {
	navigation: any;
}

export interface State {
}

class Registry extends React.Component<Props, State> {
	render() {

		return (
				<Container style={styles.container}>
					{/* Header */}
					<Header>
						<Left>
							<Button transparent>
								<Icon style={styles.iconClose} name='close'/>
							</Button>
						</Left>
						<Body style={{marginLeft: Platform.OS === 'ios' ? 0 : 80}}>
						<Title style={styles.title}>ログイン</Title>
						</Body>
						<Right style={{marginRight: Platform.OS === 'ios' ? -10 : -20}}>
							<Button transparent>
								<Text style={styles.btnRight}>会員登録</Text>
							</Button>
						</Right>
					</Header>
					{/* End Header */}

					{/* Content */}
					<View>
						<Form>
							<Item last>
								<Label style={styles.label}>メールアドレス</Label>
								{/*Input into comment is regist*/}
								{/*<Input style={styles.textHolder} placeholder='example@weboo.link'/>*/}

								{/*Input below when user registry error*/}
								<Input style={[styles.textHolder, styles.textError]} value='フォーマットが不正です' placeholder='山田太郎'/>
							</Item>
							<Item last>
								<Label style={styles.label}>パスワード</Label>
								{/*<Input style={styles.textHolder} placeholder='英数字のパスワード'/>*/}

								{/*Input below when user registry error*/}
								<Input style={[styles.textHolder, styles.textError]} value='英字と数字を組み合わせてください' placeholder='英数字のパスワード'/>
							</Item>

						</Form>

						<View style={styles.containerButton}>
							<Button style={[styles.button, styles.btnDefault]}>
								<Text style={styles.textOfBtnRegistration}>ログイン</Text>
							</Button>

							<Button style={[styles.button, styles.btnDefault, styles.btnForgotPassword]}>
								<Text style={styles.textOfBtnForgotPassword}>パスワードをお忘れの方</Text>
							</Button>

							<DashedTitle text={'SNSでログイン'} alignText={'center'}/>
							<TwitterButton/>
							<FacebookButton/>
						</View>

					</View>
					{/* End Content */}
				</Container>
		);
	}
}

export default Registry;
