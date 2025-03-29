import React from 'react';
import './Background.css'

const getRandomPosition = () => Math.random() * 95 + '%';
const getRandomDelay = () => Math.random() * 2; 

export default function Background() {
  return (
    <div className="geometric-background">
      {[...Array(3)].map((_, i) => (
        <div 
          key={i}
          className="geometric-shape square" 
          style={{
            left: getRandomPosition(),
            animationDelay: `${getRandomDelay()}s`,
            animationDuration: `${30 + Math.random() * 30}s`,
          }}
        ></div>
      ))}
    </div>
  );
}