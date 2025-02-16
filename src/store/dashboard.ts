import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dashboardService from 'services/Dashboard';
import { setSnackbar } from './snackbar';
import { OrderStatus } from 'types';

const initialState: { isLoading: boolean; data: OrderStatus[] } = {
  isLoading: true,
  data: [],
};
const dashboard = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashboardData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    });
    builder.addCase(getDashboardData.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getDashboardData.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const getDashboardData = createAsyncThunk<OrderStatus[], void>(
  'dashboard/getDashboardData',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await dashboardService.getDashboardData();
      console.log('🚀 ~ response:', response);
      return response;
    } catch (error) {
      dispatch(setSnackbar({ title: 'Something went wrong', color: 'error' }));
      return rejectWithValue(error);
    }
  }
);

export default dashboard.reducer;
