import React, { useState } from 'react';
import Player from './Player';
import Bottle from './Bottle';
import Counter from './Counter';
import background from '../assets/background.jpg';
import '../styles/Board.css';

const players = [
  { name: 'Игрок 1', image: require('../assets/Regular face 1.png') },
  { name: 'Игрок 2', image: require('../assets/Regular face 2.png') },
  { name: 'Игрок 3', image: require('../assets/Regular face 3.png') },
  { name: 'Игрок 4', image: require('../assets/Regular face 4.png') },
  { name: 'Игрок 5', image: require('../assets/Regular face 5.png') },
  { name: 'Игрок 6', image: require('../assets/Regular face 6.png') },
  { name: 'Игрок 7', image: require('../assets/Regular face 7.png') },
  { name: 'Игрок 8', image: require('../assets/Regular face 8.png') },
  { name: 'Игрок 9', image: require('../assets/Regular face 9.png') },
  { name: 'Игрок 10', image: require('../assets/Regular face 10.png') },
];

const Board = () => {
  const [activePlayer, setActivePlayer] = useState(0);
  const [kissCount, setKissCount] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleSpinEnd = (newPlayer) => {
    setSelectedPlayer(newPlayer);
    setTimeout(() => {
      setKissCount(kissCount + 1);
      setActivePlayer(newPlayer);
      setSelectedPlayer(null);
    }, 2000);
  };

  return (
    <div className="board" style={{ backgroundImage: `url(${background})` }}>
      <div className="center-container">
        <div className="players-circle">
          {players.map((player, index) => (
            <Player
              key={index}
              player={player}
              isActive={index === activePlayer}
              isSelected={index === selectedPlayer}
              index={index}
            />
          ))}
        </div>
        <Bottle
          onSpinEnd={handleSpinEnd}
          activePlayer={activePlayer}
          players={players}
        />
      </div>
      <Counter count={kissCount} />
    </div>
  );
};

export default Board;
