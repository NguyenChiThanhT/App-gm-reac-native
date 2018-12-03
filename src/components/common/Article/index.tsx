import * as React from 'react';
import {ListItem, View, Text} from 'native-base'
import {Animated} from "react-native";
import styles from './styles'
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
export interface State {
  opacity: any
}
class Article extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0)
    };
    // this.fetchProductsOfCategory(this.props.id,this.state.currentPage);
  }
  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }).start();
  };
  render() {
    const {item} =  this.props;
    return (
        <ListItem style={styles.container}>
          <View style={styles.crop}>
            <Animated.Image onLoad={this.onLoad} style={{
              width: 156.65,
              height: 97,
              marginLeft: -21.96,
              marginTop: -6,
              opacity: this.state.opacity,
              transform: [
                {
                  scale: this.state.opacity.interpolate({
                    inputRange: [0,1],
                    outputRange: [0.85,1]
                  })
                }
              ]
            }}  square source={{uri: 'https:weboo.link/' + item.attributes.image_url}} defaultSource={require('../../../../assets/images/Image101.png')}
            />
          </View>
          <View>
            <Text style={styles.text}>{item.attributes.title}</Text>
            <Text style={styles.subText}>{item.attributes.tbl_member.data.attributes.member_name}</Text>
          </View>
        </ListItem>
    )
  }
}
export default Article;
