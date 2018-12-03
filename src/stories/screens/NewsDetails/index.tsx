import * as React from 'react';
import {Container, Content, Text, Button, View} from 'native-base';
import {Image, WebView} from 'react-native';

import {
	HeaderFavoriteShare, Small, Icon, H1, H2, H3, P, Gap,
	PostItemSmall2, GroupButtonFavorateStar, FollowerItem, Hr,
	Row, Column, CustomButton, DashedTitle, Tag, Section,
} from '../../../components/common';
import styles from './styles';
import STYLE_REF from '../../../components/variables';

export interface Props {
	navigation: any;
}

export interface State {
}

class NewsDetail extends React.Component<Props, State> {
	render() {
		return (
				<Container style={ styles.containerStyle }>
					{/* Header */}
					<HeaderFavoriteShare title={'夏バテに負けない、にんにくを使った…'}/>
					{/* End Header */}

					{/* Content */}
					<Content style={ styles.contentHolderStyle }>
						<Section>
							<H2 style={{color: STYLE_REF.RED }}>ズパゲッティの編み方・素敵な作品総まとめ＜初心者でも＞</H2>
							<P>
								おしゃれなTシャツヤーン『ズパゲッティ』を使った簡単なタッセルから、
								独特の編地が魅力的なフリンジバッグ、ミニクラッッチやスマホケース、ブレスレット、
								ネックレス、ティッシュカバーなどなど沢山の愛でをまとめてご紹介！どれも、詳細な作り方、
								編み方の解説付きなので、気になった作品はすぐに作れますよ。 #ズパゲッティ #編み方
							</P>
							<FollowerItem
								authorID={10}
								authorName={'Carrie Solomon'}
								authorAvatar={require('../../../../assets/images/avatar.png')}
								followed={true}/>
							<GroupButtonFavorateStar numberOfHeart={45} numberOfStar={2645} />

							<View style={{alignItems: 'flex-end'}}>
								<Small>作成：2018.1.23</Small>
							</View>
						</Section>

						<Section>
							<H1 style={{color: STYLE_REF.RED }}>ズパゲッティとは</H1>
							<Gap height={10} />
							<Image source={require('../../../../assets/images/Image101.png')} style={{width: '100%'}}/>
							<Gap height={10} />
							<H3 style={{color: STYLE_REF.BLACK }}>【楽天市場】セット(5玉)</H3>
							<P style={{color: STYLE_REF.GRAY }}>セット(5玉) ズパゲッティ (ランダム) DMC Hoooked Zpagetti</P>
							<P style={{color: STYLE_REF.BLACK }}>コメントコメントコメントコメントコメントコメントコメントコメント</P>
						</Section>

						<Section>
							<Image source={require('../../../../assets/images/Image114.png')}
								   style={{width: '100%', marginBottom: 5}}/>
							<Small>
								<Icon name='instagram' type='fa'  style={{fontSize: 14}} /> mii_wear
							</Small>
							<P>
								オランダ発のTシャツヤーン『ズパゲッティ』。
								もともとは、工場で出た布の端材から作られたリサイクルの糸です。
							</P>
						</Section>

						<Section>
							<H3>「にんにく」とは</H3>
							<Hr/>
							<P>
								にんにくはユリ科ネギ属に属していて、原産地は中央アジアになります。
								国内では青森県や香川県で作られていることが多いですが、生産量としては中国産のにんにくが圧倒的に多数となっています。
								スーパーや八百屋さんなどには通年で売られていますが、新物は5月～9月頃に出回っています。
							</P>
							<Image source={require('../../../../assets/images/Image115.png')}
								   style={{width: '100%', marginBottom: 5}}/>
							<Small>
								出典 weboo.link
							</Small>
						</Section>

						<Section>
							<Row>
								<Column size={1}>
									<Image style={{width: '100%'}} source={require('../../../../assets/images/Image116.png')}/>
								</Column>
								<Column size={3}>
									<H3>傘たて付きシューズラック</H3>
									<H2>¥2,187</H2>
									<P>
										これ一つで玄関もスッキリ解消！なんと1足分の収納スペースに12足も収納できるんです省スペース設計のシューズラックです。
									</P>
									<CustomButton btnText= '商品を見る' block={false}/>
								</Column>
							</Row>
						</Section>

						<Section>
							<CustomButton btnText= 'リンク標準' block={false} type={'disabled'}/>
							<CustomButton btnText= 'リンク強調' block={false}/>
						</Section>

						<Section>
							<Row bordered>
								<Column size={3}>
									<Image style={{width: '100%', maxWidth: '100%'}}
										   width={100}
										   height={100}
										   source={require('../../../../assets/images/Image117.png')}/>
								</Column>
								<Column size={7}>
									<P bold>オランダ発のTシャツヤーン『ズパゲッティ』</P>
								</Column>
							</Row>
						</Section>

						<Section>
							<WebView
									style={{
										width: STYLE_REF.YOUTUBE_WIDTH,
										height: STYLE_REF.YOUTUBE_HEIGHT}}
									javaScriptEnabled={true}
									domStorageEnabled={true}
									source={{uri: 'https://www.youtube.com/embed/vM6T5s6HlTg'}}
							/>
						</Section>

						<GroupButtonFavorateStar numberOfHeart={45} numberOfStar={2645} />

						<Section>
							<View>
								<DashedTitle text={'関連キーワード'} alignText={'left'}/>
							</View>
							<View style={ styles.tagHolder }>
								<Tag text={'棚'} />
								<Tag text={'机'} />
								<Tag text={'レジン'} />
								<Tag text={'デコパージュ'} />
								<Tag text={'樹脂粘土'} />
								<Tag text={'ステッチ'} />
								<Tag text={'お弁当'} />
								<Tag text={'リフォーム'} />
							</View>
							{/* PLACEHOLDER FOR ADS BLOCK */}
							<View style={ styles.adStyle }>
								<Text style={{fontSize: 96, color: '#FFF'}}>AD</Text>
							</View>
							{/* PLACEHOLDER FOR ADS BLOCK */}
						</Section>


						{/* Block Relative Article*/}
						<Section>
							<View>
								<DashedTitle text={'関連記事'} />
							</View>
							<View>
								<PostItemSmall2
									imageSrc={require('../../../../assets/images/MaskGroup14.png')}
									category={'美容'}
									author={'and_me'}
									title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}
								/>
								<PostItemSmall2
									imageSrc={require('../../../../assets/images/MaskGroup14.png')}
									category={'美容'}
									author={'and_me'}
									title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}
								/>
							</View>
						</Section>
						{/* END Block Relative Article */}

