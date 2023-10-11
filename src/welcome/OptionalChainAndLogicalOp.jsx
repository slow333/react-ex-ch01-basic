import React from 'react';
import {data} from "./data.js";
import {getBook} from "./DestructureEx.jsx";


const OptionalChainAndLogicalOp = () => {

   const book = getBook(3);
   const getYear = (str) => str.split("-")[0]

   const summary = `a book published at ${getYear(book.publicationDate)}.
   The book has ${book.hasMovieAdaptation ? "" : "not"} adapted as a movie`

   // logical operand used by default value
   // true && "value" , false || "default value"

   const spanishTranslation = book.translations.spanish || "Not translated with spanish"
   // const count = book.reviews.librarything.reviewsCount || "no data reviews"
   const count2 = book.reviews.librarything?.reviewsCount ?? "no data reviews"

   //optional chaining
   function getTotalReviewCount (book) {
      const goodreads = book.reviews?.goodreads?.reviewsCount || 0;
      const libraything = book.reviews?.librarything?.reviewsCount ?? 0;
      return goodreads + libraything;
   }

   return (
       <>
          <div>{summary}</div>
          <div>{getTotalReviewCount(book)}</div>
       </>
   );
}

export default OptionalChainAndLogicalOp;