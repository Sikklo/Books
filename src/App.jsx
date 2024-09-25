
import { useEffect, useState } from 'react'
import './index.css'
import Books from './section/Books'
import Hero from './section/Hero'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('');
  const [booksData, setBooksData] = useState([]);
  const searchBooks = (e) => {
    if (e.key === 'Enter') {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDPmO14wW7omHE2bGucT9i5JMQ-TMZ9NUE&maxResults=40`)
        .then(res => setBooksData(res.data.items))
        .catch(err => console.error(err))
    }
  }
  return (
    <main className='font-Inria-Sans'>
      <Hero search={search} setSearch={setSearch} searchBooks={searchBooks} />
      <Books booksData={booksData} />
    </main>
  )
}

export default App
