import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/task';

export const store = configureStore({
     reducer: {
          task: taskReducer,
     },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