						{/* Relative Recomend Article*/}
						<Section>
							<H1>おすすめ記事</H1>
							<View>
								<PostItemSmall2
									imageSrc={require('../../../../assets/images/MaskGroup14.png')}
									category={'美容'}
									author={'and_me'}
									title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}
								/>
								<PostItemSmall2
									imageSrc={require('../../../../assets/images/MaskGroup14.png')}
									category={'美容'}
									author={'and_me'}
									title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}
								/>
								<PostItemSmall2
									imageSrc={require('../../../../assets/images/MaskGroup14.png')}
									category={'美容'}
									author={'and_me'}
									title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}
								/>
							</View>
						</Section>
						{/* END Relative Recomend Article*/}

						{/* Popular Article*/}
						<Section>
							<DashedTitle text={'人気記事'} />
							<View>
								<PostItemSmall2
									imageSrc={require('../../../../assets/images/MaskGroup14.png')}
									category={'美容'}
									author={'and_me'}
									title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}
									top={1}
								/>

								<PostItemSmall2
									imageSrc={require('../../../../assets/images/MaskGroup14.png')}
									category={'美容'}
									author={'and_me'}
									title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}
									top={2}
								/>

								<PostItemSmall2
									imageSrc={require('../../../../assets/images/MaskGroup14.png')}
									category={'美容'}
									author={'and_me'}
									title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}
									top={3}
								/>
							</View>
						</Section>
						{/* END Popular Article */}
					</Content>
					{/* End Content */}

				</Container>
		);
	}
}

export default NewsDetail;
