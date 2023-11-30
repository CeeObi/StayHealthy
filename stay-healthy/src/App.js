import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';

function App() {

  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="/signup" element={<Sign_Up/>}/>
                <Route path="/login" element={<Login/>}/>
                
            </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;