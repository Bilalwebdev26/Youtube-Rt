import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    open:false,
  }

export const appSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        openSidebar:(state)=>{
           state.open = !state.open
        }
    }
})

export const {openSidebar} = appSlice.actions
export default appSlice.reducer