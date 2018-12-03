import {PostService} from '../../services';

export default {
	featuredPostList: PostService.getFeaturePost(2),
	subPostList1: PostService.getPostList(1),
	subPostList2: PostService.getPostList(1),
	rankedPostList: PostService.getRankedPostList(3),
};
