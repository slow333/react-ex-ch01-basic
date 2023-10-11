import {useEffect, useState} from 'react';

const FetchData = () => {

   const [advice, setAdvice] = useState("")
   const [count, setCount] = useState(0)

   async function getAdvice() {
      const res = await fetch("https://api.adviceslip.com/advice")
      const data = await res.json()
      setAdvice(data.slip.advice)
      setCount( c => c + 1)
   }

   useEffect(() => {
      getAdvice();
   }, []);

   return (
       <div>
          <h3>{advice}</h3>
          <button onClick={getAdvice}>Get advice</button>
          <br/>
          <Message count={count}/>
       </div>
   );
};

function Message({count}) {
   return (
       <p>
          <strong>{count}</strong>개의 advice를 읽었습니다.
       </p>
   )
}
export default FetchData;