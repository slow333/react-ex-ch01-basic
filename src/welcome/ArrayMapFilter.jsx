import React from 'react';
import {getBooks} from "./DestructureEx.jsx";
import {getTotalReviewCount} from "./OptionalChainAndLogicalOp.jsx";

const ArrayMapFilter = () => {
   const books = getBooks();
   const titles = books.map(book => <p key={book.id}>{book.title}</p>)
   const essentialData = books.map(book => {
      return {
         title: book.title, author: book.author,
         reviewCount: getTotalReviewCount(book)
      }
   })

   const longPageBookWithMovie= books
       .filter(book=> book.pages > 500 )
       .filter(book => book.hasMovieAdaptation)

   const adventureBook = books
       .filter(books => books.genres.includes('adventure'))
       .map(book => <p key={book.id}><strong>{book.author}</strong></p>)

   return (
       <>
          <h3>map for title : </h3>{titles}
          <h3>[ data 추출 : map ]</h3>
          {essentialData.map(ed => <h5 key={ed.title}>
             제목 : {ed.title}, 작가: {ed.author}, 리뷰 수: {ed.reviewCount}</h5>)}
          <h3>[ data filtering and mapping ]</h3>
          {longPageBookWithMovie.map(book => <div key={book.id}>{book.title}, {book.pages}</div>)}
          {adventureBook}

       </>
   );
}

export default ArrayMapFilter;