import React, {useEffect, useState} from 'react';

// jsonplaceholder.typicode.com
const AsyncPromises = () => {

   const [todos, setTodos] = useState([])

   // function fetchData() {
   //    fetch('https://jsonplaceholder.typicode.com/todos')
   //        .then(response => response.json())
   //        .then(json => setTodos(json))
   // }
   async function getTodos() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await res.json()
      setTodos(data)
      // console.log(data)
   }

   useEffect(() => {
      getTodos()
   }, []);

   return (
       <>
          <div>{todos.map(todo => <div key={todo.id}>{todo.title}</div>)}</div>
       </>
   );
}

export default AsyncPromises;