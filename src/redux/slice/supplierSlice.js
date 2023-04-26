import { createSlice } from '@reduxjs/toolkit';

export const supplierSlice = createSlice({
  name: 'supplier',
  initialState: {
    supplier: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.supplier = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.supplier = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = supplierSlice.actions;

export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await fetch('/api/supplier/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    dispatch(loginSuccess(data.supplier));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export default supplierSlice.reducer;