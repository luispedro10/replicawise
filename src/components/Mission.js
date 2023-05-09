import React from 'react';
import './Mission.scss';

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="title-row">
          <h2>Meet money without<br />borders</h2>
        </div>
        <div className="first-paragraph-row">
          <p>
            Our dream is for people to live and work anywhere<br />
            seamlessly. That means money without borders:<br />
            moving it instantly, transparently, conveniently, and<br />
            — eventually — for free.
          </p>
        </div>
        <div className="image-row">
          <img src="https://wise.com/static-assets/app/_next/static/media/mission-section-2.eedf08cb.jpg" alt="Two hands over a box of peppers, one holding a phone showing the Wise digital card, the other holding a payment tool" />
        </div>
        <div className="bottom-row">
          <div className="second-paragraph-col">
            <p>The Wise account is the universal way for you to manage money internationally.<br />
              It's made for the world. And it's built to save your money and time,
              so you can<br /> do more of the things you love.</p>
          </div>
          <div className="mission-btn-col">
            <a href="https://wise.com/gb/about/our-story" className="mission-button">Learn about our mission</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
