import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
  name: 'counter', // nome della slice, usato nelle azioni e nello store
  initialState: {
    value: 0, // valore iniziale dello stato del contatore
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});


// Esporta le azioni generate automaticamente dallo slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;


// Esporta il reducer corrispondente allo slice
export default counterSlice.reducer;