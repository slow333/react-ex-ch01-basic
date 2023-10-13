import React from 'react';

const Pizza = ({props}) => {

   const taxPercent = 0.1
   const total = (value) => (value + value * taxPercent)

   // if(props.soldOut) return null

   return (
        <li className={`pizza ${props.soldOut && 'sold-out'}`}>
              <img src={props.photoName} alt={'pizza image'}/>
           <div>
              <h3 key={props.name}>{props.name}</h3>
              <p>{props.ingredients}</p>
              <span>{total(props.price*1300)}원 tax added</span>
           </div>
        </li>
   );
}

export default Pizza;