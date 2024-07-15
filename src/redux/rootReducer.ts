import { combineReducers, Reducer } from 'redux';
import postsReducer from './posts/slice';

const rootReducer:Reducer = combineReducers({
  posts: postsReducer,
  // Add more reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
