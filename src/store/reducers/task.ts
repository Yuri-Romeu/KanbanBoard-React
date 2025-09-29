import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Task = {
     id: string;
     titleTask: string;
     done: boolean | 'processing';
};

const loadTasksFromStorage = (): Task[] => {
     const stored = localStorage.getItem('tasks');
     if (stored) {
          try {
               return JSON.parse(stored) as Task[];
          } catch {
               return [];
          }
     }
     return [];
};

const initialState: Task[] = loadTasksFromStorage();
const saveTasksToStorage = (tasks: Task[]) => {
     localStorage.setItem('tasks', JSON.stringify(tasks));
};

const taskSlice = createSlice({
     name: 'task',
     initialState,
     reducers: {
          addTask: (state, action: PayloadAction<Task>) => {
               if (state.find(task => task.titleTask === action.payload.titleTask))
                    return alert('Tarefa já existente');
               state.push(action.payload);
               saveTasksToStorage(state);
          },

          removeTask: (state, action: PayloadAction<string>) => {
               const newState = state.filter(task => task.id !== action.payload);
               saveTasksToStorage(newState);
               return newState;
          },

          updateTaskStatus: (
               state,
               action: PayloadAction<{ id: string; done: boolean | 'processing' }>,
          ) => {
               const task = state.find(t => t.id === action.payload.id);
               if (task) {
                    task.done = action.payload.done;
                    saveTasksToStorage(state);
               }
          },

          updateTask: (state, action: PayloadAction<Task>) => {
               const task = state.find(t => t.id === action.payload.id);
               if (task) {
                    task.titleTask = action.payload.titleTask;
                    task.done = action.payload.done;
                    saveTasksToStorage(state);
               }
          },
     },
});

export const { addTask, removeTask, updateTaskStatus, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
