import React from 'react';
import {getBooks} from "./data.js";

const ImmutableArray = () => {
    const books = getBooks();
    // add new item
    const newBook = {
        id:6,
        title: "From universe",
        author: "self esteem"
    }

    const booksAdded = [...books, newBook]
    const bookRender = booksAdded.map(book =>
        <div key={book.id}>{book.title}</div>)

    // delete item
    const bookDelete = (id) => booksAdded.filter(b => b.id !== id)
    const bookDeleteRender = bookDelete(3).map(book => <div key={book.id}>{book.title}</div>)

    // update item
    const bookUpdate = (id, title) => bookDelete(3).map(book =>
        book.id === id ? { ...book, title: title } : book
    )

    return (
       <>
           <div>{bookRender}</div>
           <h3>delete from list id</h3>
           <div>{bookDeleteRender}</div>
           <div>by filter : {bookUpdate(1, "new Load of Kings").filter(b => b.id ===1 )[0].title}</div>
           <div>by find : {bookUpdate(2, "사이버리아드").find(b => b.id ===2 ).title}</div>
       </>
   );
}

export default ImmutableArray;