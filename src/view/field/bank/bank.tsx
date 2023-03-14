import React, { useState } from 'react';

export const Bank = () =>{
    const [bank, updateBank] = useState({
    influence: 0,
    attack: 0,
  });

  return (
    <div className="bank">
      <span>Currency</span><span><img src="" alt="Influence" /> {bank.influence}</span><span><img src="" alt="Attack" /> {bank.attack}</span>
    </div>
  )
}