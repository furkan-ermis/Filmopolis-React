import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext';
const Navbar = () => {
  const {user ,logOut}=UserAuth()
  const navigate=useNavigate()

  const handleLogout = async () =>{
    try{
      await logOut()
      navigate('/')
    } catch(error){console.log(error)}
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100]  w-full absolute'>
      <Link to='/'>
        <h1 className='text-yellow-400 hover:text-white text-4xl font-bold cursor-pointer' style={{fontFamily: 'Light'}}>FILM<span className='text-7xl'>O</span>POLIS</h1>
      </Link>
        {user?.email ? 
        <div>
          <Link to='/account'>
            <button className='hidden hover:bg-black  bg-gradient-to-r from-transparent text-white via-black  to-black pr-4 sm:inline-block'> Hesabım </button>
          </Link>
           <button onClick={handleLogout} className='hover:bg-yellow-400  bg-gradient-to-l from-transparent  via-yellow-500  to-yellow-200 px-1 sm:px-6 py-1 rounded cursor-pointer text-white'>Cıkıs Yap </button> 
        </div> 
        :
        <div>
          <Link to='/login'>
            <button className='hidden  font-bold  hover:bg-black  bg-gradient-to-r from-transparent text-white via-black  to-black px-1 sm:px-6 py-1 sm:py-2 rounded cursor-pointer mr-3 sm:inline-block '> Giris Yap </button>
          </Link>
          <Link to='/signup'>
           <button className='hidden text-black font-bold  hover:bg-yellow-400  bg-gradient-to-l from-transparent  via-yellow-500  to-yellow-200 px-1 sm:px-6 py-1 sm:py-2 rounded cursor-pointer sm:inline-block '>Kayıt Ol </button> 
          </Link>
        </div>
        }
    </div>
  )
}

export default Navbar