import * as React from 'react';
import { Container, Header, Content, Text, Item, Input } from 'native-base';
import {View, Image, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';

import SwiperComponent from './shared/SwiperComponent';
import CustomTab from './shared/CustomTab';
import TopArticle from './shared/TopArticle';
import ScrollableTabView  from 'react-native-scrollable-tab-view';

import {
	DashedTitle, Icon, P, Small, Row, Column, Badge, Section
} from '../../../components/common';
import STYLE_REF from '../../../components/variables';

import styles from './styles';
// @ts-ignore
import Group301 from '../../../../assets/images/Group301.png';
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

export interface Props {
	navigation: any;
	list: any;
}

export interface State {
}

const {width, height} = Dimensions.get('window');

class Home extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
				<Container style={styles.container}>
					<Header style={{alignItems: 'center'}} searchBar>
						<Row>
							<Column size={4} order={'first'}>
								<Item style={styles.inputSearch}>
									<Icon name='ios-search' />
									<Input placeholder='記事を探す' />
								</Item>
							</Column>
							<Column size={1}
									style={{justifyContent: 'center'}}
									order={'last'}>
								<TouchableOpacity style={[styles.btnPerson]}>
									<Badge text={1} />
									<Icon style={{color: STYLE_REF.RED}} type={'mat'} name='account-outline' />
								</TouchableOpacity>
							</Column>
						</Row>
					</Header>
					<ScrollableTabView initialPage={1}
						renderTabBar={() => <CustomTab />}>
						<View style={{flex: 1}} tabLabel='ランキング'>
              <ListArticleWithRank/>
						</View>
						<View style={{flex: 1}} tabLabel='ピックアップ'>
							<Content>
									<View style={{height: 250}}>
										<SwiperComponent type={1} />
									</View>
									{/*/!* Keyword title *!/*/}

									<Section>
										<DashedTitle text='注目のキーワード' />
										{/*/!* keyword content *!/*/}
										<Row centered>
											<SwiperComponent type={2} />
										</Row>
									</Section>

									<Section>
										{/*TODO: recheck this element to make proper component <Top Article/> */}
										<TopArticle background={MaskGroup6} CookingImage={Group299} iconUser={Group281} />
									</Section>

									{/* /!* Keyword title *!/ */}
									<Section>
										<DashedTitle text='ピックアップコンテンツ' />

										{/*TODO: Make component using this <View> - Belong to Post category components */}
										<View>
											<ImageBackground source={MaskGroup12} resizeMode='stretch'
											style={{width: STYLE_REF.INNER_CONTENT, height: 140}}>
												<View style={{flex: 0.75}} />
												<View style={{flex: 0.25, flexDirection: 'row', width: '20%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5}}>
													<Image source={star} resizeMode="contain" />
													<Text style={{color: '#945D60', fontSize: 12, paddingLeft: 8, fontWeight: '600'}}>{'特集'}</Text>
												</View>
											</ImageBackground>
											<P bold>{'100均リメイク雑貨特集 100均リメイク雑貨特集'}</P>
											<Small>{'ダイソーやセリアなど100均のリメイク雑貨が勢ぞろい！みなさんもお休みにチャレンジしてみませんか？'}</Small>
										</View>

										{/*TODO: Make component using this <View> - SEE ABOVE */}
										<View>
											<ImageBackground source={MaskGroup13} resizeMode='stretch'
											style={{width: STYLE_REF.INNER_CONTENT, height: 140}}>
												<View style={{flex: 0.75}} />
												<View style={{flex: 0.25, flexDirection: 'row', width: '20%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5}}>
													<Image source={star} resizeMode="contain" />
													<Text style={{color: '#945D60', fontSize: 12, paddingLeft: 8, fontWeight: '600'}}>{'特集'}</Text>
												</View>
											</ImageBackground>
											<P bold>
												{'2017年もっとも見られたDIYリメイク・アイデア12'}
											</P>
											<Small>
												{'2017年にもっとも見られたDIYリメイク・アイデア記事12選を特集しました。 ダイソーやセリアも手に入らない商品などもありますので、来年の再販などの参考にも役立てくださいね！'}
											</Small>
										</View>

									</Section>

									<Section>
										{/*TODO: Make component using this <View> - Belong to Post category components */}
										<Row marginBottom={10}>
											<Column size={1} order={'first'}>
												<ImageBackground source={MaskGroup14} resizeMode='stretch' style={{height: 120}}>
													<View style={{flex: 0.75}} />
													<View style={{flex: 0.25, flexDirection: 'row', width: '50%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5}}>
														<Image source={star} resizeMode="contain" />
														<Text style={{color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600'}}>{'インテリア'}</Text>
													</View>
												</ImageBackground>
											</Column>
											<Column size={1} order={'last'}>
													<P bold>{'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単'}</P>
													<Small>{'and_me'}</Small>
											</Column>
										</Row>

										{/*TODO: Make component using this <View> - SEE ABOVE */}
										<Row marginBottom={10}>
											<Column size={1} order={'first'}>
												<ImageBackground source={MaskGroup16} resizeMode='stretch' style={{height: 120}}>
													<View style={{flex: 0.75}} />
													<View style={{flex: 0.25, flexDirection: 'row', width: '50%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5}}>
														<Image source={star} resizeMode="contain" />
														<Text style={{color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600'}}>{'インテリア'}</Text>
													</View>
												</ImageBackground>
											</Column>
											<Column size={1} order={'last'}>
												<P bold>{'スワロフスキーと押し花で作るスマホカバー！！'}</P>
												<Small>{'saya05'}</Small>
											</Column>
										</Row>

									</Section>

									<Section>
										<Row>

											{/*TODO: Make component using this <View> - Belong to Post category components */}
											<Column size={1} oreder={'first'}>
												<ImageBackground source={MaskGroup17} resizeMode='stretch' style={{width: '100%', height: 140, marginRight: 5}}>
													<View style={{flex: 0.8}} />
													<View style={{flex: 0.2, flexDirection: 'row', width: '35%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5}}>
														<Image source={star} resizeMode="contain" />
														<Text style={{color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600'}}>{'動画'}</Text>
													</View>
												</ImageBackground>
												<P bold>{'ディアウォールで壁面の収納棚をつくる！Vol.2「賃貸」完結編'}</P>
												<Small>{'SKAPA'}</Small>
											</Column>

											{/*TODO: Make component using this <View> - SEE ABOVE */}
											<Column size={1} order={'last'}>
												<ImageBackground source={MaskGroup17} resizeMode='stretch' style={{width: '100%', height: 140, marginLeft: 5}}>
													<View style={{flex: 0.8}} />
													<View style={{flex: 0.2, flexDirection: 'row', width: '35%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5}}>
														<Image source={star} resizeMode="contain" />
														<Text style={{color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600'}}>{'動画'}</Text>
													</View>
												</ImageBackground>
												<P bold>{'ディアウォールで壁面の収納棚をつくる！Vol.2「賃貸」完結編'}</P>
												<Small>{'SKAPA'}</Small>
											</Column>

										</Row>
									</Section>

									{/*WARNING: THIS CODE IS COPIED FROM ONE OF THE SECTION ABOVE, FOLLOWED TO DO TO CREATE COMPONENTS - CHECK TO DO TASK ABOVE*/}
									<Section>
										{/*TODO: Make component using this <View> - Belong to Post category components */}
										<Row marginBottom={10}>
											<Column size={1} order={'first'}>
												<ImageBackground source={MaskGroup14} resizeMode='stretch' style={{height: 120}}>
													<View style={{flex: 0.75}} />
													<View style={{flex: 0.25, flexDirection: 'row', width: '50%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5}}>
														<Image source={star} resizeMode="contain" />
														<Text style={{color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600'}}>{'インテリア'}</Text>
													</View>
												</ImageBackground>
											</Column>
											<Column size={1} order={'last'}>
												<P bold>{'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単'}</P>
												<Small>{'and_me'}</Small>
											</Column>
										</Row>
									</Section>

									{/* WARNING: THIS CODE IS COPIED FROM ONE OF THE SECTION ABOVE, FOLLOWED TO DO TO CREATE COMPONENTS - CHECK TO DO TASK ABOVE*/}
									<Section>
										<Row>

											{/*TODO: Make component using this <View> - Belong to Post category components */}
											<Column size={1} oreder={'first'}>
												<ImageBackground source={MaskGroup17} resizeMode='stretch' style={{width: '100%', height: 140, marginRight: 5}}>
													<View style={{flex: 0.8}} />
													<View style={{flex: 0.2, flexDirection: 'row', width: '35%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5}}>
														<Image source={star} resizeMode="contain" />
														<Text style={{color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600'}}>{'動画'}</Text>
													</View>
												</ImageBackground>
												<P bold>{'ディアウォールで壁面の収納棚をつくる！Vol.2「賃貸」完結編'}</P>
												<Small>{'SKAPA'}</Small>
											</Column>

											{/*TODO: Make component using this <View> - SEE ABOVE */}
											<Column size={1} order={'last'}>
												<ImageBackground source={MaskGroup17} resizeMode='stretch' style={{width: '100%', height: 140, marginLeft: 5}}>
													<View style={{flex: 0.8}} />
													<View style={{flex: 0.2, flexDirection: 'row', width: '35%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5}}>
														<Image source={star} resizeMode="contain" />
														<Text style={{color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600'}}>{'動画'}</Text>
													</View>
												</ImageBackground>
												<P bold>{'ディアウォールで壁面の収納棚をつくる！Vol.2「賃貸」完結編'}</P>
												<Small>{'SKAPA'}</Small>
											</Column>

										</Row>

										<Row>

											{/*TODO: Make component using this <View> - Belong to Post category components */}
											<Column size={1} oreder={'first'}>
												<ImageBackground source={MaskGroup17} resizeMode='stretch' style={{width: '100%', height: 140, marginRight: 5}}>
													<View style={{flex: 0.8}} />
													<View style={{flex: 0.2, flexDirection: 'row', width: '35%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5}}>
														<Image source={star} resizeMode="contain" />
														<Text style={{color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600'}}>{'動画'}</Text>
													</View>
												</ImageBackground>
												<P bold>{'ディアウォールで壁面の収納棚をつくる！Vol.2「賃貸」完結編'}</P>
												<Small>{'SKAPA'}</Small>
											</Column>

											{/*TODO: Make component using this <View> - SEE ABOVE */}
											<Column size={1} order={'last'}>
												<ImageBackground source={MaskGroup17} resizeMode='stretch' style={{width: '100%', height: 140, marginLeft: 5}}>
													<View style={{flex: 0.8}} />
													<View style={{flex: 0.2, flexDirection: 'row', width: '35%', backgroundColor: '#fff', alignItems: 'center', paddingLeft: 5}}>
														<Image source={star} resizeMode="contain" />
														<Text style={{color: '#945D60', fontSize: 10, paddingLeft: 8, fontWeight: '600'}}>{'動画'}</Text>
													</View>
												</ImageBackground>
												<P bold>{'ディアウォールで壁面の収納棚をつくる！Vol.2「賃貸」完結編'}</P>
												<Small>{'SKAPA'}</Small>
											</Column>

										</Row>
									</Section>
								</Content>
						</View>
            <View style={{flex: 1}} tabLabel='ピックアップ'>
              <ListArticles/>
            </View>
            <View style={{flex: 1}} tabLabel='手芸'/>
						<View style={{flex: 1}} tabLabel='DIY' />
						<View style={{flex: 1}} tabLabel='インテリア' />
						<View style={{flex: 1}} tabLabel='料理' />
						<View style={{flex: 1}} tabLabel='ファッション' />
            <View style={{flex: 1}} tabLabel='連載'>
              <ListArticleSerialize/>
            </View>
					</ScrollableTabView>
				</Container >
		);
	}
}

export default Home;
