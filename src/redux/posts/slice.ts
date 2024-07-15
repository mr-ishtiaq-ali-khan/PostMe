import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { PostsStateType } from '../../types/postsRedux';
import { PostType } from '../../types/posts.type';

/* The `initialState` constant is initializing the initial state for the `posts` slice of the Redux
store. It defines the initial values for the `posts`, `loading`, and `error` properties in the
`PostsStateType` object. When the Redux store is created, it will use this initial state as the
starting point for the `posts` slice before any actions are dispatched. */
const initialState: PostsStateType = {
  posts: [],
  loading: false,
  error: null,
};

/* This code block is creating a slice for managing posts in a Redux store using the `createSlice`
function from the `@reduxjs/toolkit` package. Here's a breakdown of what it's doing: */
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
