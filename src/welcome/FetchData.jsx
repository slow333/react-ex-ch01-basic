import {useEffect, useState} from 'react';

const FetchData = () => {

   const [advice, setAdvice] = useState("")
   const [count, setCount] = useState(0)

   async function getAdvice() {
      const res = await fetch("https://api.adviceslip.com/advice")
      const data = await res.json()
       console.log("...", count)
      setAdvice(data.slip.advice)
      setCount( c => c + 1)
   }

   useEffect(() => {
      getAdvice();
   }, []);

   return (
       <div>
          <h2>{advice}</h2>
          <button onClick={getAdvice} className="btn-click">Get advice</button>
          <hr/>
          <Message count={count}/>
       </div>
   );
};

function Message({count}) {
   return (
       <p style={{fontSize:"20px"}}>
          <strong style={{color:"red"}}>{count}개의</strong> advice를 읽었습니다.
       </p>
   )
}
export default FetchData;