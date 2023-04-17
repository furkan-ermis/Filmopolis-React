import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Kayit = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {  signUp } = UserAuth();
    const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="perspective-6 w-full h-screen overflow-hidden">
       
      <img src={process.env.PUBLIC_URL+"poster.png"} alt="/" className="hidden rounded-3xl  rotate-x-20 rotate-y-55  -rotate-z-20 scale-110 sm:block absolute -right-[11rem] bottom-[16rem] w-[70%] min-h-full  object-cover" />        <img src={process.env.PUBLIC_URL+"poster.png"} alt="/" className="sm:hidden fixed w-full min-h-[85%] bottom-0 object-cover" />
        <div className="bg-black/60  fixed top-0 left-0 w-full h-screen"></div>
        <div className=" bg-gradient-to-l from-black/10 via-black/40  to-black/80 fixed top-0 left-0 w-[100%] h-screen"></div>
        
        <div className="fixed w-[40%] bottom-[22em]  sm:-bottom-[3em] sm:left-16 px-4 py-24 z-50 ">
          <div className="max-w-[400px] h-[340px]  bg-black/40   backdrop-blur rounded-3xl  text-white">
            <div className="max-w-[350px] mx-auto py-2">
              <h1 className="text-3xl font-bold">Kayıt Ol</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none p-3 my-2 bg-transparent shadow-md shadow-slate-500 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-none p-3 my-2 bg-transparent shadow-md shadow-slate-500 rounded"
                  type="password"
                  placeholder="Parola"
                  autoComplete="Parola"
                />
                <button className="hover:bg-gradient-to-r hover:from-yellow-400  hover:to-transparent hover:text-black  border  border-yellow-400 py-3 my-6 rounded font-bold">
                  Kayıt Ol
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Beni Hatırla
                  </p>
                  <p>Yardıma ihtiyacım var </p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">Zaten Bir Hesabım Var</span>{" "}
                  <Link to="/login"> Giris Yap</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kayit;
