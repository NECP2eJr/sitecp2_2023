import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

const ScrollTitleEffect = () => {
  const colors = ['#FEA626', '#567498'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(-window.scrollY); // Multiplicamos por -1 para inverter o sentido do deslizamento
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const titleWords = 'PORTFÓLIO PORTFÓLIO PORTFÓLIO PORTFÓLIO PORTFÓLIO PORTFÓLIO PORTFÓLIO'.split(' ');

  return (
    <Element name="title">
      <h1
        style={{
          transition: 'none',
          transform: `translateX(${scrollX / 3}px)`, // Ajuste o valor de divisão para controlar a velocidade do deslocamento
          whiteSpace: 'nowrap',
        }}
      >
        {titleWords.map((word, index) => (
          <span
            key={index}
            style={{
              color: colors[index % colors.length],
              fontFamily: 'Bebas Neue',
              fontSize: '70px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '16px',
              transform: 'rotate(-1.215deg)',
            }}
          >
            {word}
            {index < titleWords.length - 1 && ' '}
          </span>
        ))}
      </h1>
    </Element>
  );
};

export default ScrollTitleEffect;
