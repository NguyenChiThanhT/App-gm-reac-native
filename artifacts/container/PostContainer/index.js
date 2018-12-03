import * as React from 'react';
import Post from '../../stories/screens/Post';
export default class PostContainer extends React.Component {
    render() {
        return React.createElement(Post, { navigation: this.props.navigation });
    }
}
//# sourceMappingURL=index.js.map