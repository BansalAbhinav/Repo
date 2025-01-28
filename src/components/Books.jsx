import React from 'react'
const Books = () => {
    const [books, setBooks] = React.useState([]);
    const [title, settitle] = React.useState('');
    const [author, setauthor] = React.useState('');

    const addbook = () => {
        if( author === '') {
            alert('Please fill all the fields');
            return;
        }
        if(title && author){
            setBooks([...books, { id:Date.now() ,  title, author}]);
            settitle('');
            setauthor('');
        }
    };
    const deletebook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };
  return (
    <div className=''>
      <h2 className='text-2xl font-bold mb-4'>Books</h2>
      <div>
        <input 
        type='text'
        placeholder='Search Books'
        value={title}
        onChange={(e) => setauthor(e.target.value)}
        className='border border-gray-400 p-2 w-full mb-4
        '/>
            <input
            type= "text"
            placeholder='Author'
            className='border border-gray-400 p-2 w-full mb-4'
          value={author}
            onChange={(e) => setauthor(e.target.value)} 
                        ></input>
       <button
       onClick={addbook}
        className='bg-blue-600 cursor-pointer text-white p-2 w-full'
        
        >Add Book</button>
      
      <ul>
        {books.map((book) => (
          <li key={book.id} className='flex justify-between items-center mb-4'>
            <div>
              <h3 className='font-bold'>{book.title}</h3>
              <p>{book.author}</p>
            </div>
            <button
            onClick={() => deletebook(book.id)}
            className='bg-red-600 cursor-pointer text-white p-2'>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div >
  )
}

export default Books
