import React, { useState } from 'react';
import { Card } from './Card';

export const CardInHand = () =>{
  const [cardList, setCardList] = useState([1, 2, 3, 4, 5])

  return(
    <div className='player-card-list'>
      
      {cardList.map( 
        (e, i) =><Card cardID = {e} key = {`player_card_in_hand_`+i}></Card>      
      )}
    </div>
  )
}