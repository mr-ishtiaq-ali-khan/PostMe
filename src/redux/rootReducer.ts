import { combineReducers, Reducer } from 'redux';
import postsReducer from './posts/slice';

/* This code snippet is creating a root reducer using the `combineReducers` function from the Redux
library. The `combineReducers` function takes an object where each key represents a slice of the
Redux state and the corresponding value is a reducer function responsible for updating that slice of
the state. */
const rootReducer:Reducer = combineReducers({
  posts: postsReducer,
  // Add more reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
