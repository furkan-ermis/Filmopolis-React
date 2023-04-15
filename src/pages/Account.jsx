import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className="w-full text-white">
    <img
          className="absolute bottom-0 w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="/"
        />
        <div className="bg-black/70 fixed bottom-0 left-0 w-full h-[400px]"></div>
        <div className="absolute bottom-[40%] p-4 md:p-8">
          <h1 className='text-3xl md:text-5xl font-bold'>Listem</h1>
        </div>
    </div>
    <div className='absolute bottom-[50%] w-full p-4 md:p-8'><SavedShows/></div>
    
    </>
  )
}

export default Account