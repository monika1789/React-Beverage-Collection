import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice ({
 name: "root",
 initialState: {
   name: 'Name',
   stocks: 'Stocks',
   description: 'Description',
   sugar: 'Sugar',
   type: 'Type',
 },
 reducers: {
     chooseName: (state,action) => {state.name = action.payload },
     chooseStocks: (state,action) => {state.stocks = action.payload},
     chooseDescription: (state,action) => {state.description = action.payload},
     chooseSugar: (state,action) => {state.sugar = action.payload},
     chooseType: (state,action) => {state.type = action.payload},
     
 }
})
export const reducer = rootSlice.reducer;
export const {chooseName, chooseStocks, chooseDescription, chooseSugar, chooseType } = rootSlice.actions;