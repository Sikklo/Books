import React from 'react'
import { title } from '../constants'

const Hero = ({ search, setSearch,searchBooks }) => {
    return (
        <section className='bg-orange-200 mb-5 py-5'>
            <div className='py-10 px-2 flex flex-col items-center justify-center flex-1'>
                <h1 className='py-5 font-bold md:text-3xl text-xl'>{title.text}</h1>
                <p className='text-gray-700 md:text-xl text-sm'>{title.subText}</p>
            </div>
            <div className='flex items-center justify-center w-full'>
                <div className='relative flex items-center justify-center'>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={searchBooks}
                        placeholder='Discover books' className='relative text-center py-2 px-2 rounded-full min-w-44 focus:min-w-56 transition-all' />
                    <i className="fa-solid fa-magnifying-glass absolute left-5"></i>
                </div>
            </div>
        </section>
    )
}

export default Hero