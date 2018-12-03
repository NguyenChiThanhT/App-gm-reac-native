import * as React from 'react';
import {Container, View, Content} from 'native-base';
import {HeaderSearchBar, PostItemSmall } from '../../../components/common';

import styles from './styles';

export interface Props {
	navigation: any;
}

export interface State {
}

class ResultOfSearch extends React.Component<Props, State> {
	render() {
		return (
				<Container>
					<HeaderSearchBar btnName={'キャンセル'} textPlaceholder={'大阪'}/>

					<Content style={styles.container}>
						<View style={{padding: 10}}>
							<PostItemSmall imageSrc={require('./../../../../assets/images/gr-image-1.jpg')} author={'and_me'} title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}/>
							<PostItemSmall imageSrc={require('./../../../../assets/images/gr-image-1.jpg')} author={'and_me'} title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}/>
							<PostItemSmall imageSrc={require('./../../../../assets/images/gr-image-1.jpg')} author={'and_me'} title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}/>
							<PostItemSmall imageSrc={require('./../../../../assets/images/gr-image-1.jpg')} author={'and_me'} title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}/>
							<PostItemSmall imageSrc={require('./../../../../assets/images/gr-image-1.jpg')} author={'and_me'} title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}/>
							<PostItemSmall imageSrc={require('./../../../../assets/images/gr-image-1.jpg')} author={'and_me'} title={'【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…'}/>
							</View>
					</Content>
				</Container>
		);
	}
}

export default ResultOfSearch;
