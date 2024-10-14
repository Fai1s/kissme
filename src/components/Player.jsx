import React from 'react';
import '../styles/Player.css';

const Player = ({ player, isActive, isSelected, index }) => {
  const totalPlayers = 10;
  const radius = 20;
  const angle = (2 * Math.PI / totalPlayers) * index;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const positionStyle = {
    position: 'absolute',
    left: `calc(50% + ${x}vmin)`,
    top: `calc(50% + ${y}vmin)`,
    transform: 'translate(-50%, -50%)',
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
