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
        <h1 className='text-rose-600 text-4xl fond-bold cursor-pointer'>FILMOPOLIS</h1>
      </Link>
        {user?.email ? 
        <div>
          <Link to='/account'>
            <button className='hidden text-white pr-4 sm:inline-block'> Hesabım </button>
          </Link>
           <button onClick={handleLogout} className='bg-rose-600 px-1 sm:px-6 py-1 rounded cursor-pointer text-white'>Cıkıs Yap </button> 
        </div> 
        :
        <div>
          <Link to='/login'>
            <button className='hidden text-white pr-4 sm:inline-block '> Giris Yap </button>
          </Link>
          <Link to='/signup'>
           <button className='bg-slate-700 sm:bg-rose-600 px-1 sm:px-6 py-1 sm:py-2 rounded cursor-pointer text-white'>Kayıt Ol </button> 
          </Link>
        </div>
        }
    </div>
  )
}

export default Navbar