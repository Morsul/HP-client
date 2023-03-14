import React, { Fragment, useEffect, useState } from 'react';

export const Location = () => {
  const [location, updateLocation] = useState({
    id: 0,
    lostHealh: 2,
    maxHealth: 8,
  });

  const drawHealBar = () => {
    const healthBar: Array<JSX.Element> = [];
    for (let i = 1; i <= location.maxHealth; i++) {
      let className = 'health-cell';

      className += i <= location.lostHealh ? ' health-cell__damaged' : '';
      healthBar.push(
        <span className={className} key={'healt-cell_' + i}>
          {i}
        </span>
      );
    }
    return healthBar;
  };

  return (
    <div className="location">
      <div className="location__name">Location ID: {location.id}</div>
      <div className="location__health">{drawHealBar()}</div>
    </div>
  );
};
