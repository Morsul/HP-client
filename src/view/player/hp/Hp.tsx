import React, { useState } from 'react';

export const HP = () =>{
  const [HPpool, setHp] = useState({
    maxHealth: 10,
    currentHealth: 4,
  });

  const drawHPpool = () => {
    const healthBar: Array<JSX.Element> = [];
    for (let i = HPpool.maxHealth; i >= 0; i--) {
      let className = 'cell cell-hp';

      className += i > HPpool.currentHealth ? ' cell-hp__damaged' : '';
      healthBar.push(
        <span className={className} key={'player__cell-hp_' + i}>
          {i}
        </span>
      );
    }

    healthBar.push(
      <span className='cell cell-stun' key={'player-hp-cell_stun'}>S</span>
    )

    return healthBar;
  };

  return (
    <div className='HPpool'>
      {drawHPpool()}
    </div>
  )
}