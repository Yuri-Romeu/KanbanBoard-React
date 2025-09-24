import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Task = {
     id: string;
     titleTask: string;
     done: boolean | 'processing';
};

const initialState: Task[] = [
     {
          id: '1',
          titleTask: 'Task 1',
          done: false,
     },
     {
          id: '2',
          titleTask: 'Task 2',
          done: false,
     },
     {
          id: '3',
          titleTask: 'Task 3',
          done: true,
     },
     {
          id: '4',
          titleTask: 'Task 4',
          done: 'processing',
     },
];

const taskSlice = createSlice({
     name: 'task',
     initialState,
     reducers: {
          addTask: (state, action: PayloadAction<Task>) => {
               if (state.find(task => task.titleTask === action.payload.titleTask))
                    return alert('Tarefa já existente');
               state.push(action.payload);
          },

          removeTask: (state, action: PayloadAction<string>) => {
               return state.filter(task => task.id !== action.payload);
          },

          updateTaskStatus: (
               state,
               action: PayloadAction<{ id: string; done: boolean | 'processing' }>,
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
