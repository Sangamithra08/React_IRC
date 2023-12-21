import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Login1';
import Home from './Components/Home'; 
import Signup from './Components/SignUp'; 
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login1" element={<NavBar/>} />
      </Routes>
      <Dashboard/>
    </BrowserRouter>
  );
};

export default App;
