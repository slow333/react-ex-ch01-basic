import React from "react";

const Footer = () => {

   const hour = new Date().getHours();

   const openHour = 11;
   const closeHour = 22;
   const isOpen = hour >= openHour && hour <= closeHour;

   if(!isOpen) {
      return (
           <div className='footer order'>
              영업 시간은 {openHour}:00 ~ {closeHour}:00 입니다.
           </div>
      )
   }

   return (
        <footer className='footer'>
           {isOpen &&
                <div className='order'>
                   <div>
                      영업 중입니다. {closeHour}:00에 닫어요.
                   </div>
                   <button className='btn' >주문하세요</button>
                </div>
           }

        </footer>
   );
}

export default Footer;