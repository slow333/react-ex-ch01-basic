import React from 'react';
import Pizza from "../Pizza.jsx";
import {getPizzaByName, getPizzaData} from "../PizzaData.js";

const Menu = () => {
   const menu = getPizzaData()
   const filter = getPizzaByName("Marghe")

   return (
       <main className='menu'>
          <h2>Our Menu</h2>
          <div className='pizzas'>
             <Pizza props={menu}/>
          </div>
       </main>
   );
}

export default Menu;