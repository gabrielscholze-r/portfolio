import React from 'react';
import './Background.css';

const getRandomPosition = () => Math.random() * 100 + '%'; // Posição aleatória das linhas
const getRandomDelay = () => Math.random() * 5; // Delay aleatório para animações

export default function Background() {
  return (
    <div className="geometric-background">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="wave"
          style={{
            animationDelay: `${getRandomDelay()}s`,
            animationDuration: `${15 + Math.random() * 15}s`,
          }}
        ></div>
      ))}
      
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="line"
          style={{
            left: getRandomPosition(),
            animationDelay: `${getRandomDelay()}s`,
            animationDuration: `${20 + Math.random() * 20}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
