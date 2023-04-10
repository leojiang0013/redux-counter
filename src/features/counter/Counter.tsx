import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { increment, decrement, incrementAsync } from './counterSlice';

export default function Counter() {
    const counterSum = useAppSelector(state => state.counter.sum);
    const personLength = useAppSelector(state => state.person.persons.length);
    const dispatch = useAppDispatch();
    const select = useRef<HTMLSelectElement>(null);

    const handleAdd = () => {
        if (select.current?.value !== undefined) {
            const value = parseInt(select.current?.value);
            dispatch(increment(value));
        }
    }

    const handleReduce = () => {
        if (select.current?.value !== undefined) {
            const value = parseInt(select.current?.value);
            dispatch(decrement(value));
        }
    }

    const handleAddIfOdd = () => {
        if (select.current?.value !== undefined && counterSum % 2 === 1) {
            const value = parseInt(select.current?.value);
            dispatch(increment(value));
        }
    }

    const handleAsync = () => {
        if (select.current?.value !== undefined) {
            const value = parseInt(select.current?.value);
            dispatch(incrementAsync(value));
        }
    }

    return (
        <div>
            <h3>Person length is {personLength}</h3>
            <h1>Result:{counterSum}</h1>
            <select ref={select} defaultValue={1}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReduce}>reduce</button>
            <button onClick={handleAddIfOdd}>add if odd</button>
            <button onClick={handleAsync}>add async</button>
        </div>
    )
}
