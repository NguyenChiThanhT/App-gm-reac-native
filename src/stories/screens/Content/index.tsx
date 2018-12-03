import React from 'react';
import { View, TouchableOpacity, Dimensions, Modal} from 'react-native';
import { Container, Content, Header, Left, Text, Input, Icon } from 'native-base';
import Dropdown from '../../../components/common/Dropdown';
const { width } = Dimensions.get('window');
import styles from './styles';

class ContentPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dropboxValue: '未選択',
			showBropbox: false,
			value: 1,
			data: [
				{id: 1, value: '未選択'},
				{id: 2, value: '大見出し'},
				{id: 3, value: '小見出し'},
				{id: 4, value: '写真'},
				{id: 5, value: 'テキスト'},
				{id: 6, value: 'リンク'},
				{id: 7, value: '動画'},
				{id: 8, value: 'Instagram'}],
		};
	}
	updateVisible() {
		this.setState({showBropbox: !this.state.showBropbox});
	}
	updateValue(item) {
		this.setState({value: item.id, dropboxValue: item.value}, () => {
			setTimeout(() => {
				this.setState({showBropbox: !this.state.showBropbox});
			}, 500);
		});
	}
	render() {
		const { dropboxValue, showBropbox, value, data } = this.state;
		const { header, headerDropdown, dropdown, valueDropbox, iconDropdown, headerText, btnContent, btnAction, textBtn,
			input, btnCamera, lineInput, numberOnLine, iconForward, textBtnContent, viewInput, btnUpload, termsofService,
			btnRoteImage, textRoteImage, iconRoteImage } = styles;
		return (
			<Container style={{backgroundColor: '#fff'}}>
				<Header style={header}>
					<Left>
						<TouchableOpacity>
							<Text style={headerText}>{'キャンセル'}</Text>
						</TouchableOpacity>
					</Left>
				</Header>
				{ value === 1 ? (
					<Content>
						<View style={headerDropdown}>
							<TouchableOpacity onPress={() => this.setState({showBropbox: !showBropbox})} style={dropdown}>
								<View style={valueDropbox}>
									<Text style={{color: '#3C3C3C', fontSize: 14}}>{dropboxValue}</Text>
								</View>
								<View style={iconDropdown}>
									<Icon style={{color: '#999999', fontSize: 24}} name={'ios-arrow-down'} />
								</View>
							</TouchableOpacity>
						</View>
						<View style={{width, backgroundColor: '#DDDDDD', height: 2, marginTop: 10}}/>
					</Content>
				) : (value === 2 || value === 3) ? (
					<Content>
						<View style={headerDropdown}>
							<TouchableOpacity onPress={() => this.setState({showBropbox: !showBropbox})} style={dropdown}>
								<View style={valueDropbox}>
									<Text style={{color: '#3C3C3C', fontSize: 14}}>{dropboxValue}</Text>
								</View>
								<View style={iconDropdown}>
									<Icon style={{color: '#999999', fontSize: 24}} name={'ios-arrow-down'} />
								</View>
							</TouchableOpacity>
						</View>
						<View style={viewInput}/>
							<Input multiline={true}	style={input} placeholderTextColor={'#8B8B8B'} placeholder={'記事の見出しを入力'}/>
							<View style={lineInput}>
								<Text style={numberOnLine}>{'32'}</Text>
							</View>
						<View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
							<TouchableOpacity style={btnAction}>
								<Text style={textBtn}>{'保存'}</Text>
							</TouchableOpacity>
							<TouchableOpacity style={btnAction}>
								<Text style={textBtn}>{'次の内容を追加'}</Text>
							</TouchableOpacity>
						</View>
					</Content>
				) : value === 4 ? (
					<Content>
						<View style={headerDropdown}>
							<TouchableOpacity onPress={() => this.setState({showBropbox: !showBropbox})} style={dropdown}>
								<View style={valueDropbox}>
									<Text style={{color: '#3C3C3C', fontSize: 14}}>{dropboxValue}</Text>
								</View>
								<View style={iconDropdown}>
									<Icon style={{color: '#999999', fontSize: 24}} name={'ios-arrow-down'} />
								</View>
							</TouchableOpacity>
						</View>
						<TouchableOpacity style={btnCamera}>
							<Icon style={{color: '#AF8589', fontSize: 55}} name={'ios-camera'}/>
							<Text style={{fontSize: 16, color: '#AF8589'}}>{'写真を選択'}</Text>
						</TouchableOpacity>
						<View style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
							<TouchableOpacity style={btnRoteImage}>
								<Icon name={'ios-refresh'} style={iconRoteImage} />
								<Text style={textRoteImage}>{'画像を回転'}</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity style={[btnContent, {borderTopWidth: 1, borderTopColor: '#DDDDDD', marginTop: 15}]}>
							<View style={{flex: 0.5, alignItems: 'flex-start', marginLeft: 10}}>
								<Text style={textBtnContent}>{'出典（ URL）'}</Text>
							</View>
							<View style={{flex: 0.5, alignItems: 'flex-end', marginRight: 15}}>
								<Icon style={iconForward} name={'ios-arrow-forward'}/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={btnContent}>
							<View style={{flex: 0.5, alignItems: 'flex-start', marginLeft: 10}}>
								<Text style={textBtnContent}>{'http://〜'}</Text>
							</View>
							<View style={{flex: 0.5, alignItems: 'flex-end', marginRight: 15}}>
								<Icon style={iconForward} name={'ios-arrow-forward'}/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={btnContent}>
							<View style={{flex: 0.5, alignItems: 'flex-start', marginLeft: 10}}>
								<Text style={textBtnContent}>{'クレジット'}</Text>
							</View>
							<View style={{flex: 0.5, alignItems: 'flex-end', marginRight: 15}}>
								<Icon style={iconForward} name={'ios-arrow-forward'}/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={btnContent}>
							<View style={{flex: 0.5, alignItems: 'flex-start', marginLeft: 10}}>
								<Text style={textBtnContent}>{'Photo by：撮影者名'}</Text>
							</View>
							<View style={{flex: 0.5, alignItems: 'flex-end', marginRight: 15}}>
								<Icon style={iconForward} name={'ios-arrow-forward'}/>
							</View>
						</TouchableOpacity>
						<View style={termsofService}>
							<Text numberOfLines={4} style={{fontSize: 14, textAlign: 'center', lineHeight: 22}}>{'あなたが所有者である、または写真の著作権保有者から\n' +
							'使用許可を得ている写真のみアップロードしてください。\n' +
							'WEBOO利用規約'}</Text>
						</View>
						<TouchableOpacity style={btnUpload}>
							<Text style={{fontSize: 14, color: '#fff', fontWeight: '700'}}>{'上記内容に同意してアップロード'}</Text>
						</TouchableOpacity>
					</Content>
				) : value === 5 ? (
					<Content>
						<View style={headerDropdown}>
							<TouchableOpacity onPress={() => this.setState({showBropbox: !showBropbox})} style={dropdown}>
								<View style={valueDropbox}>
									<Text style={{color: '#3C3C3C', fontSize: 14}}>{dropboxValue}</Text>
								</View>
								<View style={iconDropdown}>
									<Icon style={{color: '#999999', fontSize: 24}} name={'ios-arrow-down'} />
								</View>
							</TouchableOpacity>
						</View>
						<View style={viewInput}/>
						<Input multiline={true} style={input} placeholderTextColor={'#8B8B8B'} placeholder={'テキストを入力'}/>
						<View style={lineInput}>
							<Text style={numberOnLine}>{'400'}</Text>
						</View>
						<View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
							<TouchableOpacity style={btnAction}>
								<Text style={textBtn}>{'保存'}</Text>
							</TouchableOpacity>
							<TouchableOpacity style={btnAction}>
								<Text style={textBtn}>{'次の内容を追加'}</Text>
							</TouchableOpacity>
						</View>
					</Content>
				) : value === 6 ? (
					<Content>
						<View style={headerDropdown}>
							<TouchableOpacity onPress={() => this.setState({showBropbox: !showBropbox})} style={dropdown}>
								<View style={valueDropbox}>
									<Text style={{color: '#3C3C3C', fontSize: 14}}>{dropboxValue}</Text>
								</View>
								<View style={iconDropdown}>
									<Icon style={{color: '#999999', fontSize: 24}} name={'ios-arrow-down'} />
								</View>
							</TouchableOpacity>
						</View>
						<View style={viewInput}/>
						<Input multiline={true} style={input} placeholderTextColor={'#8B8B8B'} placeholder={'リンクのテキスト'}/>
						<View style={lineInput}>
							<Text style={numberOnLine}>{'32'}</Text>
						</View>
						<TouchableOpacity style={btnContent}>
							<View style={{flex: 0.5, alignItems: 'flex-start', marginLeft: 10}}>
								<Text style={textBtnContent}>{'URL'}</Text>
							</View>
							<View style={{flex: 0.5, alignItems: 'flex-end', marginRight: 15}}>
								<Icon style={iconForward} name={'ios-arrow-forward'}/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={[btnContent, {borderTopWidth: 1, borderTopColor: '#DDDDDD'}]}>
							<View style={{flex: 0.5, alignItems: 'flex-start', marginLeft: 10}}>
								<Text style={textBtnContent}>{'http://〜'}</Text>
							</View>
							<View style={{flex: 0.5, alignItems: 'flex-end', marginRight: 15}}>
								<Icon style={iconForward} name={'ios-arrow-forward'}/>
							</View>
						</TouchableOpacity>
						<View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
							<TouchableOpacity style={btnAction}>
								<Text style={textBtn}>{'保存'}</Text>
							</TouchableOpacity>
							<TouchableOpacity style={btnAction}>
								<Text style={textBtn}>{'次の内容を追加'}</Text>
							</TouchableOpacity>
						</View>
					</Content>
				) : (value === 7 || value === 8) && (
					<Content>
						<View style={headerDropdown}>
							<TouchableOpacity onPress={() => this.setState({showBropbox: !showBropbox})} style={dropdown}>
								<View style={valueDropbox}>
									<Text style={{color: '#3C3C3C', fontSize: 14}}>{dropboxValue}</Text>
								</View>
								<View style={iconDropdown}>
									<Icon style={{color: '#999999', fontSize: 24}} name={'ios-arrow-down'} />
								</View>
							</TouchableOpacity>
						</View>
						<TouchableOpacity style={[btnContent, {borderTopWidth: 1, borderTopColor: '#DDDDDD', marginTop: 15}]}>
							<View style={{flex: 0.5, alignItems: 'flex-start', marginLeft: 10}}>
								<Text style={textBtnContent}>{value === 8 ? 'Instagramからの追加' : 'Youtube動画のURL'}</Text>
							</View>
							<View style={{flex: 0.5, alignItems: 'flex-end', marginRight: 15}}>
								<Icon style={iconForward} name={'ios-arrow-forward'}/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={[btnContent, {borderTopWidth: 1, borderTopColor: '#DDDDDD'}]}>
							<View style={{flex: 0.5, alignItems: 'flex-start', marginLeft: 10}}>
								<Text style={textBtnContent}>{'http://〜'}</Text>
							</View>
							<View style={{flex: 0.5, alignItems: 'flex-end', marginRight: 15}}>
								<Icon style={iconForward} name={'ios-arrow-forward'}/>
							</View>
						</TouchableOpacity>
						<View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
							<TouchableOpacity style={btnAction}>
								<Text style={textBtn}>{'保存'}</Text>
							</TouchableOpacity>
							<TouchableOpacity style={btnAction}>
								<Text style={textBtn}>{'次の内容を追加'}</Text>
							</TouchableOpacity>
						</View>
					</Content>
				)}
				{/*Show dropbox*/}
				{ showBropbox && <Dropdown data={data} value={value} updateValue={(val) => this.updateValue(val)} updateVisible={() => this.updateVisible()} />}
			</Container>
		);
	}
}

export default ContentPost;
