const Footer = () => {

   const hour = new Date().getHours();
   const openHour = 11;
   const closeHour = 22;

   const isOpen = (hour >= openHour && hour <= closeHour)
        ? "영업 중입니다." : "아직 안 열었어요, 문 닫았어요."

   return (
        <footer className='footer'>
           {new Date().toLocaleDateString()} : {hour}시  {isOpen}
        </footer>
   );
}

export default Footer;