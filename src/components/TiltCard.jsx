import { useState, useRef } from 'react';

export default function TiltCard({ children, className = '', maxTilt = 10 }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse position relative to the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert position to range between -0.5 and 0.5
    const px = (x / width) - 0.5;
    const py = (y / height) - 0.5;

    // Calculate rotation angles
    const rotateX = -py * maxTilt;
    const rotateY = px * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out', // Make tracking responsive
      zIndex: 10,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    });
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {children}
    </div>
  );
}
