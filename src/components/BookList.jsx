import React from 'react'
import {Link} from 'react-router-dom'
const BookList = () => {
    const [books, setBooks] = React.useState([

        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { id: 2, title: 'The Catcher in the Rye', author:'J.D. Salinger' },
            { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
            { id: 4, title: '1984', author: 'George Orwell' },
            { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen' },
    
    ]);  
            
    return (
    <div className='p-4`'>
      <h2 className='text-2xl font-bold mb-4'>All Books</h2>
        <ul>
            {books.map((book) => (
            <li key={book.id} className='flex justify-between items-center mb-4'>
                <div>
                <h3 className='font-bold'>{book.title}</h3>
                <p>{book.author}</p>
                </div>
                <Link to={`/books/${book.id}`} className='bg-blue-600 cursor-pointer text-white p-2'>View</Link>
            </li>
            ))}
            </ul>
    </div>
  )
}

export default BookList
