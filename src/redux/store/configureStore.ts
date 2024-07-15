import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';
import { Store} from 'redux';


/* This code snippet is creating a Redux store using the `configureStore` function from the
`@reduxjs/toolkit` library. The `configureStore` function takes an object as an argument with a
`reducer` property that specifies the root reducer for the store. In this case, the `rootReducer` is
being passed as the reducer for the store. */
const store:Store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
