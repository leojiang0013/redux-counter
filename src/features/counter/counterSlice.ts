import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface CounterState {
	sum: number;
}

const initialState: CounterState = {
	sum: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state, action: PayloadAction<number>) => {
			state.sum += action.payload;
		},
		decrement: (state, action: PayloadAction<number>) => {
			state.sum -= action.payload;
		},
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.sum += action.payload.data;
  //     })
  // },
});

export const { increment, decrement } = counterSlice.actions;

export const incrementAsync = (amount: number) => (dispatch: any) => {
	setTimeout(() => {
		dispatch(increment(amount));
	}, 1000);
};

// export const incrementAsync = createAsyncThunk(
//   "counter/promise",
//   async () => {
//     const response = await Promise.resolve({ data: 10 });
//     return response.data;
//   }
// );

export const counterSum = (state: RootState) => state.counter.sum;

export default counterSlice.reducer;
