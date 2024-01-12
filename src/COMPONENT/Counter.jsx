import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incCount, resetCount, decCount } from '../SERVICES/Action/CounterAction/counterAction';

const Counter = () => {

    const { count, msg } = useSelector((state) => state)
    console.log(count, msg);
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => dispatch(incCount())}>+1</button>
            <button onClick={() => dispatch(resetCount())}>0</button>
            <button onClick={() => dispatch(decCount())}>-1</button>
            {msg && <h3>{msg}</h3>}
        </div>
    )
}

export default Counter