import * as React from 'react';
import {Container, Content} from 'native-base';

import {
	KeyWordItem, HeaderSearchBar, TouchableOpacityButton, DashedTitle, Gap, Row, Section,
} from '../../../components/common';

import styles from './styles';

export interface Props {
	navigation: any;
}

export interface State {
}

class Searching extends React.Component<Props, State> {
	render() {
		return (
				<Container>
					<Content style={styles.container}>
						<HeaderSearchBar textPlaceholder='記事を探す' btnName='キャンセル'/>
						<Gap height={25}/>


						<Section>
							<DashedTitle text={'人気検索ワード'}/>
							<Gap height={10}/>
							<Row centered>
								<KeyWordItem imageSrc={require('../../../../assets/images/MaskGroup79.png')} keyword={'ビーズ'}/>
								<KeyWordItem imageSrc={require('../../../../assets/images/MaskGroup73.png')} keyword={'ビーズ'}/>
								<KeyWordItem imageSrc={require('../../../../assets/images/MaskGroup75.png')} keyword={'ビーズ'}/>
							</Row>
							<Row centered>
								<KeyWordItem imageSrc={require('../../../../assets/images/MaskGroup79.png')} keyword={'ビーズ'}/>
								<KeyWordItem imageSrc={require('../../../../assets/images/MaskGroup73.png')} keyword={'ビーズ'}/>
								<KeyWordItem imageSrc={require('../../../../assets/images/MaskGroup75.png')} keyword={'ビーズ'}/>
							</Row>
						</Section>


						<Gap height={40}/>

						<Section>
							<DashedTitle text={'最近検索したワード'}/>
							<Gap height={10}/>
							<Row centered>
								<TouchableOpacityButton text={'ピアスの作り方'}/>
							</Row>
							<Gap height={2}/>
							<Row centered>
								<TouchableOpacityButton text={'バッグや小物'}/>
							</Row>
						</Section>

						<Gap height={40}/>

						<Section>
							<DashedTitle text={'ピックアップキーワード'}/>
							<Gap height={20}/>
						</Section>
					</Content>
				</Container>
		);
	}
}

export default Searching;
