import React, { useRef } from 'react';
import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addPerson } from './personSlice';

export interface PersonObj {
    id: string;
    name: string;
    age: number;
}

export default function Person() {
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const personAll = useAppSelector(state => state.person.persons);
    const counterSum = useAppSelector(state => state.counter.sum);
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        const name = nameRef.current?.value;
        const age = ageRef.current?.value;
        if (name === '' || age === '') {
            alert('输入不能为空');
        } else if (name !== undefined && age !== undefined) {
            const newPerson: PersonObj = { id: nanoid(), name, age: parseInt(age) };
            dispatch(addPerson(newPerson));
        }
        nameRef.current!.value = '';
        ageRef.current!.value = '';
    }

    return (
        <div>
            <h3>Counter is {counterSum}</h3>
            <input type="text" placeholder='name' ref={nameRef} />
            <input type="number" placeholder='age' ref={ageRef} />
            <button onClick={handleSubmit}>submit</button>
            <ul>
                {
                    personAll.map(elem => {
                        return <li key={elem.id}>{elem.name}---{elem.age}</li>
                    })
                }
            </ul>
        </div>
    )
}
