import { atom, selector } from 'recoil';

interface IReviewPostsStateTypes {
  product_id: number;
  title: string;
  nickname: string;
  scope: string;
  views: number;
  likes: number;
}

/** 리뷰 게시글 State */
export const reviewPostsState = atom<IReviewPostsStateTypes[]>({
  key: 'reviewPostsState',
  default: [
    {
      product_id: 0,
      title: '',
      nickname: '',
      scope: '',
      views: 0,
      likes: 0,
    },
  ],
});
