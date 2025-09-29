import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
     isActive: boolean;
     editingTaskId: string | null;
};

const initialState: ModalState = {
     isActive: false,
     editingTaskId: null,
};

const modalSlice = createSlice({
     name: 'modal',
     initialState,
     reducers: {
          toggleModal: (
               state,
               action: PayloadAction<{ isActive: boolean; editingTaskId?: string | null }>,
          ) => {
               state.isActive = action.payload.isActive;
               state.editingTaskId = action.payload.editingTaskId ?? null;
          },
     },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
