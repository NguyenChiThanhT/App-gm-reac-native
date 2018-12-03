import React from 'react';
import {View, Platform} from 'react-native';
import {
	Container,
	Header,
	Left,
	Body,
	Right,
	Button,
	Icon,
	Title,
	Text,
	Form,
	Item,
	Label,
	Input,
	Switch,
} from 'native-base';

import styles from './styles';
export interface Props {
	navigation: any;
}
export interface State {}
class Registry extends React.Component<Props, State> {
	render() {

		return (
				<Container style={styles.container}>
					{/* Header */}
					<Header>
						<Left>
							<Button transparent>
								<Icon style={styles.iconClose} name='close' />
							</Button>
						</Left>
						<Body style={{marginLeft: Platform.OS === 'ios' ? 0 : 80}}>
						<Title style={styles.title}>会員登録</Title>
						</Body>
						<Right style={{marginRight: Platform.OS === 'ios' ? -10 : -20}}>
							<Button transparent>
								<Text style={styles.btnRight}>ログイン</Text>
							</Button>
						</Right>
					</Header>
					{/* End Header */}

					{/* Content */}
					<View>
						<Form>
							<Item last>
								<Label style={styles.label}>ユーザ名</Label>
								{/*Input into comment is regist*/}
								{/*<Input style={styles.textHolder} placeholder='山田太郎'/>*/}

								{/*Input below when user registry error*/}
								<Input style={[styles.textHolder, styles.textError]}
											 value='既に登録があるユーザ名です'
											 placeholder='山田太郎'/>
							</Item>
							<Item last>
								<Label style={styles.label}>メールアドレス</Label>
								{/*<Input style={styles.textHolder} placeholder='example@weboo.link'/>*/}

								{/*Input below when user registry error*/}
								<Input style={[styles.textHolder, styles.textError]}
											 value='フォーマットが不正です'
											 placeholder='example@weboo.link'/>
							</Item>
							<Item last>
								<Label style={styles.label}>パスワード</Label>
								{/*<Input style={styles.textHolder} placeholder='英数字のパスワード'/>*/}

								{/*Input below when user registry error*/}
								<Input style={[styles.textHolder, styles.textError]}
											 value='英字と数字を組み合わせてください'
											 placeholder='英数字のパスワード'/>
							</Item>
							<Item last>
								<Text style={styles.description}>Webooからトレンド情報からプレゼントキャペーンのご案内などをしております。</Text>
							</Item>
							<Item last style={styles.emailMagazine}>
								<Label style={styles.label}>メールマガジン</Label>
								<Switch style={styles.switchButton}
												trackColor="#D1BCBE"
												onTintColor='#D1BCBE'
												thumbTintColor='#945D60'
												value={true}/>
							</Item>
						</Form>

						<View style={styles.containerButton}>
							<Text style={styles.textService}>利用規約に同意の上、新規登録をしてください。</Text>
							<Button style={[styles.button, styles.btnDefault, styles.btnRegistration ]}>
								<Text style={styles.textOfBtnRegistration}>会員登録</Text>
							</Button>
						</View>

					</View>
					{/* End Content */}
				</Container>
		);
	}
}

export default Registry;
