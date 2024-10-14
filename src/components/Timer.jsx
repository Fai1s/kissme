import React, { useEffect, useState } from 'react';
import '../styles/Timer.css';

const Timer = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      onComplete();
    }
  }, [timeLeft, onComplete]);

  return (
    <div className="timer">
      {timeLeft > 0 ? <span>{timeLeft}</span> : null}
    </div>
  );
};

export default Timer;
