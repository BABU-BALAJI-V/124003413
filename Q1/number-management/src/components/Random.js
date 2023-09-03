import React, { useState } from 'react';
import "../App.css"

function RandomNumbers() {
  const [count, setCount] = useState(10);
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandomNumbers = (n) => {
    const randoms = [];
    for (let i = 0; i < n; i++) {
      randoms.push(Math.floor(Math.random() * n + 1));
    }
    return randoms;
  };

  const handleCountChange = (e) => {
    const newCount = parseInt(e.target.value, 10);
    setCount(newCount);
    const newRandomNumbers = generateRandomNumbers(newCount);
    setRandomNumbers(newRandomNumbers);
  };

  return (
    <div className='random-container'>
      <h2>Random Numbers up to {count}</h2>
      <input
        type="number"
        value={count}
        onChange={handleCountChange}
        min="1"
      />
      <ul>
        {randomNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default RandomNumbers;