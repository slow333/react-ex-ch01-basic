import React from 'react';
import {getPizzaByName, getPizzaData} from "./PizzaData.js";

const Script = () => {
   const pizzaData = getPizzaData();
   const filter = getPizzaByName("Marghe")

   return (
        <div>
           {pizzaData.map(pizza => {
              return (
                   <div className="container" key={pizza.name}>
                      <div  className='pizza'>
                         <img src={pizza.photoName} alt={'pizza image'}/>
                         <h3 key={pizza.name} style={{width: "13rem"}}>{pizza.name}</h3>
                         <div>
                            <p style={{width: "100%"}}>{pizza.ingredients}</p>
                            <p>${pizza.price}</p>
                            <div className='sold-out'>{pizza.soldOut ? "sold out" : "can order"}</div>
                         </div>
                      </div>
                   </div>

              )
           })}
        </div>
   );
}

export default Script;