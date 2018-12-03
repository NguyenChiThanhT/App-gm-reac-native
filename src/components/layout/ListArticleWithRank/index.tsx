import * as React from 'react';
import {FlatList, RefreshControl} from "react-native";
import data from "./data"
import ArticleWithRank from "../../common/ArticleWithRank";
export interface Props {}
export interface State {
  products: Array<any>,
  isFetching: boolean
}
class ListArticleWithRank extends React.Component<Props, State> {
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
        title: "DIY女子必見！ダイソーのペンキ「ナチュラルミルクペイント」の紹介レビュー◎",
        tbl_category: {
          data: {
            id: 17,
            attributes: {
              id: 17,
              category_name: "DIY"
            }
          }
        },
        tbl_member: {
          data: {
            id: 234107,
            attributes: {
              member_name: "roco.",
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
                  renderItem={({item: item,index}) => (<ArticleWithRank item={item} rankNumber={index+1}/>)}
                  keyExtractor={item => item.id}/>
		)
	}
}
export default ListArticleWithRank;
