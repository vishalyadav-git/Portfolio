import { useState, useEffect } from 'react';

export default function TypingEffect({ 
  strings = [], 
  typeSpeed = 100, 
  backSpeed = 50, 
  backDelay = 1500,
  loop = true 
}) {
  const [currentText, setCurrentText] = useState('');
  const [arrayIndex, setArrayIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (strings.length === 0) return;

    let timer;
    const fullText = strings[arrayIndex];

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, backSpeed);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, typeSpeed);
    }

    // Handle state transitions
    if (!isDeleting && currentText === fullText) {
      // Pause at full text
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, backDelay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      // Move to next string
      setArrayIndex((prevIndex) => {
        if (prevIndex === strings.length - 1) {
          return loop ? 0 : prevIndex;
        }
        return prevIndex + 1;
      });
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, arrayIndex, strings, typeSpeed, backSpeed, backDelay, loop]);

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      <span>{currentText}</span>
      <span style={{
        animation: 'blink 0.8s infinite',
        color: 'var(--color-secondary)',
        fontWeight: 'bold',
        marginLeft: '2px',
      }}>|</span>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
