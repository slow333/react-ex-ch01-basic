import React from 'react';

const Pizza = ({props}) => {

   const taxPercent = 0.1
   const total = (value) => (value + value*taxPercent)
   return (
      <>
         {props.map(pizza =>
            <div className="pizza" key={pizza.id}>
               <div className={pizza.soldOut ? 'sold-out' : ''}>
                  <img src={pizza.photoName} alt={'pizza image'}/>
               </div>
               <div style={{alignContent: "start"}} className={pizza.soldOut ? 'sold-out' : ''}>
                  <h3 key={pizza.name}>{pizza.name}</h3>
                  <p>{pizza.ingredients}</p>
                  <span>${total(pizza.price)} tax added</span>
               </div>
            </div>
         )}
      </>
   );
}

export default Pizza;