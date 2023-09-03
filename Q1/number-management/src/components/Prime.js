import React from 'react'
import { useState } from 'react';
import "../App.css"

export default function Prime() {
    
    function isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;

        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) {
                return false;
            }
        }

        return true;
    }

    const [count, setCount] = useState(10);
    const [primeNumbers, setPrimeNumbers] = useState([]);

    const generatePrime = (n) => {
        const primes = [];
        for (let i = 2; i <= n; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        return primes;
    };

    const handleCountChange = (e) => {
        const newCount = parseInt(e.target.value, 10);
        setCount(newCount);
        const newPrimeNumbers = generatePrime(newCount);
        setPrimeNumbers(newPrimeNumbers);
    };

    return (
        <div className='prime-container'>
            <h2>Prime Numbers up to {count}</h2>
            <input
                type="number"
                value={count}
                onChange={handleCountChange}
                min="1"
            />
            <ul>
                {primeNumbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>

    )
}