import React, { useState } from 'react';
import "../App.css"

function OddNumbers() {
  const [count, setCount] = useState(10);
  const [oddNumbers, setOddNumbers] = useState([]);

  const generateOddNumbers = (n) => {
    const odds = [];
    for (let i = 1; i <= n; i += 2) {
      odds.push(i);
    }
    return odds;
  };

  const handleCountChange = (e) => {
    const newCount = parseInt(e.target.value, 10);
    setCount(newCount);
    const newOddNumbers = generateOddNumbers(newCount);
    setOddNumbers(newOddNumbers);
  };

  return (
    <div className='odd-container'>
      <h2>Odd Numbers up to {count}</h2>
      <input
        type="number"
        value={count}
        onChange={handleCountChange}
        min="1"
      />
      <ul>
        {oddNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default OddNumbers;