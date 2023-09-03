import React from 'react'
import "../App.css"
import { useState } from 'react';
export default function Fibonacci() {
    const [count, setCount] = useState(10);
    const [fib, setfib] = useState([]);

    const calculateFibonacci = (n) => {
        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib;
    };

    const handleCountChange = (e) => {
        const newCount = parseInt(e.target.value, 10);
        setCount(newCount);
        const newfib = calculateFibonacci(newCount);
        setfib(newfib);
    };

    return (
        <div className='fibonacci-container'>
            <h2>Fibonacci Sequence</h2>
            <label>
                <input
                    type="number"
                    value={count}
                    onChange={handleCountChange}
                    min="1"
                />
            </label>
            <ul>
                {fib.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    )
}