import React from 'react';
import '../styles/Player.css';

const Player = ({ player, isActive, isSelected, index }) => {
  const totalPlayers = 10; // Общее количество игроков
  const radius = 20; // Радиус круга в vmin (можно корректировать для внешнего вида)
  
  // Вычисление угла для каждого игрока в радианах
  const angle = (2 * Math.PI / totalPlayers) * index;

  // Вычисление позиции игрока по координатам X и Y
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const positionStyle = {
    position: 'absolute',
    left: `calc(50% + ${x}vmin)`, // Смещение влево
    top: `calc(50% + ${y}vmin)`,  // Смещение вверх
    transform: 'translate(-50%, -50%)', // Центрирование аватарки
  };

  return (
    <div
      className={`player-avatar ${isActive ? 'active' : ''} ${isSelected ? 'selected' : ''}`}
      style={positionStyle}
    >
      <img src={player.image} alt={player.name} />
      <span>{player.name}</span>
    </div>
  );
};

export default Player;
