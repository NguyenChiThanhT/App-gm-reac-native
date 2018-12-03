import * as React from 'react';
import {ListItem, View, Text} from 'native-base'
import {Animated} from "react-native";
import styles from './styles'
export interface Item {
  id: number,
  attributes: {
    title: string,
    tbl_category: {
      data: {
        id: number,
        attributes: {
          category_name: string
        }
      }
    },
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
  item: Item,
  rankNumber: number
}
export interface State {
  opacity: any,
  styleOf: object
}
class ArticleWithRank extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      styleOf: {
        1: styles.Rank1,
        2: styles.Rank2,
        3: styles.Rank3
      }
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
    const {item, rankNumber} =  this.props;
    return (
        <ListItem style={styles.container}>
          <View style={styles.crop}>
            <Animated.Image onLoad={this.onLoad} style={styles.image} square
                            source={{uri: `https:weboo.link//images/article/${item.id}/main.jpg`}}
            />
            <View style={this.state.styleOf[rankNumber] ? this.state.styleOf[rankNumber] : styles.Rank }><Text style={{fontSize: 9, color: '#fff'}}>{rankNumber}</Text></View>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.cateName}>{item.attributes.tbl_category.data.attributes.category_name}</Text>
              <Text style={styles.userName}>{item.attributes.tbl_member.data.attributes.member_name}</Text>
            </View>
            <Text style={styles.text}>{item.attributes.title}</Text>
          </View>
        </ListItem>
    )
  }
}
export default ArticleWithRank;
