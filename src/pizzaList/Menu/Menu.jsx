import React from 'react';
import Pizza from "../Pizza.jsx";
import {getPizzaByName, getPizzaData} from "../PizzaData.js";

const Menu = () => {
   const menu = getPizzaData()
   const numMenu = menu.length
   const filter = getPizzaByName("Marghe")

   return (
       <main className='menu'>
          <h2>Our Menu</h2>
          { numMenu > 0
               ? <ul className='pizzas'>
                  {menu.map(pizza =>
                       <Pizza props={pizza} key={pizza.id}/>
                  )}
               </ul>
               : <p>아직 가게 준비 중입니다. 다음 달에 열어요</p>
          }

       </main>
   );
}

export default Menu;