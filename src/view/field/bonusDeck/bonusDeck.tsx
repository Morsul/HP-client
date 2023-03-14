import React, { useState } from 'react';

export const BonusDeck = () => {
  const [bonusDeck, updatebonusDeck] = useState({
    cardLeft: 'X',
    cardsInPlay: ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'],
  });

  return (
    <div className="bonus-deck">
      <div className="card__count">Cards Left: {bonusDeck.cardLeft}</div>
      <button className="bonus-deck__update" onClick={() => alert('обновить карты')}>
        Discard cards
      </button>
      <div className="card-list">
        {bonusDeck.cardsInPlay.map((e, i) => (
          <button key={`card__played+${i}`} className={`card__played card__played${i}`} onClick={() => alert('купил карту')}>
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};
