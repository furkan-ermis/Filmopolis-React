import React from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Account from './pages/Account';
import Kayit from './pages/Kayit';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
      <Route path='/signup' element={<Kayit />} />
     </Routes>
    </AuthContextProvider>
     

    </>
  );
}

export default App;
