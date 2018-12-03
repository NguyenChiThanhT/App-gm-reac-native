import * as React from 'react';
import {
	View,
	Container,
	Header,
	Left,
	Right,
	Body,
	Content,
	Text
} from 'native-base';
import {Image, WebView} from 'react-native';
import { OptionLabel, DashedTitle, ImageOptionLabel,
	Gap, H1, H2, H3, P, Small, Hr, Row, Column,
	Icon, CustomButton, Section,
} from '../../../../components/common';

import { PostEditGroup } from '../../../../components/layout';

import styles from './styles';

export interface Props {
	navigation: any;
}

export interface State {
}

class AddPost extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.containerStyle}>
				<Header>
					<Left>
						<Text>キャンセル</Text>
					</Left>
					<Body/>
					<Right>
						<Text>保存する</Text>
					</Right>
				</Header>
				<Content>
					<View>
						<OptionLabel label='タイトル'
												 currentValue='未入力'
												 onPress/>
						<OptionLabel label='カテゴリを選択'
												 currentValue=''
												 onPress/>
					</View>
					<Gap height={40}/>
					<View>
						<DashedTitle text='メイン写真'/>
						<ImageOptionLabel imgSrc={require('../../../../../assets/images/NewPost/images/icons/mountain.png')}
															imgAlt={'Hello World'}/>
					</View>
					<Gap height={40}/>
					<View>
						<DashedTitle text='記事の内容'/>
						<Gap height={20}/>
						<View>
							<CustomButton type={'ghost'} btnText='記事の最初に追加'>
								<Icon name='ios-add' style={{fontSize: 30, color: '#945D60'}}/>
							</CustomButton>
						</View>
						<Gap height={5}/>
						<PostEditGroup>
							<Section>
								<H1 style={ {color: '#945D60'} }>
									両面テープで羊毛フェルトをはる2x4材の基礎を作る
								</H1>
							</Section>
						</PostEditGroup>
						<Gap height={5}/>
						<PostEditGroup>
							<Section>
								<P>
									この記事は「ディアウォールで壁面の収納棚をつくる！Vol.1「賃貸」」の続きです。
									前回は壁の基礎となる2×4材を塗装するところまで行いました。

									今回は一気に完成までを一挙にご紹介いたします。
								</P>
							</Section>
						</PostEditGroup>
						<Gap height={5}/>
						<PostEditGroup>
							<Section>
								<Image source={require('../../../../../assets/images/NewPost/images/AddPost/Image75.png')}
										style={{width: '100%'}}/>
							</Section>
						</PostEditGroup>
						<Gap height={5}/>
						<PostEditGroup>
							<Section>
								<H2>
									両面テープで羊毛フェルトをはる2x4材の基礎を作る
								</H2>
								<P style={{color: '#8B8B8B'}}>
									両面テープで羊毛フェルトをはる2x4材の基礎を作る
								</P>
								<P>
									両面テープで羊毛フェルトをはる2x4材の基礎を作る
								</P>
							</Section>
						</PostEditGroup>
						<Gap height={5}/>
						<PostEditGroup>
							<Section>
								<Image source={require('../../../../../assets/images/NewPost/images/AddPost/Image75.png')}
											 style={{width: '100%', marginBottom: 5}}/>
								<Small>
									<Icon name='instagram' type='fa' style={{fontSize: 14}}/> mii_wear
								</Small>
								<P>
									両面テープで羊毛フェルトをはる2x4材の基礎を作る
								</P>
							</Section>
						</PostEditGroup>
						<Gap height={5}/>
						<PostEditGroup>
							<Section>
								<H1 textType='h1'>
									両面テープ
								</H1>
								<Hr marginTop={10} />
							</Section>
						</PostEditGroup>
						<Gap height={5}/>
						<PostEditGroup>
							<Section>
								<Image source={require('../../../../../assets/images/NewPost/images/AddPost/Image75.png')}
											 style={{width: '100%', marginBottom: 5}}/>
								<Small>作る weboo.link</Small>
								<P>
									両面テープで羊毛フェルトをはる2x4材の基礎を作る
								</P>
							</Section>
						</PostEditGroup>
						<Gap height={5}/>
						<PostEditGroup>
							<Section>
								<Row>
									<Column size={1} order={'first'}>
										<Image source={require('../../../../../assets/images/NewPost/images/AddPost/Image75.png')}
													 style={{width: '100%', marginBottom: 5}}/>
									</Column>
									<Column size={2} order={'last'}>
										<H3 textType={'h3'}>
											傘たて付きシューズラック
										</H3>
										<H1 textType={'h1'}>
											¥2,187
										</H1>
										<P>
											これ一つPで玄関もスッキリ解消！なんと1足分の収納スペースに12足も収納できるんです省スペース設計のシューズラックです。
										</P>
										<Gap height={15}/>
										<CustomButton btnText={'商品を見る'}
																	btnStyle={'default'}/>
									</Column>
								</Row>
							</Section>
						</PostEditGroup>
						<Gap height={5}/>
						<PostEditGroup>
							<Section>
								<View>
									<CustomButton btnText={'商品を見る'}
																type={'disabled'}
																block=false
																disabled
									/>
								</View>
							</Section>
						</PostEditGroup>
						<Gap height={5}/>
						<PostEditGroup>
							<Section>
								<View>
									<CustomButton btnText={'商品を見る'}
																btnStyle={'default'}
																block={false}/>
								</View>
							</Section>
						</PostEditGroup>
						<Gap height={5}/>
						<PostEditGroup>
							<Section>
								<View>
									<WebView
										style={{width: 400, height: 300}}
										javaScriptEnabled={true}
										domStorageEnabled={true}
										source={{uri: "https://www.youtube.com/embed/vM6T5s6HlTg"}}
									/>
								</View>
							</Section>
						</PostEditGroup>
					</View>
				</Content>
			</Container>
		);
	}
}

export default AddPost;
