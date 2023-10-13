import React from "react";
import Header from "./Header/Header.jsx";
import Menu from "./Menu/Menu.jsx";
import Footer from "./Footer/Footer.jsx";
import {getPizzaByName, getPizzaData} from "./PizzaData.js";

function PizzaApp() {
   const menu = getPizzaData()
   const filter = getPizzaByName("Marghe")

   return (
       <div className='container'>
          <Header/>
          <Menu pizzaList={menu}/>
          <Footer />
       </div>
   );
}

export default PizzaApp
