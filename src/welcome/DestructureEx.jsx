import {data} from "./data.js";

function getBooks() {
   return data;
}

function getBook(id) {
   return data.find( d => d.id === id)
}

export default function DestructureEx() {
   const  books = getBooks();
   const book = getBook(5);
   const { title, author, genres, pages } = book;
   const [primary, secondary, ...otherGenres] = genres;
   const newGenres = [ "horrors", ...genres ]
   const updateBook = { ...book, author: "me make", pages: 1300 }

   // template literals
   const summary = `a book for about '${title}' and pages-${pages} written by ${author}
   published at ${book.publicationDate.split('-')[0]}.
   The book has ${book.hasMovieAdaptation ? "" : "not"} adapted as a movie`
   return (
       <div>
          {/*{books.map(b => <li key={b.id}>{b.title}</li>)}*/}
          {/*{title} : {author} , genres: {genres.map(g => <p key={book.id}>{g}</p>)}*/}
          <h2>spread op </h2>
          {primary} , {secondary}, {otherGenres.map(og => <h5 key={og}>{og}</h5>)}
          {/*{newGenres.map(ng => <p key={ng}>{ng}</p>)}*/}
          <h3>update obj</h3>
          {updateBook.pages}, {updateBook.author}, {updateBook.title}
          <div>template literals  === 👌
             {summary}</div>
          <div>The book has {updateBook.pages > 1000 ? "over a thousand" : 'less than 1000'} pages.</div>
       </div>
   )
}