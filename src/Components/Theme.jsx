import React, {useState} from 'react';
import { useDispatch} from "react-redux";
import {changeColor} from "./Features/Color";

export default function Theme() {
    const [color, setColor] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <input onChange={(e) => setColor(e.target.value)} type="text" placeholder="which color?!"/>
            <button onClick={() => dispatch(changeColor(color))}>change color</button>
        </div>
    );
}