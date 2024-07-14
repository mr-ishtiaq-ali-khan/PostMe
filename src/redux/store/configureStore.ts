import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';
import { Store} from 'redux';


const store:Store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
