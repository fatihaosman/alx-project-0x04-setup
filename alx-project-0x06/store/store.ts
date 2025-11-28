import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Explanation:

// createSlice → Combines state, actions, and reducers in one place.

// initialState → Holds the initial counter value.

// increment & decrement → Functions to update the counter.

// configureStore → Creates the Redux store and registers the counter reducer.

// useAppDispatch → Typed hook to safely dispatch actions in components.


// Step 1: Create a slice for our counter
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value > 0 ? state.value -= 1 : 0 }
  }
});

// Step 2: Configure the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// Step 3: Export actions for use in components
export const { increment, decrement } = counterSlice.actions;

// Step 4: Type definitions for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Step 5: Custom hook to type dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
