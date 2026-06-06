import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0, threshold = 0.1 }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after showing so we don't re-trigger
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it hits viewport center
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold]);

  const style = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={elementRef}
      className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
