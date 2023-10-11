import React from 'react';
import {getBooks} from "./DestructureEx.jsx";

const ArrayReduceSort = () => {
   const books = getBooks();


   const pagesAllBooks = books.reduce((acc, previousValue) =>
       acc + previousValue.pages, 0)

   // 숫자는 빼기로 하면 정렬 가능 입력 값은 모두 객체로 처리됨
   const sortedByPages = books.slice()
       .sort((a, b) => b.pages - a.pages)
       .map(book => <div key={book.id}>{book.title} : {book.author} ,{book.pages}</div>)
   // 스트링은 빼기로 안되고 비교 연산자를 사용해야함(미리 대문자로 변환 해야함)
   const sortedByTitle = books.slice() // array copy
       .sort( (a, b) => {
          let ta = a.title.toUpperCase();
          let tb = b.title.toUpperCase();
          // if(ta < tb) return -1;
          // if(ta > tb) return 1;
          return (ta < tb) ? -1 : ((ta > tb) ? 1 : 0);
       })
       .map(book => <div key={book.id}>{book.title}, {book.author}</div>)

   return (
       <>
          <h3>reduce : {pagesAllBooks}</h3>
          <h3>[ sorted method ]</h3>
          {sortedByPages}<br/>
          {sortedByTitle}
       </>
   );
}

export default ArrayReduceSort;