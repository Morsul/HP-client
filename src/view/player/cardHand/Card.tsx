import React, { useState } from 'react';
import { CardStateList } from '../../../const';

export const Card = ({cardID}: {cardID: number}) =>{
  const [cardState, setCardState] = useState(CardStateList.CARD_IDLE); 

  return(
    <div className='card-in-hand' >
      {cardID}
      <div className='action-list'>{
          cardState != CardStateList.CARD_IDLE ? (
            <React.Fragment>
              {cardState == CardStateList.CARD_SHOW && 
                <button className='card__play'>Play</button>
              }
              {cardState == CardStateList.CARD_DISCARD && 
                <button className='card__discard'>Discard</button>
              }
              {(cardState == CardStateList.CARD_SHOW || cardState == CardStateList.CARD_DISCARD ) && 
                <button className='card__cancel' onClick={()=>setCardState( CardStateList.CARD_IDLE)}>Cancel</button>
              }
            </React.Fragment>            
          ) : <button className='card__show' onClick={()=>setCardState(CardStateList.CARD_SHOW)}>Chose Card</button>
        }</div>
    </div>
  )
}