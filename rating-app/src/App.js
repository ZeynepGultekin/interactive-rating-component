import { useState } from 'react';
import star from './images/icon-star.svg';
import Thanks from './component/Thanks';

function App() {
  const [isShown, setIsShown] = useState(true);
  const [rating, setRating] = useState('');
  const [active, setActive] = useState('');
  const handleClick = () => {
    setIsShown(false)
  }
  const handleRating = (e) => {
    setRating(e.target.innerHTML);
    setActive(+e.target.innerHTML)
  }

  return (
    <div className='container'>
    
      <div className='card__rate card' style={{display: isShown ? 'initial' : 'none'}}>
      <div className='card__rate__img'><img src={star} alt="star for rating"/></div>
        <h1 className="card__title">How did we do?</h1>
        <p className="card__text">Please let us know how we did with your support request. All feedback is appreciated 
    to help us improve our offering!</p>
        <ul className="card__rate__list">
          { Array.from(Array(5), (_, index) => index + 1).map((number, key) =>{
           return ( <li key={key}><button 
            className={`card__rate__btn ${active === number && 'active'}`}
            onClick={handleRating}>{number}</button></li>)
          })}
        </ul>
        <button onClick={handleClick} type="button" className="card__sbmt">Submit</button>
      </div>
      
      <Thanks isShown={isShown} rating={rating} />
       
    </div>
  );
}

export default App;

