import * as React from 'react';
import {ListItem, View, Text, Button, Thumbnail} from 'native-base'
import {Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles';
export interface Item {
  id: number,
  attributes: {
    title: string,
    image_url: string,
    tbl_member: {
      data: {
        id: number,
        attributes: {
          member_name: string
        }
      }
    }
  }
}
export interface Props {
  item: Item
}
export interface State {}
class ArticleSerialize extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }
  render() {
    const {item} =  this.props;
    return (
        <ListItem style={styles.container}>
          <View style={styles.crop1}>
            <Image style={styles.image1} source={{uri: 'https:weboo.link/' + item.attributes.image_url}}
                   defaultSource={require('../../../../assets/images/Image101.png')}/>
          </View>
          <View style={{ alignItems: 'center'}}>
            <Button style={styles.buttonWithIcon}>
              <View style={styles.icon}><Icon name="pencil" size={8.5} color={'#945D60'}/></View>
              <Text style={{fontSize: 10, color: '#945D60'}}>Interview</Text>
            </Button>
            <View style={styles.bottomLine}/>
          </View>
          <LinearGradient
              colors={['rgba(0,31,44,0)', 'rgba(0,31,44,1)']}
              start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.0}}
              style={styles.linear}
          >
            <Text style={styles.text}>{item.attributes.title}</Text>
            <View style={{flexDirection: 'row'}}>
              <Thumbnail circular source={{uri: `https:weboo.link/images/member_image/${item.attributes.tbl_member.data.id}.jpg`}} style={styles.avatar}/>
              <Text style={styles.avatarName}>{item.attributes.tbl_member.data.attributes.member_name}</Text>
            </View>
          </LinearGradient>
        </ListItem>
    )
  }
}
export default ArticleSerialize;
