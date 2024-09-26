import React from 'react'

const BookDetail = ({ selectedBook, setShow }) => {
    let thumbnail = selectedBook.volumeInfo.imageLinks && selectedBook.volumeInfo.imageLinks.smallThumbnail;
    let bookTitle = selectedBook.volumeInfo.title;
    let authorName = selectedBook.volumeInfo.authors.join(' AND ');
    let amount = selectedBook.saleInfo.listPrice && selectedBook.saleInfo.listPrice.amount;
    let bookSubtitle = selectedBook.searchInfo.textSnippet.replace(/&#39;/g, "'");

    console.log(selectedBook);
    return (
        <div className='fixed bg-orange-100 z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[90dvh] w-10/12 rounded-2xl p-10'>
            <button className='absolute right-4' onClick={e => setShow(prev => !prev)}>
                <i class="fa-solid fa-xmark fa-xl"></i>
            </button>
            <div className='font-bold'>
                <div className='flex flex-col justify-center items-center gap-2  p-5 bg-rose-200'>
                    <img src={thumbnail} alt="" className='max-w-32' />
                    <h2 >書籍全名：{bookTitle}</h2>
                    <p className='text-orange-700'>作者名稱：{authorName}</p>
                    <p>價格：{amount}</p>
                </div>
                <div className='mt-10 flex flex-col gap-5 bg-rose-400'>
                    <p className='text-center'>書本簡介：<br />{bookSubtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default BookDetail