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
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full object-cover"
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-slate-200/40 text-white">
            <div className="max-w-[350px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Kayıt Ol</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="Parola"
                  autoComplete="Parola"
                />
                <button className="bg-rose-600 py-3 my-6 rounded font-bold">
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
