import React, { useState } from 'react';

export const Villians = () => {
  const [villians, updateVillians] = useState({
    villinasID: [0, 1, 2],
    villiansHP: [
      [0, 10],
      [5, 10],
      [3, 10],
    ],
    villiansLeft: 3,
  });

  return (
    <div className="villains">
      <p>Злодеев осталось {villians.villiansLeft}</p>
      {villians.villinasID.map((_e, i) => (
        <div key={'villianID' + i} className="villian">
          <div className="villina__health">
            Health {villians.villiansHP[i][0]} / {villians.villiansHP[i][1]}
          </div>
        </div>
      ))}
    </div>
  );
};
