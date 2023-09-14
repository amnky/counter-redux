import { createSlice } from "@reduxjs/toolkit";


const initialState={
    counter:0
}

export const counterSlice = createSlice( {
  name:'counter',
  initialState,
  reducers:{
    increament:(state)=>{
        state.counter+=1;
    },
    decreament:(state)=>{
        state.counter-=1;
    },
    reset:(state)=>{
        state.counter=0;
    },
    addbyamount:(state,action)=>{
        state.counter+=action.payload;
    }
  }
});
export const {increament,decreament,reset,addbyamount}=counterSlice.actions;
export default counterSlice.reducer;
