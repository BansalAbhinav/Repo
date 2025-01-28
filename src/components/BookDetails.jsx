import React from 'react'
import {Link, useParams} from 'react-router-dom'
const books=[
    {id:1, title:'The Great Gatsby', author:'F. Scott Fitzgerald', Description:'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.'},
    {id:2, title:'The Catcher in the Rye', author:'J.D. Salinger',Description:'The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It was originally intended for adults but is read by adolescents for its themes of angst and alienation, and as a critique on superficiality in society.'},
    {id:3, title:'To Kill a Mockingbird', author:'Harper Lee',Description:'To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools.'},

]
const BookDetails = () => {

    const {id} = useParams();
            const book = books.find((book) => book.id === Number(id));
       if(!book) {
           return <h1>Book not found</h1>;
       }
  return (
    <div className='p-4'>
        <h2 className='text-3xl font-bold'>{book.title}</h2>
        <p className='text-xl'> By{book.author}</p>
        <p className='text-lg'> {book.Description}</p>
        <Link to='/books' className='bg-blue-600 cursor-pointer text-white p-2 mt-4'>Back</Link>
    
   
    </div>
  )
}

export default BookDetails
