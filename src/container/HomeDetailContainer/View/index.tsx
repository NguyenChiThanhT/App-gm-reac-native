import * as React from 'react';
import {Container} from 'native-base';
import {View, Content } from 'native-base';
import {
	PostItemSmall2, HeaderFavoriteShare, DashedTitle, Tag, Section, PostItem,
} from '../../../components/common';
import styles from './styles';

export interface Props {
	navigation: any;
	featuredPostList: Array<Object>;
	subPostList1: Array<Object>;
	subPostList2: Array<Object>;
	rankedPostList: Array<Object>;
}

export interface State {
}

class HomeDetail extends React.Component<Props, State> {
	render() {
		let featureList = this.props.featuredPostList;
		let subPostList1 = this.props.subPostList1;
		let subPostList2 = this.props.subPostList2;
		let rankedPostList = this.props.rankedPostList;

		return (
			<Container>
				<HeaderFavoriteShare title={'パリ在住のシェフ：Carrie Solomo…'}/>
				<Content style={styles.container}>
					<PostItem postData={ featureList[0] }/>
					<PostItem postData={ featureList[1] }/>

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
								imageSrc={ subPostList1[0].featureImage }
								category={ subPostList1[0].category }
								author={ subPostList1[0].author.authorName }
								title={ subPostList1[0].postTitle }
							/>
							<PostItemSmall2
								imageSrc={ subPostList1[1].featureImage }
								category={ subPostList1[1].category }
								author={ subPostList1[1].author.authorName }
								title={ subPostList1[1].postTitle }
							/>
						</View>
					</Section>
					{/* END Block Relative Article */}

					{/* Relative Recomend Article*/}
					<Section>
						<DashedTitle text='おすすめ記事' />
						<View>
							<PostItemSmall2
								imageSrc={ subPostList2[0].featureImage }
								category={ subPostList2[0].category }
								author={ subPostList2[0].author.authorName }
								title={ subPostList2[0].postTitle }
							/>
							<PostItemSmall2
								imageSrc={ subPostList2[1].featureImage }
								category={ subPostList2[1].category }
								author={ subPostList2[1].author.authorName }
								title={ subPostList2[1].postTitle }
							/>
							<PostItemSmall2
								imageSrc={ subPostList2[1].featureImage }
								category={ subPostList2[1].category }
								author={ subPostList2[1].author.authorName }
								title={ subPostList2[1].postTitle }
							/>
						</View>
					</Section>
					{/* END Relative Recomend Article*/}

					{/* Popular Article*/}
					<Section>
						<DashedTitle text='人気記事' />
						<View>
							<PostItemSmall2
								imageSrc={ rankedPostList[0].featureImage }
								category={ rankedPostList[0].category }
								author={ rankedPostList[0].author.authorName }
								title={ rankedPostList[0].postTitle }
								top={ rankedPostList[0].rank }
							/>
							<PostItemSmall2
								imageSrc={ rankedPostList[1].featureImage }
								category={ rankedPostList[1].category }
								author={ rankedPostList[1].author.authorName }
								title={ rankedPostList[1].postTitle }
								top={ rankedPostList[1].rank }
							/>
							<PostItemSmall2
								imageSrc={ rankedPostList[2].featureImage }
								category={ rankedPostList[2].category }
								author={ rankedPostList[2].author.authorName }
								title={ rankedPostList[2].postTitle }
								top={ rankedPostList[2].rank }
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
