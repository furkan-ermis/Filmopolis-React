import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {UserAuth} from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("");
  const {  logIn } = UserAuth();
    const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };





  return (
    <>
      <div className="perspective-6 w-full h-screen overflow-hidden">
       
       <img src={process.env.PUBLIC_URL+"poster.png"} alt="/" className="hidden rounded-3xl  rotate-x-20 rotate-y-55  -rotate-z-20 scale-110 sm:block absolute -right-[11rem] bottom-[16rem] w-[70%] min-h-full  object-cover" />
       <img src={process.env.PUBLIC_URL+"poster.png"} alt="/" className="sm:hidden fixed w-full min-h-[85%] bottom-0 object-cover" />
       <div className="bg-black/60  fixed top-0 left-0 w-full h-screen"></div>
       <div className=" bg-gradient-to-l from-black/10 via-black/40  to-black/80 fixed top-0 left-0 w-[100%] h-screen"></div>
       
       <div className="fixed w-full bottom-[22em]  sm:bottom-[2em] sm:left-16 px-4 py-24 z-50  ">
         <div className="max-w-[400px] h-[340px]  bg-black/40   backdrop-blur rounded-3xl  text-white">
           <div className="max-w-[350px] mx-auto py-2">
             <h1 className="text-3xl font-bold">Giris Yap</h1>
              {error ? <p className="p-3 bg-red-400 my-2">{error}</p>:null}
              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input
                onChange={(e)=>setEmail(e.target.value)}
                  className="outline-none p-3 my-2 bg-transparent shadow-md shadow-slate-500 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="Email"
                />
                <input
                onChange={(e)=>setPassword(e.target.value)}
                  className="outline-none p-3 my-2 bg-transparent shadow-md shadow-slate-500 rounded"
                  type="password"
                  placeholder="Parola"
                  autoComplete="Parola"
                />
                <button className="hover:bg-gradient-to-r hover:from-yellow-400  hover:to-transparent hover:text-black  border  border-yellow-400 py-3 my-6 rounded font-bold">
                Giris
                </button>
                <div className="flex justify-between items-center text-sm ">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Beni Hatırla
                  </p>
                  <p>Sifremi Unuttum </p>
                </div>
                <p className="flex justify-between w-[40%] py-8">
                  <span className="text-gray-600">Hesabım Yok</span>{" "}
                  <Link to="/signup"> Kayıt Ol</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
