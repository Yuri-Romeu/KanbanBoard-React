import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/task';
import modalReducer from './reducers/modal';

export const store = configureStore({
     reducer: {
          task: taskReducer,
          modal: modalReducer,
     },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
