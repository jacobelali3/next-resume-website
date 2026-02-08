'use client';
import { useState } from 'react';

function QuantumGateway() {
  const [position, setPosition] = useState({ x: 85, y: 15 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [trail, setTrail] = useState([]);

  const moveToRandomPosition = () => {
    if (isAnimating) return;

    const newX = Math.random() * 85 + 5;
    const newY = Math.random() * 85 + 5;

    const steps = 15;
    const trailPoints = [];

    for (let i = 0; i <= steps; i++) {
      const progress = i / steps;
      trailPoints.push({
        x: position.x + (newX - position.x) * progress,
        y: position.y + (newY - position.y) * progress,
        opacity: 1 - progress * 0.7,
        delay: i * 30,
      });
    }

    setIsAnimating(true);
    setTrail(trailPoints);
    setPosition({ x: newX, y: newY });

    setTimeout(() => {
      setIsAnimating(false);
      setTrail([]);
    }, 1000);
  };

  return (
    <>
      {trail.map((point, idx) => (
        <div
          key={idx}
          className="absolute pointer-events-none"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            zIndex: 9998,
            opacity: point.opacity,
            transition: `opacity ${800 - point.delay}ms ease-out`,
            transitionDelay: `${point.delay}ms`,
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="8" stroke="rgba(100, 200, 255, 0.4)" strokeWidth="1" fill="rgba(100, 200, 255, 0.1)" />
            <circle cx="20" cy="20" r="4" fill="rgba(150, 220, 255, 0.3)" />
          </svg>
        </div>
      ))}

      <div
        className={`absolute cursor-pointer hover:scale-110 transition-all duration-700 ease-out ${
          isAnimating ? 'animate-pulse' : ''
        }`}
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          zIndex: 9999,
          filter: 'drop-shadow(0 0 8px rgba(100, 200, 255, 0.8))',
          transform: 'translate(-50%, -50%)',
        }}
        onClick={moveToRandomPosition}
        title="🌀"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
          style={{ animationDuration: '8s' }}
        >
          <circle cx="20" cy="20" r="15" stroke="rgba(100, 200, 255, 1)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
          <circle cx="20" cy="20" r="11" stroke="rgba(150, 220, 255, 0.9)" strokeWidth="2" fill="none" />
          <circle cx="20" cy="20" r="7" stroke="rgba(200, 230, 255, 1)" strokeWidth="1.5" fill="rgba(100, 200, 255, 0.3)" />
          <circle cx="20" cy="20" r="3" fill="rgba(200, 230, 255, 1)" />
          <line x1="20" y1="5" x2="20" y2="8" stroke="rgba(150, 220, 255, 1)" strokeWidth="1.5" />
          <line x1="20" y1="32" x2="20" y2="35" stroke="rgba(150, 220, 255, 1)" strokeWidth="1.5" />
          <line x1="5" y1="20" x2="8" y2="20" stroke="rgba(150, 220, 255, 1)" strokeWidth="1.5" />
          <line x1="32" y1="20" x2="35" y2="20" stroke="rgba(150, 220, 255, 1)" strokeWidth="1.5" />
        </svg>
      </div>
    </>
  );
}

export default QuantumGateway;
