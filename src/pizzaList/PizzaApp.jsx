import React from "react";
import Header from "./Header/Header.jsx";
import Menu from "./Menu/Menu.jsx";
import Footer from "./Footer/Footer.jsx";

function PizzaApp() {

   return (
       <div className='container'>
          <Header/>
          <Menu/>
          <Footer/>
       </div>
   );
}

export default PizzaApp
