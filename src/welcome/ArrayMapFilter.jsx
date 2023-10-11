import React from 'react';
import {getBook, getBooks} from "./DestructureEx.jsx";

const ArrayMapFilter = () => {
   const books = getBooks();

   return (
       <>
          {books.map(book => <p key={book.id}>{book.title}</p>)}
       </>
   );
}

export default ArrayMapFilter;