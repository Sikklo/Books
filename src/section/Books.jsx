import React, { useState } from 'react'
import BookDetail from '../components/BookDetail';

const Books = ({ booksData }) => {
  const [show, setShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState([]);
  const handleShowToggle = (book) => {
    setSelectedBook(book);
    setShow(prev => !prev);
  }
  console.log(booksData);
  return (
    <section>
      <div className='w-full flex justify-center items-center'>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 mx-5'>
          {/* 以下開始map */}
          {booksData.map((book) => {
            let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
            let amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount
            if (thumbnail !== undefined && amount !== undefined) {
              return (
                <div className='flex flex-col justify-center items-center gap-3 bg-slate-300 rounded-xl hover:scale-105 transition-all cursor-pointer' key={book.title}>
                  <img src={thumbnail} alt="" className='pt-3' />
                  <h2 className='text-center max-w-sm'>{book.volumeInfo.title}</h2>
                  <p className='text-cyan-800'>Price: {amount} NTD</p>
                  <button className='btn' onClick={() => handleShowToggle(book)}>詳細資料</button>
                </div>
              )
            }
          })}
        </div>
      </div>
      {show && selectedBook && (
        <BookDetail selectedBook={selectedBook} setShow={setShow} />
      )}
    </section >
  )
}

export default Books