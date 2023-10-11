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
          <h1>hello world</h1>
          <button onClick={getAdvice}>Get advice</button>
          <br/>{advice}
          <Message count={count}/>
       </div>
   );
};

// eslint-disable-next-line react/prop-types
function Message({count}) {
   return (
       <p>
          <strong>{count}</strong>개의 advice를 읽었습니다.
       </p>
   )
}
export default FetchData;