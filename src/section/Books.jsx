import React from 'react'

const Books = ({ booksData }) => {
  console.log(booksData)
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
                <div div className='flex flex-col justify-center items-center gap-3 bg-slate-300 rounded-xl hover:scale-105 transition-all' >
                  <img src={thumbnail} alt="" className='pt-3' />
                  <h2 className='text-center max-w-sm'>{book.volumeInfo.title}</h2>
                  <p className='text-cyan-800'>Price: {amount} NTD</p>
                </div>)
            }

          })}

        </div>
      </div>
    </section >
  )
}

export default Books