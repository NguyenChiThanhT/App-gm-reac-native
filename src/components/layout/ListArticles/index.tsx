import * as React from 'react';
import {FlatList, RefreshControl} from "react-native";
import Article from "../../common/Article";
import data from "./data"
export interface Props {}
export interface State {
  products: Array<object>,
  isFetching: boolean
}
class ListArticles extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      isFetching: false
    };
  }
  _ItemLoadMore = () => {
    this.state.products.push({
      id: Math.random(),
      attributes: {
        title: "《秋の味覚》生さんまはどう食べる！？【人気のさんまレシピ】",
        image_url: "/images/article/10280/main.jpg",
        tbl_member: {
          data: {
            id: "234146",
            attributes: {
              member_name: "松本真由美"
            }
          }
        }
      }
    })
  };
  _refresh = () => {
    this.setState({
      products: data
    })
  };
  render() {
    return (
        <FlatList data={this.state.products}
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    this._ItemLoadMore();
                  }}
                  refreshControl={
                    <RefreshControl
                        refreshing={this.state.isFetching}
                        onRefresh={this._refresh.bind(this)}
                        tintColor="#945D60"
                    />
                  }
                  renderItem={({item}) => (<Article item={item}/>)}
                  keyExtractor={item => item.id}
        />
    )
  }
}
export default ListArticles;
