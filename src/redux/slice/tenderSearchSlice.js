import { createSlice } from '@reduxjs/toolkit';

const tenderSearchSlice = createSlice({
  name: 'tenderSearch',
  initialState: {
    searchQuery: '',
    loading: false,
    error: null,
  },
  reducers: {
    searchTendersStart(state) {
      state.loading = true;
      state.error = null;
    },
    searchTendersSuccess(state, action) {
      state.searchQuery = action.payload;
      state.loading = false;
    },
    searchTendersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { searchTendersStart, searchTendersSuccess, searchTendersFailure } = tenderSearchSlice.actions;

export default tenderSearchSlice.reducer;