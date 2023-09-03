import './App.css';
import { useState } from 'react';
import Fibonacci from './components/Fibonacci';
import Prime from './components/Prime';
import OddNumbers from './components/Odd';
import RandomNumbers from './components/Random';
function App() {

  return (
    <>
      <Fibonacci />
      <Prime />
      <OddNumbers />
      <RandomNumbers />
    </>
  );
}

export default App;