import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Props = {
     isActive: boolean;
};

const initialState: Props = {
     isActive: false,
};

const modalSlice = createSlice({
     name: 'modal',
     initialState,
     reducers: {
          toggleModal: (state, action: PayloadAction<boolean>) => {
               state.isActive = action.payload;
          },
     },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
