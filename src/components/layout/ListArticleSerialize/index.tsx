import * as React from 'react';
import {FlatList, RefreshControl} from "react-native";
import data from "./data"
import ArticleSerialize from "../../common/ArticleSerialize";
export interface Props {}
export interface State {
  products: Array<any>,
  isFetching: boolean
}
class ListArticleSerialize extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
		  products: data,
      isFetching: false
    }
	};
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
        <FlatList
                  data={this.state.products}
                  onEndReached={() => {
                    this._ItemLoadMore();
                  }}
                  onEndReachedThreshold={0.5}
                  refreshControl={
                    <RefreshControl
                        refreshing={this.state.isFetching}
                        onRefresh={this._refresh.bind(this)}
                        tintColor="#945D60"
                    />
                  }
                  renderItem={({item}) => (<ArticleSerialize item={item}/>)}
                  keyExtractor={item => item.id}/>
		)
	}
}
export default ListArticleSerialize;
