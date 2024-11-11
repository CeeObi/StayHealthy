import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import { testData } from './utils/GetData';





const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Notification>
              <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/register" element={<SignUp/>}/>
                  <Route path="/login" element={<Login/>}/>                                             
                  <Route path="/booking-consultation" element={<BookingConsultation/>}/>
                  <Route path="/reports" element={<ReportsLayout/>}/>
                  <Route path="/reviews" element={<ReviewForm  avalableDocs={testData} />}/>                  
              </Routes>   
            </Notification>         
        </BrowserRouter>
       
    </div>
  );
}

export default App;