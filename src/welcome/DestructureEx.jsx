import {data, getBook, getBooks} from "./data.js";

export default function DestructureEx() {
   const books = getBooks();
   const book = getBook(1);
   const {title, author, genres, pages, hasMovieAdaptation} = book;
   const [primary, secondary, ...otherGenres] = genres;
   const newGenres = ["horrors", ...genres]
   const updateBook = {...book, author: "me make", pages: 1300}

   return (
       <div>
          {/*{books.map(b => <li key={b.id}>{b.title}</li>)}*/}
          {/*{title} : {author} , genres: {genres.map(g => <p key={book.id}>{g}</p>)}*/}
          <h2>spread op </h2>
          {primary} , {secondary}, {otherGenres.map(og => <h5 key={og}>{og}</h5>)}
          {/*{newGenres.map(ng => <p key={ng}>{ng}</p>)}*/}
          <h3>update obj</h3>
          {updateBook.pages}, {updateBook.author}, {updateBook.title}
       </div>
   )
}