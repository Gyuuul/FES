import {configureStore} from '@reduxjs/toolkit';
import counterSlice from "./counterSlice";

const store =  configureStore({
    // reducer에는 각각의 slice의 reducer들이 들어가면됨
    reducer:{
        couter:counterSlice.reducer
    }
});

export default store;
