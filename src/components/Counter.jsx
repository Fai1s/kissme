import React from 'react';
import '../styles/Counter.css';

const Counter = ({ count }) => {
  return (
    <div className="counter">
      <span>Счетчик: {count}</span>
    </div>
  );
};

export default Counter;
