import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Task = {
     id: number;
     titleTask: string;
     done: boolean | 'processing';
};

const initialState: Task[] = [
     {
          id: 1,
          titleTask: 'Task 1',
          done: false,
     },
     {
          id: 2,
          titleTask: 'Task 2',
          done: false,
     },
     {
          id: 3,
          titleTask: 'Task 3',
          done: true,
     },
     {
          id: 4,
          titleTask: 'Task 4',
          done: 'processing',
     },
];

const taskSlice = createSlice({
     name: 'task',
     initialState,
     reducers: {
          addTask: (state, action: PayloadAction<Task>) => {
               state.push(action.payload);
          },

          removeTask: (state, action: PayloadAction<number>) => {
               return state.filter(task => task.id !== action.payload);
          },

          updateTaskStatus: (
               state,
               action: PayloadAction<{ id: number; done: boolean | 'processing' }>,
          ) => {
               const task = state.find(t => t.id === action.payload.id);
               if (task) {
                    task.done = action.payload.done;
               }
          },
     },
});

export const { addTask, removeTask, updateTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;
