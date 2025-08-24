
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; import Home from './pages/Home'; import About from './pages/About'; import Contact from './pages/Contact'; import FAQ from './pages/FAQ'; import Profile from './pages/Profile'; import Orders from './pages/Orders'; import LoginModal from './components/LoginModal';
export default function App(){ const [showLogin,setShowLogin]=useState(false); const [user,setUser]=useState(()=>{ const raw = localStorage.getItem('raileats_user'); return raw ? JSON.parse(raw) : null; });
const handleLogin = (user,token)=>{ localStorage.setItem('raileats_user', JSON.stringify({user,token})); setUser({user,token}); setShowLogin(false); };
const handleLogout = ()=>{ localStorage.removeItem('raileats_user'); setUser(null); };
return (<Router><Navbar user={user?.user} onLogin={()=>setShowLogin(true)} onLogout={handleLogout}/><div className='container'><Routes><Route path='/' element={<Home/>}/><Route path='/about' element={<About/>}/><Route path='/contact' element={<Contact/>}/><Route path='/faq' element={<FAQ/>}/><Route path='/profile' element={user ? <Profile/> : <Navigate to='/'/>}/><Route path='/orders' element={user ? <Orders/> : <Navigate to='/'/>}/></Routes></div><LoginModal show={showLogin} onClose={()=>setShowLogin(false)} onSuccess={handleLogin} apiBase={process.env.REACT_APP_API_URL||''}/></Router>); }
