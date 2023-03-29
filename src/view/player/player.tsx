import React, { useState } from 'react';
import { CardInHand } from './cardHand/CardHand';
import { HP } from './hp/Hp';

import './player.scss';

export const Player = ({name, description, gameAbility}: {name: string, description: string, gameAbility: string}) =>{
  return(
    <div className='player-stats'>
      <section className='left-column'>
        {/* <RingList /> */}
        <div className="player-description">
          <h4>{name}</h4>
          <p>{gameAbility}</p>
        </div>
        <CardInHand />
      </section>
      
      <section className='rigt-column'>
        <HP/>
      </section>
    </div>
  )
}