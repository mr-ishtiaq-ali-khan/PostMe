import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { PostsStateType } from '../../types/postsRedux';
import { PostType } from '../../types/posts.type';

const initialState: PostsStateType = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<PostType[] | PostType>) {
      if(Array.isArray(action.payload)){
        state.posts = [...action.payload];
      } else {
        state.posts.push(action.payload);
      }
    },
    deletePost(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter(post => post.uuid !== action.payload);
    },
  },
});

export const { actions: postsActions, reducer: postsReducer } = postsSlice;

export const selectPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
