import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import FindDoctorSearchIC from './Components/InstantConsultationBooking/FindDoctorSearchIC/FindDoctorSearchIC';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';


function App() {
  return (
    <div>
        <BrowserRouter>
            <Notification>
              <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/register" element={<SignUp/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/instant-consultation" element={<InstantConsultation/>}/>                
                  <Route path="/findadoctor" element={<FindDoctorSearchIC/>}/>                
                  <Route path="/booking-consultation" element={<BookingConsultation/>}/>
              </Routes>   
            </Notification>         
        </BrowserRouter>
       
    </div>
  );
}

export default App;