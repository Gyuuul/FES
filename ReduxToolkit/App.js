import React from "react";
import {Provider,useSelector,useDispatch} from 'react-redux';
import store from './store';
import {up} from './counterSlice';
import {down} from './counterSlice';

function Counter(){
    const dispatch = useDispatch();
    const count = useSelector(state=>{
        return state.couter.value;
    });
    return <div>
        <button onClick= {()=>{
            dispatch(up(2));
        }}>+</button>
        {count}
        <button onClick= {()=>{
            dispatch(down(-2));
        }}>-</button>
    </div>
}

export default function App(){
    return (
        <Provider store={store}>
            <div>
                <Counter></Counter>
            </div>
        </Provider>
    );
}
