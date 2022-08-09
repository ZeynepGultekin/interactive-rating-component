import React from 'react';
import thankYou from '../images/illustration-thank-you.svg';

function Thanks({isShown, rating}) {
  return (
   <div className='card card__thanks' style={{display: isShown ? 'none' : 'flex'}}>
    <img src={thankYou} alt="illustration thank you" className='card__thanks__img'/>
    <button className='card__thanks__btn'>You selected {rating} out of 5</button>
    <h1 className='card__title'>Thank you!</h1>
    <p className='card__text'>We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>

   </div>
  )
}

export default Thanks