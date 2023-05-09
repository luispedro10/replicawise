import React from 'react';
import './Lock.scss';

const Lock = () => {
  return (
    <div className="lock-container">
      <div className="content-wrapper">
        <h1 className="title">Disappoint thieves</h1>
        <p className="subtitle">
          Every month, our customers trust us to move around £9<br />
          billion of their money. Here are some of the important<br />
          ways we protect them.
        </p>
        <button className="button-safe">How we keep your money safe</button>
      </div>
      <img
        className="lock-image"
        src="https://wise.com/web-art/assets/illustrations/lock-large@1x.webp"
        alt="Lock"
      />
    </div>
  );
};

export default Lock;
