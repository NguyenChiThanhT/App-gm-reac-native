import * as React from 'react';
import {Container} from 'native-base';
import {View, Image, Text} from 'react-native';
import { HeaderSearchBar, P } from '../../../components/common';

export interface Props {
	navigation: any;
}

export interface State {
}

class NoResultOfSearch extends React.Component<Props, State> {
	render() {
		return (
				<Container style={{backgroundColor: '#FFF'}}>
					<HeaderSearchBar btnName={'キャンセル'} textPlaceholder={'大阪'}/>

					<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF'}}>
						<Image style={{width: 65, height: 65, marginBottom: 45}}
							   source={require('./../../../../assets/images/ic_search_not_found.png')}/>
						<P style={{lineHeight: 32}}>“○○○●○○○●”</P>
						<P style={{lineHeight: 22}}>に該当する記事はありませんでした。</P>
						<P style={{lineHeight: 22}}>条件を変更して再度検索してください。</P>
					</View>
				</Container>
		);
	}
}

export default NoResultOfSearch;
