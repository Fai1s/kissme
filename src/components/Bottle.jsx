// Bottle.jsx


import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Howl } from 'howler';
import spinSound from '../assets/Spinning sound.mp3';
import '../styles/Bottle.css';

const Bottle = ({ onSpinEnd, activePlayer, players }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [angle, setAngle] = useState(0);

  const [springs, api] = useSpring(() => ({
    transform: `rotate(0deg)`,
    config: { duration: 4000 },
  }));

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const sound = new Howl({
      src: [spinSound],
      autoplay: true,
    });

    // Увеличиваем минимальную скорость вращения
    const randomAngle = Math.floor(Math.random() * 360) + 1080; // Минимум три оборота
    const newAngle = angle + randomAngle;

    api.start({
      transform: `rotate(${newAngle}deg)`,
      onRest: () => {
        setIsSpinning(false);
        setAngle(newAngle % 360);

        const totalPlayers = players.length;
        const degreesPerPlayer = 360 / totalPlayers; 
        const adjustedAngle = (newAngle % 360 + degreesPerPlayer / 2) % 360; 
        let playerIndex = Math.floor(adjustedAngle / degreesPerPlayer); 

        let newActivePlayer = playerIndex - 2; // Предыдущий активный

        // Убедимся, что новый активный игрок не совпадает с текущим
        if (newActivePlayer === activePlayer) {
          // Если совпадает, повторяем вращение
          spin(); // Повторный вызов функции spin
        } else {
          // Если индекс меньше нуля, исправляем его
          newActivePlayer = (newActivePlayer + totalPlayers) % totalPlayers;

          console.log('New Player Index:', playerIndex);
          console.log('New Active Player Index:', newActivePlayer);
          onSpinEnd(newActivePlayer); 
        }
      },
    });

    sound.play();
  };


  return (
<animated.div
  className="bottle"
  style={springs}
  onClick={spin}
>
  <img src={require('../assets/Bottle.png')} alt="Bottle" style={{ width: '70%', height: 'auto' }} /> 
</animated.div>
  );
};

export default Bottle;
