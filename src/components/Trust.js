import React, { useState } from 'react';
import './Trust.scss';

const Trust = () => {
 
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  
  const trustCards = [
    {
      imgSrc: 'https://wise.com/static-assets/app/_next/static/media/expats-v3@2x.c2d88418.png',
      quote: '“ Wise has changed the game in terms of simplicity, and certainly been a lifesaver for expat living. ”',
      buttonText: 'Watch video',
      buttonColor: '#163300',
    },
    {
      imgSrc: 'https://wise.com/static-assets/app/_next/static/media/uk.d10318b2.svg',
      quote: '“ I use Wise to pay a mortgage in a different country each month. Superb. That simple. ”',
      buttonText: 'Gerald On Trustpilot',
      buttonColor: '#9FE870',
    },
    {
      imgSrc: 'https://wise.com/static-assets/app/_next/static/media/us.f6645a01.svg',
      quote: '“ The best money travel buddy! Wise makes finances easier to deal with instantly. ”',
      buttonText: 'Gemma On Trustpilot',
      buttonColor: 'black',
    },
  ];

  
  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? trustCards.length - 1 : prevIndex - 1));
    } else {
      setCurrentCardIndex((prevIndex) => (prevIndex === trustCards.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <section className="trust-section">
      <div className="trust-container">
        <div className="trust-title">
          <h2>For people<br />going places</h2>
        </div>
        <div className="trust-controls">
        <div className="arrow-buttons-wrapper"> 
          <button className="arrow-btn arrow-left" onClick={() => handleArrowClick('left')}>
            <svg width="32" height="32" fill="#454745" focusable="false" viewBox="0 0 24 24">
              <path d="M22.286 11.316H4.629l7.114-7.114-1.2-1.2-8.572 8.571a.829.829 0 0 0 0 1.2l8.572 8.572 1.2-1.2-7.114-7.114h17.657v-1.715Z"></path>
            </svg>
          </button>
          </div>
          <button className="arrow-btn arrow-right" onClick={() => handleArrowClick('right')}>
            <svg width="32" height="32" fill="#454745" focusable="false" viewBox="0 0 24 24">
              <path d="m22.029 11.57-8.572-8.572-1.2 1.2 7.115 7.114H1.713v1.715h17.658l-7.115 7.114 1.2 1.2 8.572-8.572a.829.829 0 0 0 0-1.2Z"></path>
            </svg>
          </button>
        </div>
        <div className="trust-cards-wrapper"> 
        <div className="trust-cards-container"> 
          {trustCards.map((card, index) => (
            <div
              key={index}
              className={`trust-card trust-card-${index + 1}${index === currentCardIndex ? ' trust-card-active' : ''}`}
            >
              <img src={card.imgSrc} alt="Trust card image" />
              <p>{card.quote}</p>
              <button
              className="watch-video-btn"
              style={{
                borderColor: card.buttonColor,
                color: card.buttonColor,
                '--hover-color': card.buttonColor,
               }}
            >
             {card.buttonText}
            </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
};

export default Trust;
