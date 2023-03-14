import React, { useState } from 'react';

export const DarkArts = () => {
  const [darkArt, updatedarkArt] = useState({
    cardPullCount: 3,
    lastCard: -1,
  });

  const drawDA = () => {
    updatedarkArt({ ...darkArt, cardPullCount: darkArt.cardPullCount - 1 });
  };

  return (
    <div className="dark-arts-event">
      <button
        className="dark-arts-event__take"
        onClick={() => {
          alert('взять дарк арт');
          drawDA();
        }}
        disabled={darkArt.cardPullCount > 0 ? false : true}
      >
        {darkArt.cardPullCount > 0 ? `осталось карт ${darkArt.cardPullCount}` : 'нечего тянуть'}
      </button>
      <div className="dark-arts-event__last"></div>
    </div>
  );
};
