import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, Math.floor(Math.random() * 200) + 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <p className="lg:text-6xl md:text-3xl h-20 font-bold lg:pt-3 md:pt-1 leading-tight">{currentText}</p>;
};

export default TypingAnimation;
