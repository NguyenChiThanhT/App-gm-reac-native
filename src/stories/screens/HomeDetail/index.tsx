import * as React from 'react';
import {Container} from 'native-base';
import {View, Content, Text } from 'native-base';

import { ImageBackground } from 'react-native';
import {
	PostItemSmall2, GroupButtonFavorateStar, HeaderFavoriteShare,
	Icon, P, Small, DashedTitle, Tag, FollowerItem, Section
} from '../../../components/common';
import styles from './styles';
import STYLE_REF from '../../../components/variables';

export interface Props {
	navigation: any;
}

export interface State {
}

class HomeDetail extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<HeaderFavoriteShare title={'パリ在住のシェフ：Carrie Solomo…'}/>
				<Content style={styles.container}>
					<Section>
						<ImageBackground source={require('../../../../assets/images/MaskGroup56.png')}
										 style={{width: '100%', height: 225, justifyContent: 'flex-end'}}>
							<View style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								width: 54,
								height: 22,
								marginLeft: 10,
								borderTopRightRadius: 5,
								backgroundColor: '#FFF',
							}}>
								<Icon style={{ color: STYLE_REF.RED, fontSize: 14 }} type={'line'} name='pencil'/>
								<P style={{fontSize: 11, color: STYLE_REF.RED}} bold>連載</P>
							</View>
						</ImageBackground>
					</Section>

					<Section>
						<Text style={styles.articleTitle}>パリ在住のシェフ：Carrie Solomon The Socialite Familyシリーズ</Text>
						<Text style={styles.textDescription}>
							連載１回目はThe Socialite Familyが送る、パリに住んでいるシェフ、フォトグラファー、
							ライターとしてELLEやNew York Timesなどで活動しているCarrie Solomonのインタビュー記事とおすすめレシピをお届けします。
						</Text>

						<FollowerItem
									authorID={1}
									authorName={'Carrie Solomon'}
									authorAvatar={require('../../../../assets/images/avatar.png') }
									followed={true}/>


						<GroupButtonFavorateStar numberOfHeart={45} numberOfStar={2645} />
						<View style={{alignItems: 'flex-end'}}>
							<Small style={styles.createAt}>作成：2018.1.23</Small>
						</View>
                    </Section>
					<Section>
						<P>
							The Socialite Familyをご存じですか？The Socialite Familyはフランスの情報サイトで、インテイリアのデコレーションや現代家族のライフスタイルについて掲載している有名なサイトです。
							今回はThe Socialite Familyが送る、「Chouquettes」という新しいスタイルのビデオシリーズをWEで掲載していきたいと思います。

							CHO NAY RENDER HTML NEFK
						</P>
						<GroupButtonFavorateStar numberOfHeart={45} numberOfStar={2645} />
					</Section>



					{/* Block Relative Keyword*/}
					<Section>
						<DashedTitle text='関連キーワード' />
						<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
							<Tag text={'棚'}/>
							<Tag text={'レジン'}/>
							<Tag text={'デコパージュ'}/>
							<Tag text={'樹脂粘土'}/>
							<Tag text={'ステッチ'}/>
							<Tag text={'お弁当'}/>
							<Tag text={'リフォーム'}/>
						</View>
					</Section>
					{/* END Block Relative Keyword*/}

					{/* Block Relative Article*/}
					<Section>
						<DashedTitle text='関連記事' />
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
						<DashedTitle text='おすすめ記事' />
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
						<DashedTitle text='人気記事' />
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
			</Container>
		);
	}
}

export default HomeDetail;
