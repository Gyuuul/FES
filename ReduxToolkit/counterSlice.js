import { createSlice} from "@reduxjs/toolkit";

const counterSlice= createSlice({
    name: 'counter',
    initialState: {value:0}, // 초기값 지정
    reducers: {
        up: (state, action)=>{
            state.value = state.value + action.payload;
        },
        down: (state, action)=>{
            state.value = state.value + action.payload;
        }
    } 
});
export default counterSlice;
export const {up} = counterSlice.actions;
export const {down} = counterSlice.actions;
